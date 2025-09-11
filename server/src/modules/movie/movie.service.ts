import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

// service
import { PrismaService } from 'src/prisma/prisma.service';

// dto
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetAllMoviesDto } from './dto/get-all-movies.dto';
import { CreateCommentDto } from './dto/create-comment.dto';

// utils
import { createSlug } from 'src/utils/createSlug';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  async all(
    userId: string | null,
    { page, limit, genre, year }: GetAllMoviesDto,
  ) {
    const where: any = {};

    if (genre) {
      where.genres = { has: genre };
    }

    if (year) {
      where.releaseYear = +year;
    }

    const [movies, total] = await this.prisma.$transaction([
      this.prisma.movie.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where,
        select: {
          id: true,
          posterUrl: true,
          slug: true,
          title: true,
          description: true,
          rating: true,
          genres: true,
          _count: userId
            ? {
                select: {
                  likes: {
                    where: { userId },
                  },
                },
              }
            : false,
        },
      }),
      this.prisma.movie.count({ where }),
    ]);

    const data = movies.map((movie: any) => ({
      id: movie.id,
      posterUrl: movie.posterUrl,
      slug: movie.slug,
      title: movie.title,
      description: movie.description,
      rating: movie.rating,
      genres: movie.genres,
      isLiked: userId ? movie._count.likes > 0 : false,
    }));

    return { data, total };
  }

  async get(movieId: string) {
    const movie = await this.prisma.movie.findUnique({
      where: { id: movieId },
    });
    if (!movie) throw new NotFoundException('Movie is not found');
    return movie;
  }

  async getBySlug(userId: string | null, slug: string) {
    const movie = await this.prisma.movie.findUnique({
      where: { slug },
      include: {
        screenshots: { take: 3 },
        _count: userId
          ? {
              select: {
                likes: { where: { userId } },
                comments: { where: { userId } },
              },
            }
          : false,
      },
    });

    if (!movie) throw new NotFoundException('Movie is not found');

    return {
      ...movie,
      isLiked: userId ? movie._count.likes > 0 : false,
      isCommented: userId ? movie._count.comments > 0 : false,
    };
  }

  async getRandomMovie() {
    const count = await this.prisma.movie.count();
    const skip = Math.floor(Math.random() * count);

    return this.prisma.movie.findFirst({
      skip,
      select: { slug: true },
    });
  }
  
  // News Emulation
  async getNews() {
    return this.prisma.movie.findMany({
      select: {
        id: true,
        title: true,
        posterUrl: true,
        releaseYear: true,
        genres: true,
        slug: true,
      },
      orderBy: {},
      take: 5,
    });
  }

  async create(dto: CreateMovieDto) {
    const { screenshots, ...rest } = dto;

    const result = await this.prisma.movie.create({
      data: { ...rest, slug: createSlug(rest.title) },
    });

    await this.prisma.screenshot.createMany({
      data: screenshots.map(url => ({
        movieId: result.id,
        url,
      })),
    });

    return true;
  }

  async addLike(userId: string, movieId: string) {
    await this.get(movieId);

    const existingLike = await this.prisma.movieLike.findUnique({
      where: { movieId_userId: { movieId, userId } },
    });

    if(existingLike){
      throw new ConflictException('You already liked this movie');
    }

    await this.prisma.movieLike.create({
      data: { movieId, userId },
    });

    const likeCount = await this.prisma.movieLike.count({
      where: { movieId },
    });

    await this.prisma.movie.update({
      where: { id: movieId },
      data: { rating: likeCount },
    });
  }

  async deleteLike(userId: string, movieId: string) {
    await this.get(movieId);

    const existingLike = await this.prisma.movieLike.findUnique({
      where: { movieId_userId: { movieId, userId } },
    });

    if (existingLike) {
      await this.prisma.movieLike.delete({
        where: { movieId_userId: { movieId, userId } },
      });
    } else {
      throw new NotFoundException('Like is not found');
    }

    const likeCount = await this.prisma.movieLike.count({
      where: { movieId },
    });

    await this.prisma.movie.update({
      where: { id: movieId },
      data: { rating: likeCount },
    });
  }

  async createComment(userId: string, dto: CreateCommentDto) {
    await this.get(dto.movieId);

    const isExist = await this.prisma.comment.findUnique({where: {"movieId_userId": {movieId: dto.movieId, userId}}});

    if(isExist){
      throw new ConflictException("Comment is already exist")
    }

    return this.prisma.comment.create({ data: {...dto, userId} });
  }

  async getComments(movieId: string) {
    return this.prisma.comment.findMany({ 
      where: { movieId },
      select: {
        id: true,
        text: true,
        createdAt: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            avatarUrl: true,
          },
        },
    }
  })
  }
}

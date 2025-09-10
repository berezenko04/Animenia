import { Avatar, Stack, Typography } from "@mui/material";

const Comment: React.FC = () => {
  return (
    <Stack sx={{ flexDirection: "row", alignItems: "flex-start", gap: 4 }}>
      <Avatar sx={{ width: 56, height: 56 }} />
      <Stack sx={{ flex: 1, gap: 1.5 }}>
        <Stack sx={{ gap: 1 }}>
          <Typography variant="h3">Frorex Studio</Typography>
          <Typography sx={{ color: "text.secondary" }}>12/09/2022</Typography>
        </Stack>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies senectus faucibus aliquam erat elit amet
          elit nisl. Dignissim placerat arcu, euismod a aliquam. Lorem elementum posuere blandit enim aliquet vitae
          feugiat. Commodo maecenas luctus risus facilisi magnis fames pretium. Consectetur viverra nunc orci laoreet
          sed. Enim sed sapien consectetur orci faucibus. Pretium turpis in nunc nibh diam. Lectus sit urna posuere
          pellentesque ullamcorper mi cras eu ante. Fermentum vitae tortor non consequat
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Comment;

# 🎬 Animenia

<a href="https://animenia.xyz" target="_blank">
<img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4e4137141816895.625b357cb954b.png" alt="Animenia Banner" width="1400" style="border-radius: 10px"/>
</a>

> Modern platform for watching and discussing anime movies

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

---

## ✨ What is it?

**Animenia** is a full-featured web platform for anime lovers where you can:

- 🎭 Browse anime movie catalog with advanced filters and year sorting
- 💬 Discuss movies with other users through comments system
- ❤️ Like and rate content with personalized recommendations
- 🔐 Securely register and manage profile with multi-session support
- 🔑 Reset password with beautiful email templates
- 🌙 Enjoy beautiful interface in dark theme
- 📱 Responsive design that works on all devices

---

## 🎨 Features

- **Modern Design** – Beautiful and responsive interface  
- **Security** – JWT authentication with refresh tokens  
- **Performance** – Optimized queries and caching  
- **Mobile Ready** – Works great on all devices  
- **Dark Theme** – Comfortable viewing anytime  

---

## 🏗️ Architecture

### Frontend
- **React 18 + TypeScript**
- **Material-UI** – reusable UI components
- **React Router** – navigation and routing
- **React Query** – data fetching and caching
- **Redux Toolkit** – state management

### Backend
- **NestJS** – REST API framework
- **Prisma** – database ORM for PostgreSQL
- **JWT authentication** – secure access with refresh tokens
- **Email service** – notifications and password reset

### Deployment
- **Nginx** – reverse proxy for frontend and API
- **HTTPS** – secured with Let's Encrypt
- **PM2** – process management for NestJS in production

## 📬 API Testing

All backend API endpoints are available in a **Postman collection**, so you can test them easily:  

- **Postman Collection:** [Animenia API Collection](./postman/Animenia.postman_collection.json)  
- Import the collection into Postman  
- Use the included environment variables to connect to your local or production backend  
- Supports authentication, movies, comments, user registration, and more  

> 💡 Tip: Make sure to set the `baseUrl` variable in Postman to match your API URL (`http://localhost:3000/api/v1` for local development or `https://api.animenia.xyz` for production)

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

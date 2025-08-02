# 🚀 DevCircle

A full-stack mini LinkedIn-like social platform built with **React**, **Node.js**, and **MongoDB**, allowing users to register, post content, and view other profiles.

## 📚 Stack Used

**Frontend:**
- React (Vite)
- Tailwind CSS

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (Mongoose)
  
## ✨ Features

- User registration and login with validation  
- Protected routes for authenticated users  
- Text-only post creation and public feed display  
- Individual profile pages showing user info and posts  
- Timestamped posts using Moment.js  
- Responsive design using Tailwind CSS  

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/MohitMahara/DevCircle.git
cd DevCircle

```

### 2. Setup Client

```bash
cd client
npm install
npm run dev

```

### 3. Setup Server

```bash
cd server
npm install
npm start / npm run server
```

### 3. Create .env file inside client folder

```bash
VITE_SERVER_API=your-backend-url
```

### 3. Create .env filte inside server folder

```bash
MONGO_URI=
JWT_SECRET=
PORT=

```

## Demo User Logins
 ```bash
  Email - ajay@gmail.com
  Password - 12345678
  Email - mohit@gmail.com
  Password- 12345
```

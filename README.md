# YouTube Backend Clone

A professional RESTful API backend built with Node.js, Express, and MongoDB that replicates core YouTube functionality. This project demonstrates modern backend development practices including user authentication, video management, and database operations.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [License](#license)
- [Author](#author)

## ✨ Features

- **User Authentication**: Secure user registration and login with JWT tokens
- **Password Security**: Bcrypt-based password hashing and validation
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **File Upload**: Multer integration for media file handling
- **Cloud Storage**: Cloudinary integration for image and video storage
- **Database**: MongoDB with Mongoose ODM for scalable data management
- **Pagination**: Mongoose aggregation pagination for efficient data retrieval
- **RESTful API**: Clean and structured API architecture
- **Code Formatting**: Prettier configuration for consistent code style

## 🛠️ Tech Stack

**Runtime & Framework:**
- **Node.js** - JavaScript runtime
- **Express.js** (v5.2.1) - Web application framework

**Database:**
- **MongoDB** - NoSQL database
- **Mongoose** (v9.7.0) - MongoDB object modeling

**Authentication & Security:**
- **JWT** (jsonwebtoken v9.0.3) - Token-based authentication
- **Bcrypt** (v6.0.0) - Password hashing

**File & Media Handling:**
- **Multer** (v2.2.0) - File upload middleware
- **Cloudinary** (v2.10.0) - Cloud media storage and transformation

**Utilities:**
- **CORS** (v2.8.6) - Cross-origin resource sharing
- **Cookie Parser** (v1.4.7) - Cookie parsing middleware
- **dotenv** (v17.4.2) - Environment variable management

**Development Tools:**
- **Nodemon** (v3.1.14) - Auto-restart development server
- **Prettier** (v3.8.4) - Code formatter

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local or MongoDB Atlas account)
- **Cloudinary** account (for media storage)

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/meer140/YouTube-Backend-Clone.git
   cd YouTube-Backend-Clone
   ```

2. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=3000

# Database Configuration
MONGODB_URL=mongodb://localhost:27017
DB_NAME=youtube

# JWT Configuration
ACCESS_TOKEN_SECRET=your_jwt_secret_key_here
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
REFRESH_TOKEN_EXPIRY=10d

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Replace the placeholder values with your actual configuration.

## 📁 Project Structure

```
YouTube-Backend-Clone/
├── backend/
│   ├── src/
│   │   ├── index.js              # Application entry point
│   │   ├── app.js                # Express app configuration
│   │   ├── constants.js           # Application constants
│   │   ├── db/
│   │   │   └── index.js          # Database connection
│   │   ├── models/               # Mongoose schemas
│   │   ├── controllers/          # Route controllers
│   │   ├── routes/               # API routes
│   │   ├── middleware/           # Custom middleware
│   │   └── utils/                # Utility functions
│   ├── public/                   # Static files
│   ├── package.json              # Dependencies
│   ├── .env                      # Environment variables
│   └── .gitignore                # Git ignore rules
└── README.md
```

## 🔌 API Endpoints

### User Management
- `POST /api/v1/users/register` - Register a new user
- `POST /api/v1/users/login` - User login
- `POST /api/v1/users/logout` - User logout
- `GET /api/v1/users/profile` - Get user profile
- `PUT /api/v1/users/profile` - Update user profile

## 🔧 Development

### Start Development Server

Run the development server with hot-reload:

```bash
npm run dev
```

The server will start at `http://localhost:3000` (or your configured PORT).

### Code Formatting

Format your code using Prettier:

```bash
npm run format
```

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `MONGODB_URL` | MongoDB connection string | mongodb://localhost:27017 |
| `DB_NAME` | Database name | youtube |
| `ACCESS_TOKEN_SECRET` | JWT secret for access tokens | your_secret_key |
| `ACCESS_TOKEN_EXPIRY` | Access token expiration | 1d |
| `REFRESH_TOKEN_SECRET` | JWT secret for refresh tokens | your_secret_key |
| `REFRESH_TOKEN_EXPIRY` | Refresh token expiration | 10d |
| `CORS_ORIGIN` | CORS origin URL | http://localhost:3000 |
| `CLOUDINARY_NAME` | Cloudinary account name | your_account |
| `CLOUDINARY_API_KEY` | Cloudinary API key | your_key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | your_secret |

## 📚 Dependencies

### Production Dependencies
- **express** - Web framework
- **mongoose** - MongoDB ODM
- **mongoose-aggregate-paginate-v2** - Pagination helper
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - CORS middleware
- **cookie-parser** - Cookie handling
- **multer** - File upload handling
- **cloudinary** - Cloud storage
- **dotenv** - Environment variable loader

### Development Dependencies
- **nodemon** - Development server with auto-reload
- **prettier** - Code formatter

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- HTTP-only cookie support
- CORS protection
- Request payload size limiting (16KB)
- Environment variable isolation

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Mir Mustafa**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/meer140/YouTube-Backend-Clone/issues).

## 📞 Support

For support, please open an issue on the [GitHub repository](https://github.com/meer140/YouTube-Backend-Clone).

---

**Last Updated:** June 2026

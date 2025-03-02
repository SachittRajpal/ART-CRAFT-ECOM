# User Authentication API (Node.js, Express, Sequelize)

This project is a **User Authentication API** built using **Node.js**, **Express.js**, and **Sequelize ORM**. It provides user registration, login, and validation with structured API routes and database integration.

## 🚀 Features
- ✅ User registration with input validation
- ✅ Secure password storage using hashing (bcrypt)
- ✅ User login with authentication
- ✅ Sequelize ORM for database management
- ✅ Express.js-based RESTful API structure
- ✅ Environment variable support via `.env`

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL / MySQL (via Sequelize ORM)
- **Validation:** express-validator
- **Security:** bcrypt for password hashing
- **Environment Management:** dotenv

## ⚙️ Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
2. **Install dependencies**  
   ```bash
   npm install
3. **Set up enviornment variables**
   Create a .env file in the root directory and add:  
   ```ini
   PORT=5000
   DATABASE_URL=your_database_connection_string
4. **Run the server**
   ```bash
   node server.js

 ## 📌 API Endpoints
 🔹 Register a User
- URL: POST /api/users/register
- Body (JSON):
  ```JSON
  {
  "username": "testuser",
  "emailid": "testuser@example.com",
  "password": "testpassword",
  "roleid": 1
  }
 🔹 Login a User
- URL: POST /api/users/login
- Body (JSON):
  ```JSON
  {
  "emailid": "testuser@example.com",
  "password": "testpassword"
  }

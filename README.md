# 🚀 Expense Tracker Backend 💻

### 🔥 A robust REST API backend for the Expense Tracker application built with Node.js and Express.js
*Power your financial management with a rock-solid backend! 💪📊*

---

## 🌟 Features That Rock Your World! 

🎯 **RESTful API Design**: Clean and intuitive API endpoints  
🔐 **User Authentication**: JWT-based secure authentication system  
💰 **Expense Management**: Full CRUD operations for expenses  
🏷️ **Category Management**: Dynamic expense categorization  
📊 **Data Analytics**: Spending insights and reporting endpoints  
✅ **Data Validation**: Input validation and sanitization  
🛡️ **Error Handling**: Comprehensive error handling and logging  
🗄️ **Database Integration**: MongoDB/MySQL support with Mongoose/Sequelize ORM  
🔒 **Security**: CORS, rate limiting, and data encryption  
📚 **API Documentation**: Swagger/OpenAPI documentation  
🤖 **AI Spending Insights**: Integration with Google Gemini for smart financial summaries
🖼️ **Cloud-Ready Uploads**: Base64 memory storage for images ensuring persistence on ephemeral hosts
🔑 **Advanced Password Recovery**: Bcrypt-hashed security questions for password resets
🛡️ **Production Security**: Helmet headers, express-rate-limit, and strict CORS policies

---

## 🛠️ Tech Stack (The Power Tools! ⚡)

| Technology | Purpose | Version | Status |
|------------|---------|---------|--------|
| 🟢 **Node.js** | Runtime Environment | v16+ | ✅ Production Ready |
| 🚀 **Express.js** | Web Framework | Latest | ✅ Lightning Fast |
| 🍃 **MongoDB** / 🐬 **MySQL** | Database | v4.4+ / v8.0+ | ✅ Scalable |
| 🦫 **Mongoose** / 📊 **Sequelize** | ODM/ORM | Latest | ✅ Robust |
| 🎫 **JWT** | Authentication | Latest | ✅ Secure |
| ✨ **Joi** / 🔍 **Express-validator** | Validation | Latest | ✅ Reliable |
| 🛡️ **Helmet** / 🌐 **CORS** / 🔐 **bcryptjs** | Security | Latest | ✅ Fort Knox |
| 🌍 **dotenv** | Environment | Latest | ✅ Flexible |
| 🚦 **express-rate-limit** | Brute-force Protection | Latest | ✅ Safe |
| 🧠 **@google/genai** | AI Integration | Latest | ✅ Smart |
| 📝 **Winston** / 📊 **Morgan** | Logging | Latest | ✅ Observable |
| 🧪 **Jest** / ☕ **Mocha** | Testing | Latest | ✅ Bulletproof |
| 📖 **Swagger UI** | Documentation | Latest | ✅ Interactive |

---

## 📋 Prerequisites (Let's Get Ready! 🎯)

Before diving into this awesome backend, make sure you have:

- 🟢 **Node.js** (version 16.0+ required) 
- 📦 **npm** (version 8.0+) or **yarn** 
- 🍃 **MongoDB** (v4.4+) or 🐬 **MySQL** (v8.0+)
- 🔧 **Git** 

> 💡 **Pro Tip**: Use `node --version` and `npm --version` to check your current versions!

---

## 🚀 Installation (Ready for Takeoff! 🛫)

### 1️⃣ **Clone the Repository** 📥
```bash
git clone https://github.com/Pranshu-15/expense-tracker-backend.git
cd expense-tracker-backend
```

### 2️⃣ **Install Dependencies** 📦
```bash
npm install
# or if you prefer yarn 🧶
yarn install
```

### 3️⃣ **Environment Setup** ⚙️
Create a `.env` file in the root directory:
```env
# 🖥️ Server Configuration
PORT=3000
NODE_ENV=development

# 🍃 Database Configuration (MongoDB)
MONGODB_URI=mongodb://localhost:27017/expense-tracker

# 🐬 Database Configuration (MySQL - Alternative)
# DB_HOST=localhost
# DB_PORT=3306
# DB_NAME=expense_tracker
# DB_USER=your_username
# DB_PASSWORD=your_password

# 🎫 JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d

# 🔒 Security
BCRYPT_SALT_ROUNDS=12

# 🌐 CORS
FRONTEND_URL=http://localhost:5173

# 📧 Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 4️⃣ **Database Setup** 🗄️

**🍃 For MongoDB:**
```bash
# Make sure MongoDB is running
mongosh
use expense-tracker
```

**🐬 For MySQL:**
```sql
CREATE DATABASE expense_tracker;
```

### 5️⃣ **Launch the Server** 🚀
```bash
# 🔥 Development mode with auto-reload
npm run dev

# 🏭 Production mode
npm start
```

🎉 **Boom!** Your server is now running at `http://localhost:3000`

---

## 🎬 Available Scripts (Your Command Arsenal! ⚔️)

| Script | What It Does | Emoji |
|--------|--------------|-------|
| `npm start` | 🏭 Runs server in production mode | 🚀 |
| `npm run dev` | 🔥 Runs server in development with auto-reload | 🔄 |
| `npm test` | 🧪 Runs the test suite | ✅ |
| `npm run test:watch` | 👀 Runs tests in watch mode | 🔄 |
| `npm run lint` | 🔍 Checks code quality issues | 🧹 |
| `npm run lint:fix` | 🔧 Auto-fixes ESLint issues | ✨ |
| `npm run docs` | 📚 Generates API documentation | 📖 |

---

## 📁 Project Structure (Organized Perfection! 🗂️)

```
expense-tracker-backend/
├── 📂 src/
│   ├── 🎮 controllers/
│   │   ├── 🔐 authController.js
│   │   ├── 💰 expenseController.js
│   │   ├── 🏷️ categoryController.js
│   │   └── 📊 analyticsController.js
│   ├── 🏗️ models/
│   │   ├── 👤 User.js
│   │   ├── 💸 Expense.js
│   │   └── 📂 Category.js
│   ├── 🛣️ routes/
│   │   ├── 🔑 auth.js
│   │   ├── 💰 expenses.js
│   │   ├── 🏷️ categories.js
│   │   └── 📈 analytics.js
│   ├── 🔧 middleware/
│   │   ├── 🛡️ auth.js
│   │   ├── ✅ validation.js
│   │   ├── ❌ errorHandler.js
│   │   └── 🚦 rateLimiter.js
│   ├── 🔨 utils/
│   │   ├── 🗄️ database.js
│   │   ├── 📝 logger.js
│   │   └── 🎯 helpers.js
│   ├── ⚙️ config/
│   │   ├── 🗄️ database.js
│   │   └── 📚 swagger.js
│   └── 🚀 app.js
├── 🧪 tests/
│   ├── 🔐 auth.test.js
│   ├── 💰 expenses.test.js
│   └── 🏷️ categories.test.js
├── 📚 docs/
│   └── 📖 api-documentation.md
├── 📦 package.json
├── 🔧 .env.example
└── 📖 README.md
```

---

## 🛣️ API Endpoints (Your Navigation Map! 🗺️)

### 🔐 Authentication Endpoints
| Method | Endpoint | Purpose | Emoji |
|--------|----------|---------|-------|
| `POST` | `/api/auth/register` | 📝 Register new user | 🆕 |
| `POST` | `/api/auth/login` | 🔑 User login | 🚪 |
| `POST` | `/api/auth/logout` | 🚪 User logout | 👋 |
| `GET` | `/api/auth/profile` | 👤 Get user profile | 📋 |
| `PUT` | `/api/auth/profile` | ✏️ Update user profile | 🔄 |
| `POST` | `/api/auth/forgot` | 🤔 Forgot password | 🔐 |
| `POST` | `/api/auth/reset` | 🔄 Reset password | ✨ |

### 💰 Expense Endpoints
| Method | Endpoint | Purpose | Emoji |
|--------|----------|---------|-------|
| `GET` | `/api/expenses` | 📥 Get all expenses (with filters) | 📊 |
| `POST` | `/api/expenses` | ➕ Create new expense | ✨ |
| `GET` | `/api/expenses/:id` | 🔍 Get expense by ID | 🎯 |
| `PUT` | `/api/expenses/:id` | ✏️ Update expense | 🔄 |
| `DELETE` | `/api/expenses/:id` | 🗑️ Delete expense | ❌ |
| `GET` | `/api/expenses/search` | 🔍 Search expenses | 🕵️ |

### 🏷️ Category Endpoints  
| Method | Endpoint | Purpose | Emoji |
|--------|----------|---------|-------|
| `GET` | `/api/categories` | 📥 Get all categories | 📂 |
| `POST` | `/api/categories` | ➕ Create new category | ✨ |
| `PUT` | `/api/categories/:id` | ✏️ Update category | 🔄 |
| `DELETE` | `/api/categories/:id` | 🗑️ Delete category | ❌ |

### 📊 Analytics Endpoints
| Method | Endpoint | Purpose | Emoji |
|--------|----------|---------|-------|
| `GET` | `/api/analytics/summary` | 📊 Get expense summary | 📈 |
| `GET` | `/api/analytics/monthly` | 📅 Monthly spending data | 📊 |
| `GET` | `/api/analytics/category-wise` | 🥧 Category-wise breakdown | 📊 |
| `GET` | `/api/analytics/trends` | 📈 Spending trends | 📊 |

---

## 📝 Request/Response Examples (See It in Action! 🎬)

### ➕ Create Expense
```bash
POST /api/expenses
Content-Type: application/json
Authorization: Bearer <jwt_token>

{
  "title": "Grocery Shopping 🛒",
  "amount": 75.50,
  "category": "Food 🍕",
  "date": "2025-06-11",
  "description": "Weekly grocery shopping"
}
```

### ✅ Response
```json
{
  "success": true,
  "data": {
    "id": "60f7b1b5e1b9c123456789",
    "title": "Grocery Shopping 🛒",
    "amount": 75.50,
    "category": "Food 🍕",
    "date": "2025-06-11T00:00:00.000Z",
    "description": "Weekly grocery shopping",
    "userId": "60f7b1b5e1b9c987654321",
    "createdAt": "2025-06-11T10:30:00.000Z",
    "updatedAt": "2025-06-11T10:30:00.000Z"
  }
}
```

---

## 🏗️ Database Models (Data Architecture! 📊)

### 👤 User Model
```javascript
{
  _id: ObjectId,
  name: String (required), // 📝
  email: String (required, unique), // 📧
  password: String (required, hashed), // 🔐
  avatar: String, // 🖼️
  createdAt: Date, // ⏰
  updatedAt: Date // 🔄
}
```

### 💸 Expense Model
```javascript
{
  _id: ObjectId,
  title: String (required), // 📝
  amount: Number (required), // 💰
  category: String (required), // 🏷️
  date: Date (required), // 📅
  description: String, // 📄
  userId: ObjectId (ref: User), // 👤
  createdAt: Date, // ⏰
  updatedAt: Date // 🔄
}
```

### 📂 Category Model
```javascript
{
  _id: ObjectId,
  name: String (required, unique), // 📝
  color: String, // 🎨
  icon: String, // 🎯
  userId: ObjectId (ref: User), // 👤
  createdAt: Date, // ⏰
  updatedAt: Date // 🔄
}
```

---

## 🔐 Authentication & Security (Fort Knox Level! 🏛️)

### 🎫 JWT Token Structure
```json
{
  "userId": "60f7b1b5e1b9c987654321",
  "email": "user@example.com",
  "iat": 1623456789,
  "exp": 1624061589
}
```

### 🛡️ Security Features
- 🔐 Password hashing with bcrypt
- 🎫 JWT token authentication  
- 🌐 CORS protection
- 🚦 Rate limiting
- ✅ Input validation and sanitization
- 🛡️ Helmet.js security headers
- 🍃 MongoDB injection protection

---

## ❌ Error Handling (Bulletproof System! 🛡️)

### 📝 Error Response Format
```json
{
  "success": false,
  "error": {
    "message": "Error description 📝",
    "statusCode": 400,
    "stack": "Error stack trace (development only) 🔍"
  }
}
```

### 🚦 Common Status Codes
| Code | Meaning | Emoji |
|------|---------|-------|
| `200` | Success | ✅ |
| `201` | Created | ✨ |
| `400` | Bad Request | ❌ |
| `401` | Unauthorized | 🚫 |
| `403` | Forbidden | 🔒 |
| `404` | Not Found | 🔍 |
| `422` | Validation Error | ⚠️ |
| `500` | Internal Server Error | 💥 |

---

## 🧪 Testing (Quality Assurance! ✅)

### 🚀 Run the Test Suite
```bash
npm test
```

### 📊 Run Tests with Coverage
```bash
npm run test:coverage
```

### 🗂️ Test Structure
```
tests/
├── 🧩 unit/
│   ├── 🎮 controllers/
│   ├── 🏗️ models/
│   └── 🔨 utils/
├── 🔄 integration/
│   ├── 🔐 auth.test.js
│   └── 💰 expenses.test.js
└── 📦 fixtures/
    └── 🎯 testData.js
```

---

## 🚀 Deployment (Go Live! 🌍)

### 🌍 Environment Variables for Production
```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/expense-tracker
JWT_SECRET=your-production-jwt-secret
```

### 🟣 Deploy to Heroku
1. 🆕 Create a Heroku app: `heroku create expense-tracker-api`
2. ⚙️ Set environment variables: `heroku config:set NODE_ENV=production`
3. 🚀 Deploy: `git push heroku main`

### 🚂 Deploy to Railway
1. 🔗 Connect your repository to Railway
2. ⚙️ Add environment variables in Railway dashboard
3. 🔄 Deploy automatically on push

### 🐳 Deploy with Docker
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📚 API Documentation (Interactive Docs! 🎮)

Access the interactive API documentation at:
- 🔥 Development: `http://localhost:3000/api-docs`
- 🌍 Production: `https://your-api-domain.com/api-docs`

---

## ⚡ Performance Optimization (Lightning Fast! 🏃‍♂️💨)

- 🗄️ Database query optimization with indexes
- 🗜️ Response compression with gzip
- 🚀 Caching with Redis (optional)
- 🔗 Connection pooling
- 🚦 Rate limiting to prevent abuse
- 📄 Pagination for large datasets

---

## 🤝 Contributing (Join the Dream Team! 👥)

### 1️⃣ **Fork the Repository** 🍴
### 2️⃣ **Create a Feature Branch** 🌿
```bash
git checkout -b feature/amazing-feature
```
### 3️⃣ **Commit Your Changes** 💾
```bash
git commit -m 'Add some amazing feature ✨'
```
### 4️⃣ **Push to Branch** 🚀
```bash
git push origin feature/amazing-feature
```
### 5️⃣ **Open a Pull Request** 🔄

---

## 📝 Development Guidelines (The Rules of Excellence! 👑)

- 🛣️ Follow RESTful API conventions
- 🚦 Use meaningful HTTP status codes
- 🛡️ Implement proper error handling
- 🧪 Write comprehensive tests
- 📚 Document all endpoints
- 🎨 Follow consistent code formatting
- 📝 Use meaningful commit messages

---

## 🔧 Troubleshooting (Problem Solver! 🛠️)

### 🚨 Common Issues & Solutions

#### ❌ **Issue**: Database connection failed
#### ✅ **Solution**: Check database credentials and ensure the database server is running

#### ❌ **Issue**: JWT token invalid  
#### ✅ **Solution**: Verify JWT_SECRET in environment variables and token format

#### ❌ **Issue**: CORS errors
#### ✅ **Solution**: Check FRONTEND_URL in environment variables and CORS configuration

#### ❌ **Issue**: Port already in use
#### ✅ **Solution**: Kill process using the port or change PORT in .env file
```bash
lsof -ti:3000 | xargs kill -9
```

---

## 📊 Monitoring & Logging (Observatory! 🔭)

### 📝 Production Logging
- ❌ Error tracking with Winston
- 📊 Request logging with Morgan
- ⚡ Performance monitoring
- 🗄️ Database query logging

### 💓 Health Check Endpoint
```
GET /health
```
**Response:**
```json
{
  "status": "OK ✅",
  "timestamp": "2025-06-11T10:30:00.000Z",
  "uptime": 3600,
  "database": "connected 🔗"
}
```

---

## 📜 License

This project is licensed under the MIT License 📄 - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**🎯 Pranshu** - [GitHub Profile](https://github.com/Pranshu-15) 

*Passionate backend developer crafting robust APIs! 🚀*

---

## 💬 Support (We're Here to Help! 🤝)

For support and questions:
1. 🔍 Check existing GitHub issues
2. 🆕 Create a new issue with detailed information  
3. 📧 Contact the maintainer

---

## 🎉 Happy Coding! 🚀💻✨

### Made with ❤️ and lots of ☕

*Building the future of expense tracking, one API at a time! 💰📊🚀*

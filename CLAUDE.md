# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start server (nodemon — auto-reloads on file changes)
npm start
```

No test or lint scripts are configured.

## Environment Variables

Required in `.env` at the project root:

```
MONGO_URL=<MongoDB Atlas connection string>
JWT_SECRET=<secret key>
PORT=8000
CLIENT_url=<frontend origin for CORS, e.g. http://localhost:5173>
```

The `uploads/` directory must exist before the server starts — it is where multer stores profile images and is served statically at `/uploads`.

## Architecture

**Entry point:** `server.js` — bootstraps Express, CORS, JSON body parsing, MongoDB connection, and mounts all route modules.

**Request flow:**
```
server.js → routes/*.js → middleware/authMiddleware.js (protect) → controllers/*.js → models/*.js
```

**Route prefixes:**

| Prefix | Router | Controller |
|---|---|---|
| `/api/v1/auth` | `authRoutes.js` | `authController.js` |
| `/api/v1/income` | `incomeRoutes.js` | `incomeController.js` |
| `/api/v1/expense` | `expenseRoutes.js` | `expenseController.js` |
| `/api/v1/dashboard` | `dashboardRoutes.js` | `dashboardController.js` |

**Auth flow:** `POST /register` and `POST /login` are public. All other routes use the `protect` middleware (`middleware/authMiddleware.js`), which verifies the Bearer JWT, then attaches the full User document (minus password) to `req.user`. Tokens expire in 1 hour.

**Password hashing** happens in a `pre('save')` bcrypt hook on the User model — never hash manually before calling `User.create()` or `user.save()`.

**Dashboard controller** (`controllers/dashboardController.js`) uses MongoDB aggregation to compute total income/expense, then separate `.find()` queries for the last 60-day income and 30-day expense windows, and returns the 10 most recent combined transactions sorted by date.

**Excel export** in income/expense controllers uses the `xlsx` package to build and stream `.xlsx` files directly from query results — no temp files.

**Image upload** (`middleware/uploadMiddleware.js`) uses multer disk storage. Files land in `uploads/<timestamp>-<fieldname><ext>`. Only JPEG/PNG are accepted. The route returns the full public URL.

## Data models — key fields

- **User**: `fullName`, `email`, `password` (bcrypt-hashed via pre-save hook), `profileImageUrl`
- **Income**: `userId` (ObjectId ref → User), `source`, `amount`, `date`, `icon`
- **Expense**: `userId` (ObjectId ref → User), `category`, `amount`, `date`, `icon`, `paidVia` (enum: `Cash` | `UPI` | `Credit Card` | `Debit Card`)

All models use `{ timestamps: true }`, so `createdAt`/`updatedAt` are always present.

# AIDF Back-End

A TypeScript-based REST API backend for an AI-powered job application and recruitment platform. This system manages job postings, job applications, and integrates with OpenAI for intelligent features and Clerk for authentication.

## 🚀 Features

- **Job Management**: Create, read, update, and delete job postings
- **Job Applications**: Submit and manage job applications
- **AI Integration**: OpenAI integration for intelligent features
- **Authentication**: Clerk-based authentication and authorization
- **Authorization Middleware**: Role-based access control
- **MongoDB Database**: NoSQL database with Mongoose ODM
- **TypeScript**: Fully typed for better development experience
- **Error Handling**: Global error handling middleware

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance (local or MongoDB Atlas)
- Clerk account and API keys
- OpenAI API key

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/savanisgithub/AIDF-back-end.git
   cd AIDF-back-end
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with the following variables:

   ```properties
   CONNECTION_STRING=mongodb://localhost:27017/your-database-name
   # Or for MongoDB Atlas:
   # CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority

   CLERK_SECRET_KEY=your_clerk_secret_key
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   OPENAI_API_KEY=your_openai_api_key
   PORT=8000
   ```

   **Important Notes:**

   - Replace `<username>`, `<password>`, and `<dbname>` with your actual MongoDB credentials
   - URL-encode special characters in your password
   - Get Clerk keys from your [Clerk Dashboard](https://dashboard.clerk.com/)
   - Get OpenAI API key from [OpenAI Platform](https://platform.openai.com/)

## 🚦 Running the Application

### Development Mode (with hot reload)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start on `http://localhost:8000` (or the PORT specified in your .env file).

## 📡 API Endpoints

### Jobs

| Method | Endpoint    | Description      | Authentication | Authorization |
| ------ | ----------- | ---------------- | -------------- | ------------- |
| GET    | `/jobs`     | Get all jobs     | No             | No            |
| POST   | `/jobs`     | Create a new job | Yes            | Admin only    |
| GET    | `/jobs/:id` | Get job by ID    | Yes            | No            |
| PUT    | `/jobs/:id` | Update a job     | No             | No            |
| DELETE | `/jobs/:id` | Delete a job     | No             | No            |

### Job Applications

| Method | Endpoint               | Description               | Authentication | Authorization |
| ------ | ---------------------- | ------------------------- | -------------- | ------------- |
| POST   | `/jobApplications`     | Submit a job application  | Yes            | No            |
| GET    | `/jobApplications`     | Get all job applications  | Yes            | Admin only    |
| GET    | `/jobApplications/:id` | Get job application by ID | Yes            | Admin only    |

## 🏗️ Project Structure

```
AIDF-back-end/
├── src/
│   ├── api/                    # API routes and middleware
│   │   ├── middleware/
│   │   │   ├── authorization-middleware.ts
│   │   │   └── global-error-handler.ts
│   │   ├── jobApplications.ts
│   │   └── jobs.ts
│   ├── application/            # Business logic layer
│   │   ├── jobApplicatons.ts
│   │   ├── jobs.ts
│   │   └── rating.ts
│   ├── domain/                 # Domain models and errors
│   │   └── errors/
│   │       ├── forbidden-error.ts
│   │       ├── not-found-error.ts
│   │       ├── unauthorized-errors.ts
│   │       └── validation-error.ts
│   ├── infrastructure/         # Database and schemas
│   │   ├── schemas/
│   │   │   ├── job.ts
│   │   │   └── jobApplication.ts
│   │   ├── db.ts
│   │   └── jobs.ts
│   └── index.ts               # Application entry point
├── .env                       # Environment variables
├── nodemon.json              # Nodemon configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🔧 Technologies Used

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Clerk
- **AI**: OpenAI API
- **Validation**: Zod
- **CORS**: cors middleware
- **Development**: nodemon, ts-node

## 🔐 Authentication & Authorization

This API uses Clerk for authentication:

1. **Authentication**: Protected routes require a valid Clerk session token in the request headers
2. **Authorization**: Admin-only routes check user roles using the `AuthorizationMiddleware`

To access protected endpoints, include the Clerk session token in your request headers:

```
Authorization: Bearer <your-clerk-token>
```

## 📝 Job Schema

Jobs include the following default questions for applicants:

1. Share your academic background and highlight key programming concepts you've mastered. How has your education shaped your current tech skill set?
2. Describe your professional development, emphasizing any certifications obtained. How have these certifications enriched your technical abilities, and can you provide an example of their practical application?
3. Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to overcome them? Highlight the technologies used and the impact of these projects on your overall growth as a professional.

## 🐛 Troubleshooting

### MongoDB Connection Issues

If you encounter `ENOTFOUND` errors:

1. **Check your connection string** in `.env`
2. **For MongoDB Atlas**: Ensure your IP is whitelisted in Atlas Network Access
3. **Test DNS resolution** (Windows PowerShell):
   ```powershell
   nslookup -type=SRV _mongodb._tcp.your-cluster.mongodb.net
   ```
4. **Flush DNS cache**:
   ```powershell
   ipconfig /flushdns
   ```
5. **URL-encode special characters** in your password

### Port Already in Use

If port 8000 is already in use, change the `PORT` in your `.env` file.

## 👤 Author

**savanisgithub**

- GitHub: [@savanisgithub](https://github.com/savanisgithub)

---

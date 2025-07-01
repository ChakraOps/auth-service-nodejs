
# 🔐 SecureAuth — Project Coding & Architecture Standards

**Last Updated:** July 2, 2025  
**Applies to:** SecureAuth, Backend-Core, All Future Auth-Related Systems  

---

## ⚡️ Enterprise Coding Principles

| Standard                        | Rule                                                                 |
|---------------------------------|---------------------------------------------------------------------|
| **Clean Code**                  | Simple, readable, self-documenting code. Avoid complex logic nesting. |
| **SOLID Principles**            | Follow Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion strictly. |
| **Separation of Concerns**      | Routes, controllers, services, models, and utilities must be fully decoupled. |
| **Modular Structure**           | Code organized by feature modules. No monolithic files. |
| **Index Exports**               | Use `index.js` to cleanly export folders (e.g., `routes/index.js`, `middlewares/index.js`). |
| **Centralized Routing**         | All routes defined centrally with versioning (`routes/index.js`). No route hardcoding inside handlers. |
| **Environment Safety**          | `.env` for all secrets. Never hardcode API keys, tokens, URLs, or salts. |
| **Production Readiness**        | All code examples, setups, and configs must be safe for real-world deployment. |
| **Strict Validation**           | Use `Joi`, `Zod`, or similar for input validation at request boundaries. |
| **Robust Error Handling**       | Use custom error classes (`ApiError`), global handlers, and avoid leaking sensitive info. |
| **Security Best Practices**     | Follow OWASP guidelines: secure headers, token hygiene, bcrypt/argon2 for passwords, rate limiting, etc. |

---

## 🗂 Recommended Project Structure

```
src/
├── config/         # All environment, DB, token, and security configs
├── routes/         # Route definitions, centralized in index.js
├── controllers/    # API request handlers
├── services/       # Business logic layer
├── models/         # Prisma or ORM schemas
├── middlewares/    # Express/Fastify middlewares
├── utils/          # Utility functions, helpers
├── errors/         # Custom error classes
├── validators/     # Request validation schemas
├── constants/      # Static values, enums
├── index.js        # App entry point
tests/               # Unit and integration tests
.env                 # Environment variables (never commit secrets)
```

---

## 🛡 SecureAuth-Specific Standards

✅ **Authentication Security**
- Passwords: Minimum bcrypt 12 rounds or argon2id with optimal config.
- Tokens: Use JWT with proper expiration, signature verification, and no sensitive payloads.
- Session invalidation after password reset or email change.

✅ **Authorization & RBAC**
- Role-based access control (RBAC) enforced via middlewares.
- Centralized permission constants, no role checks hardcoded across files.

✅ **Team Management Readiness**
- System designed with team structures: user can belong to multiple teams.
- Invitation flows, role escalation, and team ownership built-in.

✅ **Scalability**
- Database schema designed for horizontal scaling, with clear indices, relation management, and no premature optimizations.
- Microservice-compatible — easy to split modules in future phases.

✅ **Audit Trails**
- Plan for audit logs capturing sensitive operations like login attempts, password changes, and admin actions.

---

## ⚙ Development & Deployment Rules

- Node.js LTS version only.
- Use ESLint, Prettier, and Husky for linting, formatting, and commit safety.
- Dockerized by default with `.dockerignore` properly configured.
- CI/CD pipelines must run tests, linting, and vulnerability scans before deploy.

---

## 🧪 Testing Guidelines

- 100% code coverage target for critical modules (auth, tokens, permissions).
- Separate unit and integration test layers.
- Mocks/stubs used only when interacting with external services.

---

## 🚫 Strict Prohibitions

- ❌ No hardcoded secrets, keys, URLs — `.env` or config only.
- ❌ No business logic inside route files — use controllers and services.
- ❌ No unvalidated user inputs reaching DB or critical logic.
- ❌ No console.logs left in production code — use proper logger (Winston or similar).

---

# 📌 Final Notes

✅ All code, even examples from AI, must align with these standards.  
✅ Architecture decisions prioritize security, scalability, and real-world system readiness.  
✅ Violations will be rejected in code reviews or flagged for refactor.  

---

**This document reflects Top-Company, Enterprise-Grade Coding Practices tailored for SecureAuth.**  
Maintain, evolve, and audit these standards as the project scales.  

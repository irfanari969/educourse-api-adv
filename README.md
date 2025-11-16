# EduCourse API (Advanced)

This is the backend REST API for the EduCourse platform, a project for managing courses, users, and authentication. This project is built entirely with Node.js, Express, and MySQL.

This "Advanced" version includes professional-grade features such as JWT authentication, email notifications, image uploading, and in-depth data validation.

---

## ✨ Core Features

This project implements all essential backend functionalities:

* **Full Authentication & Authorization:**
    * User registration with secure password hashing (`bcrypt`).
    * User login with token generation (`jsonwebtoken`).
    * Protected endpoints (Middleware) that require a valid token.
* **User & Profile Management:**
    * Profile picture uploading (`multer`).
* **Course Management (CRUD):**
    * Endpoints to create, read, update, and delete course data.
* **Advanced Querying:**
    * **Search:** Search for courses by name.
    * **Filter:** Filter courses by category.
    * **Sort:** Sort courses by price or name.
    * **Pagination:** Limit the number of results per page (`page` & `limit`).
* **Notification Service:**
    * Sends a "Welcome" email upon successful registration (`nodemailer` & Ethereal).
* **Professional Validation:**
    * **Input Validation:** Checks registration data (`email`, `password`, etc.) using `joi`.
    * **File Validation:** Restricts file type (`.png`/`.jpg`) and file size (max 2MB) on upload.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL (with `mysql2` driver)
* **Authentication:** `jsonwebtoken` (JWT), `bcrypt` (Password Hashing)
* **File Uploads:** `multer`
* **Email Service:** `nodemailer`
* **Validation:** `joi`
* **Development:** `dotenv`, `nodemon`

---

## 🚀 Getting Started

### 1. Prerequisites

* Node.js (v16 or later)
* NPM
* A MySQL database (e.g., XAMPP / phpMyAdmin)

### 2. Installation & Setup

1.  **Clone this repository:**
    ```bash
    git clone [https://github.com/irfanari969/educourse-api-adv.git](https://github.com/irfanari969/educourse-api-adv.git)
    cd educourse-api-adv
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up the Database:**
    * Open phpMyAdmin and create a new database (e.g., `database_edu`).
    * Import the `src/sql/database_edu.sql` file into your new database. This will create all necessary tables.

4.  **Create your `.env` file:**
    * Create a file named `.env` in the project's root directory.
    * Copy and paste the content below into it, then fill in your local settings.

    ```.env.example
    # Database (Adjust to your XAMPP settings)
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_PORT=3306
    DB_NAME=database_edu

    # JSON Web Token (Create your own long, secret string)
    JWT_SECRET=this_is_my_very_long_jwt_secret

    # Email (Use your Ethereal test account)
    EMAIL_HOST=smtp.ethereal.email
    EMAIL_PORT=587
    EMAIL_USER=username@ethereal.email
    EMAIL_PASS=etherealpassword
    ```

5.  **Run the Server:**
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:3000`.

---

## 📚 API Endpoints

Here is a list of the primary available endpoints.

*(*Protected* = Requires a `Bearer Token` in the Authorization header)*

### Auth (`/user`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/user` | Registers a new user (Joi validation applied). |
| `POST` | `/user/login` | Logs in a user and returns a JWT. |

### Courses (`/courses`)

| Method | Endpoint | Description | Protected? |
| :--- | :--- | :--- | :--- |
| `GET` | `/courses` | Gets all courses. **Query Params:** `search`, `filter`, `sort`, `page`, `limit`. | **Yes** |
| `GET` | `/courses/:id` | Gets details for a single course. | No |
| `POST` | `/courses` | Creates a new course (requires data in body). | No |
| `PATCH` | `/courses/:id` | Updates a single course. | No |
| `DELETE`| `/courses/:id` | Deletes a single course. | No |

### Profile (`/profil`)

| Method | Endpoint | Description | Protected? |
| :--- | :--- | :--- | :--- |
| `PATCH` | `/profil/profile-picture` | Uploads a profile picture. Uses `form-data` with key `photo`. | **Yes** |

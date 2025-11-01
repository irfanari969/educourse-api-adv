# EduCourse REST API Project

This is a simple REST API project for managing course data (CRUD - Create, Read, Update, Delete). This project was built as a [Your Course/Bootcamp Name] assignment to demonstrate fundamental backend development skills.

---

## 🚀 Key Features

This API allows a client to perform the following operations on course data:

* **Create:** Add a new course to the database.
* **Read:** Get a list of all courses or a single course by its ID.
* **Update:** Update an existing course's information by its ID.
* **Delete:** Remove a course from the database by its ID.

---

## 🛠️ Tech Stack

This project was built using the following technologies:

* **Node.js:** As the server-side JavaScript runtime environment.
* **Express.js:** As the framework for building the API and managing routes.
* **MySQL (via `mysql2`):** As the database for storing course data.
* **Dotenv:** For managing environment variables (e.g., database credentials).
* **Postman:** Used for testing all API endpoints.

---

## 🏛️ Architecture

This project uses a simple **Model-Controller** architecture to separate concerns:

* **`config/`**: Contains the database connection file (using a connection pool).
* **`models/`**: Contains all SQL query logic (DML) for direct database interaction (SELECT, INSERT, UPDATE, DELETE).
* **`controllers/`**: Contains the business logic (the "middleman") that receives client requests and calls the appropriate model.
* **`routes/`**: Defines the API endpoints (URLs) and maps them to the relevant controller functions.

---

## 📖 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/courses` | Adds a new course. |
| `GET` | `/courses` |Retrieves all courses. |
| `GET` | `/courses/:id` | Retrieves a single course by ID. |
| `PATCH`| `/courses/:id` | Updates an existing course by ID. |
| `DELETE`| `/courses/:id` | Deletes a course by ID. |

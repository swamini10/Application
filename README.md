# Application# Employee Management System

A full-stack web application for managing employee records with CRUD operations. Built with Spring Boot backend and React frontend.

## 🏗️ Architecture

This application consists of three main components:

- **Spring Boot Backend** - REST API server with MySQL database
- **React Frontend** - Modern web interface with Bootstrap styling
- **API Testing** - Bruno collection for testing endpoints

## 🛠️ Technologies Used

### Backend
- **Java** 17
- **Spring Boot** 4.0.3
- **Spring Data JPA** - Data persistence
- **MySQL** - Database
- **Hibernate** - ORM
- **Lombok** - Code generation
- **Maven** - Build tool

### Frontend
- **React** 19.2.4
- **React Router DOM** 7.14.0 - Client-side routing
- **Axios** 1.14.0 - HTTP client
- **Bootstrap** 5.3.8 - UI framework
- **React Testing Library** - Testing utilities

### API Testing
- **Bruno** - API testing tool

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

1. **Java Development Kit (JDK) 17**
   - Download from: https://adoptium.net/
   - Set `JAVA_HOME` environment variable

2. **MySQL Server**
   - Download from: https://dev.mysql.com/downloads/mysql/
   - Create database: `ems`
   - Default credentials: `root` / `root@123` (configurable in `application.properties`)

3. **Node.js** (Latest LTS version)
   - Download from: https://nodejs.org/
   - Includes npm package manager

4. **Maven** (for building Java project)
   - Download from: https://maven.apache.org/download.cgi
   - Or use Maven wrapper included in the project (`mvnw`)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Application
```

### 2. Database Setup
1. Start MySQL server
2. Create database:
```sql
CREATE DATABASE ems;
```
3. Update database credentials in `springboot-backend/src/main/resources/application.properties` if needed

### 3. Backend Setup
```bash
cd springboot-backend

# Using Maven wrapper (recommended)
./mvnw clean install

# Or using system Maven
mvn clean install
```

### 4. Frontend Setup
```bash
cd ../react-frontend

# Install dependencies
npm install

# Start development server
npm start
```

### 5. API Testing Setup (Optional)
- Install Bruno from: https://www.usebruno.com/
- Import the collection from `API(Testing BRUNO)/Employee/bruno.json`

## ▶️ Running the Application

### Backend
```bash
cd springboot-backend
./mvnw spring-boot:run
```
The backend will start on `http://localhost:8080`

### Frontend
```bash
cd react-frontend
npm start
```
The frontend will start on `http://localhost:3000`

### Full Application
1. Start the backend first
2. Start the frontend
3. Open `http://localhost:3000` in your browser

## 📡 API Endpoints

The REST API provides the following endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/employees` | Get all employees |
| GET | `/api/v1/employees/{id}` | Get employee by ID |
| POST | `/api/v1/employees` | Create new employee |
| PUT | `/api/v1/employees/{id}` | Update employee |
| DELETE | `/api/v1/employees/{id}` | Delete employee |

### Sample API Usage

**Create Employee:**
```bash
POST http://localhost:8080/api/v1/employees
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "emailId": "john.doe@example.com"
}
```

**Get All Employees:**
```bash
GET http://localhost:8080/api/v1/employees
```

## 📁 Project Structure

```
Application/
├── README.md
├── API(Testing BRUNO)/
│   └── Employee/
│       ├── bruno.json
│       ├── Delete Employee.bru
│       ├── Get All Employee.bru
│       ├── Get Employee by Id.bru
│       ├── Post Employee.bru
│       └── Update Employee.bru
├── react-frontend/
│   ├── package.json
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── App.js
│       ├── App.css
│       ├── components/
│       │   ├── AddEmployeeComponent.js
│       │   ├── FooterComponent.js
│       │   ├── HeaderComponent.js
│       │   └── ListEmployeeComponent.js
│       ├── services/
│       │   └── EmployeeService.js
│       └── ...
└── springboot-backend/
    ├── pom.xml
    ├── mvnw
    ├── mvnw.cmd
    └── src/
        ├── main/
        │   ├── java/net/javaguides/springboot/
        │   │   ├── SpringbootBackendApplication.java
        │   │   ├── controller/
        │   │   │   └── EmployeeController.java
        │   │   ├── exception/
        │   │   │   ├── GlobalExceptionHandler.java
        │   │   │   └── ResourceNotFoundException.java
        │   │   ├── model/
        │   │   │   └── Employee.java
        │   │   └── repository/
        │   │       └── EmployeeRepository.java
        │   └── resources/
        │       └── application.properties
        └── test/
            └── java/net/javaguides/springboot/
                └── SpringbootBackendApplicationTests.java
```

## 🧪 Testing

### Backend Tests
```bash
cd springboot-backend
./mvnw test
```

### Frontend Tests
```bash
cd react-frontend
npm test
```

### API Testing with Bruno
1. Open Bruno application
2. Import collection from `API(Testing BRUNO)/Employee/bruno.json`
3. Run the test cases

### CORS Configuration
The backend is configured to allow requests from `http://localhost:3000` (React dev server). To change this, edit the `@CrossOrigin` annotation in `EmployeeController.java`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request



# Hotel Management System

A simple hotel management web application built with Node.js, Express, MySQL, and static HTML/CSS front-end pages. The system helps a hotel receptionist manage rooms, customers, employees, food, bookings, drivers, departments, and maintenance records from a single dashboard.

## Overview

This project is a lightweight backend-driven hotel administration app for tracking common hotel operations. It includes a receptionist login flow and a dashboard with modules to add and view records for key entities.

## Features

- Receptionist login
- Dashboard navigation for all core modules
- Room management
- Customer management
- Employee management
- Department management
- Driver management
- Food inventory and order tracking
- Booking management
- Maintenance tracking
- View pages for each major entity

## Tech Stack

- Node.js
- Express.js
- MySQL (mysql2)
- HTML/CSS/JavaScript
- Static file serving from the `public` directory

## Project Structure

```text
hotel/
├── public/
│   ├── css/
│   ├── images/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── room.html
│   ├── employee.html
│   ├── food.html
│   ├── customer.html
│   ├── department.html
│   ├── driver.html
│   ├── orders.html
│   ├── books.html
│   ├── maintenance.html
│   ├── view_*.html
│   └── ...
├── database.sql
├── datbase111.sql
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v18 or later recommended)
- MySQL Server
- npm

## Database Setup

1. Start MySQL and create the database.
2. Import the schema from `database.sql` into your MySQL instance.
3. If you want the sample seeded receptionist entry, you can also use `datbase111.sql`.

Example:

```sql
CREATE DATABASE hotel_managementt;
USE hotel_managementt;
SOURCE database.sql;
```

A sample receptionist record included in the alternate script is:

- Username: `Manoj Kumar`
- Password: `12345`

## Configuration

The application connects to MySQL in `server.js` with these defaults:

```js
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hotel_managementt'
});
```

If your local MySQL setup uses different credentials, update the values in `server.js` before starting the server.

## Installation

From the project root (`hotel`):

```bash
npm install
```

## Run the Application

```bash
npm start
```

The app will start on:

```text
http://localhost:3000
```

## Usage

1. Open `http://localhost:3000` in your browser.
2. Click `Login to Continue`.
3. Sign in with a valid receptionist username and password.
4. Use the dashboard to add or view rooms, customers, employees, food, bookings, and more.

## Main Routes

- `/` - Home page
- `/login` - Login page
- `/dashboard` - Admin dashboard
- `/room.html` - Add room
- `/employee.html` - Add employee
- `/food.html` - Add food item
- `/customer.html` - Add customer
- `/department.html` - Add department
- `/driver.html` - Add driver
- `/orders.html` - Add order
- `/books.html` - Add booking
- `/maintenance.html` - Add maintenance record
- `/view_*` - View pages for the corresponding entities

## Notes

- This project serves a traditional server-rendered HTML interface with API endpoints for data retrieval.
- The app is intended for local development and demo use.
- It uses hardcoded MySQL credentials in the source code, so please update them for production or shared environments.

## License

This project does not currently include a formal license file. Use it for educational or local development purposes unless otherwise specified by the repository owner.

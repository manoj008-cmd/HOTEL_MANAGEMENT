const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// MySQL Connection (unchanged as per your request)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // Replace with your MySQL password
    database: 'hotel_managementt'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected');
});

// Routes for Serving HTML Files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html')); // Changed to serve index.html
});

// Added route for /login to serve login.html
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/dashboard.html'));
});

app.get('/room.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/room.html'));
});

app.get('/employee.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/employee.html'));
});

app.get('/food.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/food.html'));
});

app.get('/customer.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/customer.html'));
});

app.get('/department.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/department.html'));
});

app.get('/driver.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/driver.html'));
});

app.get('/orders.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/orders.html'));
});

app.get('/books.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/books.html'));
});

app.get('/maintenance.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/maintenance.html'));
});

// Routes for Serving View Pages
app.get('/view_rooms.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/view_rooms.html'));
});

app.get('/view_employees.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/view_employees.html'));
});

app.get('/view_food.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/view_food.html'));
});

app.get('/view_customers.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/view_customers.html'));
});

app.get('/view_departments.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/view_departments.html'));
});

app.get('/view_drivers.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/view_drivers.html'));
});

app.get('/view_orders.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/view_orders.html'));
});

app.get('/view_bookings.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/view_bookings.html'));
});

app.get('/view_maintenance.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/view_maintenance.html'));
});

app.get('/view_receptionists.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/view_receptionists.html'));
});

// Routes for Handling Form Submissions
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM RECEPTIONIST WHERE Username = ? AND Password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Database Query Error:', err.message);
            res.status(500).send('Server Error');
            return;
        }
        if (results.length > 0) {
            res.redirect('/dashboard');
        } else {
            res.send('Invalid credentials');
        }
    });
});

app.post('/room', (req, res) => {
    const { room_number, availability, clean_status, price, bed_type, country } = req.body;
    const query = 'INSERT INTO ROOM (Room_Number, Availability, Clean_Status, Price, Bed_Type, Country) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [room_number, availability === 'on' ? 1 : 0, clean_status, price, bed_type, country], (err) => {
        if (err) {
            console.error('Error adding room:', err.message);
            res.status(500).send('Error adding room');
            return;
        }
        res.redirect('/dashboard');
    });
});

app.post('/employee', (req, res) => {
    const { emp_id, emp_name, dept_number, phone_number, address } = req.body;
    const query = 'INSERT INTO EMPLOYEE (Emp_ID, Emp_Name, Dept_Number, Phone_Number, Address) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [emp_id, emp_name, dept_number, phone_number, address], (err) => {
        if (err) {
            console.error('Error adding employee:', err.message);
            res.status(500).send('Error adding employee');
            return;
        }
        res.redirect('/dashboard');
    });
});

app.post('/food', (req, res) => {
    const { food_id, food_name, price } = req.body;
    const query = 'INSERT INTO FOOD (Food_ID, Food_Name, Price) VALUES (?, ?, ?)';
    db.query(query, [food_id, food_name, price], (err) => {
        if (err) {
            console.error('Error adding food:', err.message);
            res.status(500).send('Error adding food');
            return;
        }
        res.redirect('/dashboard');
    });
});

app.post('/customer', (req, res) => {
    const { customer_number, customer_name, gender, room_number } = req.body;
    const query = 'INSERT INTO CUSTOMER (Customer_Number, Customer_Name, Gender, Room_Number) VALUES (?, ?, ?, ?)';
    db.query(query, [customer_number, customer_name, gender, room_number], (err) => {
        if (err) {
            console.error('Error adding customer:', err.message);
            res.status(500).send('Error adding customer');
            return;
        }
        res.redirect('/dashboard');
    });
});

app.post('/department', (req, res) => {
    const { dept_number, dept_name } = req.body;
    const query = 'INSERT INTO DEPARTMENT (Dept_Number, Dept_Name) VALUES (?, ?)';
    db.query(query, [dept_number, dept_name], (err) => {
        if (err) {
            console.error('Error adding department:', err.message);
            res.status(500).send('Error adding department');
            return;
        }
        res.redirect('/dashboard');
    });
});

app.post('/driver', (req, res) => {
    const { driver_id, driver_name, phone_number } = req.body;
    const query = 'INSERT INTO DRIVER (Driver_ID, Driver_Name, Phone_Number) VALUES (?, ?, ?)';
    db.query(query, [driver_id, driver_name, phone_number], (err) => {
        if (err) {
            console.error('Error adding driver:', err.message);
            res.status(500).send('Error adding driver');
            return;
        }
        res.redirect('/dashboard');
    });
});

app.post('/orders', (req, res) => {
    const { order_id, customer_number, food_id, quantity } = req.body;
    const query = 'INSERT INTO ORDERS (Order_ID, Customer_Number, Food_ID, Quantity) VALUES (?, ?, ?, ?)';
    db.query(query, [order_id, customer_number, food_id, quantity], (err) => {
        if (err) {
            console.error('Error adding order:', err.message);
            res.status(500).send('Error adding order');
            return;
        }
        res.redirect('/dashboard');
    });
});

app.post('/books', (req, res) => {
    const { booking_id, customer_number, room_number, check_in_date, check_out_date } = req.body;
    const query = 'INSERT INTO BOOKS (Booking_ID, Customer_Number, Room_Number, Check_In_Date, Check_Out_Date) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [booking_id, customer_number, room_number, check_in_date, check_out_date], (err) => {
        if (err) {
            console.error('Error adding booking:', err.message);
            res.status(500).send('Error adding booking');
            return;
        }
        res.redirect('/dashboard');
    });
});

app.post('/maintenance', (req, res) => {
    const { maintenance_id, room_number, description, date } = req.body;
    const query = 'INSERT INTO MAIN (Maintenance_ID, Room_Number, Description, Date) VALUES (?, ?, ?, ?)';
    db.query(query, [maintenance_id, room_number, description, date], (err) => {
        if (err) {
            console.error('Error adding maintenance record:', err.message);
            res.status(500).send('Error adding maintenance record');
            return;
        }
        res.redirect('/dashboard');
    });
});

// API Endpoints for Fetching Data
app.get('/api/rooms', (req, res) => {
    db.query('SELECT * FROM ROOM', (err, results) => {
        if (err) {
            console.error('Error fetching rooms:', err.message);
            res.status(500).json([]);
            return;
        }
        res.json(results);
    });
});

app.get('/api/employees', (req, res) => {
    db.query('SELECT * FROM EMPLOYEE', (err, results) => {
        if (err) {
            console.error('Error fetching employees:', err.message);
            res.status(500).json([]);
            return;
        }
        res.json(results);
    });
});

app.get('/api/food', (req, res) => {
    db.query('SELECT * FROM FOOD', (err, results) => {
        if (err) {
            console.error('Error fetching food:', err.message);
            res.status(500).json([]);
            return;
        }
        res.json(results);
    });
});

app.get('/api/customers', (req, res) => {
    db.query('SELECT * FROM CUSTOMER', (err, results) => {
        if (err) {
            console.error('Error fetching customers:', err.message);
            res.status(500).json([]);
            return;
        }
        res.json(results);
    });
});

app.get('/api/departments', (req, res) => {
    db.query('SELECT * FROM DEPARTMENT', (err, results) => {
        if (err) {
            console.error('Error fetching departments:', err.message);
            res.status(500).json([]);
            return;
        }
        res.json(results);
    });
});

app.get('/api/drivers', (req, res) => {
    db.query('SELECT * FROM DRIVER', (err, results) => {
        if (err) {
            console.error('Error fetching drivers:', err.message);
            res.status(500).json([]);
            return;
        }
        res.json(results);
    });
});

app.get('/api/orders', (req, res) => {
    db.query('SELECT * FROM ORDERS', (err, results) => {
        if (err) {
            console.error('Error fetching orders:', err.message);
            res.status(500).json([]);
            return;
        }
        res.json(results);
    });
});

app.get('/api/bookings', (req, res) => {
    db.query('SELECT * FROM BOOKS', (err, results) => {
        if (err) {
            console.error('Error fetching bookings:', err.message);
            res.status(500).json([]);
            return;
        }
        res.json(results);
    });
});

app.get('/api/maintenance', (req, res) => {
    db.query('SELECT * FROM MAIN', (err, results) => {
        if (err) {
            console.error('Error fetching maintenance records:', err.message);
            res.status(500).json([]);
            return;
        }
        res.json(results);
    });
});

app.get('/api/receptionists', (req, res) => {
    db.query('SELECT * FROM RECEPTIONIST', (err, results) => {
        if (err) {
            console.error('Error fetching receptionists:', err.message);
            res.status(500).json([]);
            return;
        }
        res.json(results);
    });
});

// Start the Server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
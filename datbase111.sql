
CREATE DATABASE hotel_managementt;
USE hotel_managementt;
-- RECEPTIONIST Entity
CREATE TABLE RECEPTIONIST (
    Username VARCHAR(50) PRIMARY KEY,
    Password VARCHAR(50),
    Address VARCHAR(100)
);
insert into RECEPTIONIST(Username,Password,Address)values('Manoj Kumar','12345','Bharamavar');
select *from RECEPTIONIST;

-- ROOM Entity
CREATE TABLE ROOM (
    Room_Number INT PRIMARY KEY,
    Availability BOOLEAN,
    Clean_Status VARCHAR(20),
    Price DECIMAL(10, 2),
    Bed_Type VARCHAR(20),
    Country VARCHAR(50)
);
select *from ROOM;
-- CUSTOMER Entity
CREATE TABLE CUSTOMER (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Cust_Num INT UNIQUE,
    Cust_Name VARCHAR(50),
    Cust_Gen VARCHAR(10),
    Room_Number INT,
    FOREIGN KEY (Room_Number) REFERENCES ROOM(Room_Number)
);
select *from CUSTOMER;

-- FOOD Entity
CREATE TABLE FOOD (
    Food_Id INT PRIMARY KEY AUTO_INCREMENT,
    Food_Name VARCHAR(50),
    Food_Cost DECIMAL(10, 2)
);

-- ORDERS Entity (Many-to-Many between CUSTOMER and FOOD)
CREATE TABLE ORDERS (
    Cust_Num INT,
    Food_Id INT,
    PRIMARY KEY (Cust_Num, Food_Id),
    FOREIGN KEY (Cust_Num) REFERENCES CUSTOMER(Cust_Num),
    FOREIGN KEY (Food_Id) REFERENCES FOOD(Food_Id)
);

-- BOOKS Entity (Many-to-Many between CUSTOMER and ROOM)
CREATE TABLE BOOKS (
    Cust_Num INT,
    Room_Number INT,
    PRIMARY KEY (Cust_Num, Room_Number),
    FOREIGN KEY (Cust_Num) REFERENCES CUSTOMER(Cust_Num),
    FOREIGN KEY (Room_Number) REFERENCES ROOM(Room_Number)
);

-- DRIVER Entity
CREATE TABLE DRIVER (
    DNam VARCHAR(50) PRIMARY KEY,
    Brand VARCHAR(50),
    Available BOOLEAN,
    Location VARCHAR(50),
    Company VARCHAR(50)
);

-- EMPLOYEE Entity
CREATE TABLE EMPLOYEE (
    EPhon VARCHAR(15) PRIMARY KEY,
    ENam VARCHAR(50),
    EAge INT,
    EGender VARCHAR(10),
    ESalary DECIMAL(10, 2),
    EJob VARCHAR(50),
    EAadhar VARCHAR(12),
    DAge INT,
    DGender VARCHAR(10)
);

-- DEPARTMENT Entity
CREATE TABLE DEPARTMENT (
    Division VARCHAR(50) PRIMARY KEY,
    Budget DECIMAL(10, 2),
    EPhon VARCHAR(15),
    FOREIGN KEY (EPhon) REFERENCES EMPLOYEE(EPhon)
);

-- MAIN Entity (Many-to-Many between RECEPTIONIST and EMPLOYEE)
CREATE TABLE MAIN (
    Username VARCHAR(50),
    EPhon VARCHAR(15),
    PRIMARY KEY (Username, EPhon),
    FOREIGN KEY (Username) REFERENCES RECEPTIONIST(Username),
    FOREIGN KEY (EPhon) REFERENCES EMPLOYEE(EPhon)
);
CREATE TABLE Suppliers (
                           id SERIAL PRIMARY KEY,
                           name VARCHAR(255),
                           contact_number VARCHAR(50)
);

CREATE TABLE Products (
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(255),
                          price DECIMAL(10, 2),
                          stock_quantity INT,
                          supplier_id INT REFERENCES Suppliers(id)
);

CREATE TABLE Sales (
                       id SERIAL PRIMARY KEY,
                       product_id INT REFERENCES Products(id),
                       quantity_sold INT,
                       sale_date DATE
);
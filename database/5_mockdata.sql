-- Mock Data for categoria Table:

INSERT INTO categoria (id_categoria, nombre) VALUES
(1, 'Electronics'),
(2, 'Clothing'),
(3, 'Home Appliances');

-- Mock Data for cliente Table:
INSERT INTO cliente (nombre, apellido, direccion, telefono, email, ci, razon_social) VALUES
('John', 'Doe', '123 Main St', '555-1234', 'john.doe@example.com', '123456789', 'JD Inc.'),
('Jane', 'Smith', '456 Oak St', '555-5678', 'jane.smith@example.com', '987654321', 'JS Enterprises');

-- Mock Data for descuento Table:
INSERT INTO descuento (descripcion, porcentaje, fecha_inicio, fecha_fin) VALUES
('Summer Sale', 0.15, '2023-06-01', '2023-06-30'),
('Back to School', 0.10, '2023-08-01', '2023-08-31');

-- Mock Data for factura Table:
INSERT INTO factura (fecha, monto, codigo_control, cliente_id_cliente) VALUES
("2023-01-01", 150, 12345, 1),
("2023-01-01", 200, 54321, 2);

-- Mock Data for proveedor Table:
INSERT INTO proveedor (nombre, direccion, telefono, email) VALUES
('TechMart', '789 Tech St', '555-9876', 'info@techmart.com'),
('Fashion World', '321 Fashion Ave', '555-5432', 'info@fashionworld.com'),
('Home Appliances Ltd.', '456 Appliance Blvd', '555-2468', 'info@appliances.com');

-- Mock Data for producto Table:
INSERT INTO producto (nombre, precio, descripcion, unidades, costo, categoria_id_categoria, proveedor_id_proveedor) VALUES
('Laptop', 1200.00, 'High-performance laptop', 50, 900.00, 1, 1),
('T-shirt', 20.00, 'Cotton T-shirt', 100, 10.00, 2, 2),
('Refrigerator', 800.00, 'Large refrigerator', 30, 600.00, 3, 3);

-- Mock Data for descuento_producto Table:
INSERT INTO descuento_producto (descuento_id_descuento, producto_id_producto) VALUES
(1, 1),
(2, 2),
(1, 3);

-- Mock Data for vendedor Table:
INSERT INTO vendedor (usuario, password) VALUES
('john_doe', 'password123'),
('jane_smith', 'securepass456');

-- Mock Data for venta Table:
INSERT INTO venta (fecha, cantidad, metodo_pago, total, factura_id_factura, vendedor_id_vendedor, producto_id_producto, descuento_producto_id_descuento_producto) VALUES
("2023-01-01", 2, 1, 2400, 1, 1, 1, 1),
("2023-01-01", 5, 2, 100, 2, 2, 2, 2);
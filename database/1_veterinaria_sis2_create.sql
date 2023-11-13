-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2023-11-12 22:01:02.616

USE veterinaria_sis2;

-- tables
-- Table: categoria
CREATE TABLE categoria (
    id_categoria int  NOT NULL,
    nombre varchar(80)  NOT NULL,
    CONSTRAINT categoria_pk PRIMARY KEY (id_categoria)
);

-- Table: cliente
CREATE TABLE cliente (
    id_cliente int  NOT NULL AUTO_INCREMENT,
    nombre varchar(80)  NOT NULL,
    apellido varchar(80)  NOT NULL,
    direccion varchar(80)  NOT NULL,
    telefono varchar(40)  NOT NULL,
    email varchar(80)  NOT NULL,
    ci varchar(80)  NOT NULL,
    razon_social varchar(80)  NOT NULL,
    CONSTRAINT cliente_pk PRIMARY KEY (id_cliente)
);

-- Table: descuento
CREATE TABLE descuento (
    id_descuento int  NOT NULL AUTO_INCREMENT,
    descripcion varchar(80)  NOT NULL,
    porcentaje decimal(6,2)  NOT NULL,
    fecha_inicio date  NOT NULL,
    fecha_fin date  NOT NULL,
    CONSTRAINT descuento_pk PRIMARY KEY (id_descuento)
);

-- Table: descuento_producto
CREATE TABLE descuento_producto (
    id_descuento_producto int  NOT NULL AUTO_INCREMENT,
    descuento_id_descuento int  NOT NULL,
    producto_id_producto int  NOT NULL,
    CONSTRAINT descuento_producto_pk PRIMARY KEY (id_descuento_producto)
);

-- Table: factura
CREATE TABLE factura (
    id_factura int  NOT NULL AUTO_INCREMENT,
    fecha date  NOT NULL,
    monto decimal(6,2)  NOT NULL,
    codigo_control int  NOT NULL,
    cliente_id_cliente int  NOT NULL,
    CONSTRAINT factura_pk PRIMARY KEY (id_factura)
);

-- Table: producto
CREATE TABLE producto (
    id_producto int  NOT NULL AUTO_INCREMENT,
    nombre varchar(80)  NOT NULL,
    precio decimal(8,2)  NOT NULL,
    descripcion varchar(120)  NOT NULL,
    unidades int  NOT NULL,
    costo decimal(6,2)  NOT NULL,
    categoria_id_categoria int  NOT NULL,
    proveedor_id_proveedor int  NOT NULL,
    CONSTRAINT producto_pk PRIMARY KEY (id_producto)
);

-- Table: proveedor
CREATE TABLE proveedor (
    id_proveedor int  NOT NULL AUTO_INCREMENT,
    nombre varchar(80)  NOT NULL,
    direccion varchar(80)  NOT NULL,
    telefono varchar(80)  NOT NULL,
    email varchar(80)  NOT NULL,
    CONSTRAINT proveedor_pk PRIMARY KEY (id_proveedor)
);

-- Table: vendedor
CREATE TABLE vendedor (
    id_vendedor int  NOT NULL AUTO_INCREMENT,
    usuario varchar(80)  NOT NULL,
    password varchar(80)  NOT NULL,
    CONSTRAINT vendedor_pk PRIMARY KEY (id_vendedor)
);

-- Table: venta
CREATE TABLE venta (
    id_venta int  NOT NULL AUTO_INCREMENT,
    fecha date  NOT NULL,
    cantidad int  NOT NULL,
    metodo_pago varchar(80)  NOT NULL,
    total decimal(6,2)  NOT NULL,
    factura_id_factura int  NOT NULL,
    vendedor_id_vendedor int  NOT NULL,
    producto_id_producto int  NOT NULL,
    descuento_producto_id_descuento_producto int  NOT NULL,
    CONSTRAINT venta_pk PRIMARY KEY (id_venta)
);
-- foreign keys
-- Reference: descuento_producto_descuento (table: descuento_producto)
ALTER TABLE descuento_producto ADD CONSTRAINT descuento_producto_descuento FOREIGN KEY descuento_producto_descuento (descuento_id_descuento)
    REFERENCES descuento (id_descuento);

-- Reference: descuento_producto_producto (table: descuento_producto)
ALTER TABLE descuento_producto ADD CONSTRAINT descuento_producto_producto FOREIGN KEY descuento_producto_producto (producto_id_producto)
    REFERENCES producto (id_producto);


-- Reference: factura_cliente (table: factura)
ALTER TABLE factura ADD CONSTRAINT factura_cliente FOREIGN KEY factura_cliente (cliente_id_cliente)
    REFERENCES cliente (id_cliente);

-- Reference: producto_entity_1 (table: producto)
ALTER TABLE producto ADD CONSTRAINT producto_entity_1 FOREIGN KEY producto_entity_1 (categoria_id_categoria)
    REFERENCES categoria (id_categoria);

-- Reference: producto_proveedor (table: producto)
ALTER TABLE producto ADD CONSTRAINT producto_proveedor FOREIGN KEY producto_proveedor (proveedor_id_proveedor)
    REFERENCES proveedor (id_proveedor);

-- Reference: venta_descuento_producto (table: venta)
ALTER TABLE venta ADD CONSTRAINT venta_descuento_producto FOREIGN KEY venta_descuento_producto (descuento_producto_id_descuento_producto)
    REFERENCES descuento_producto (id_descuento_producto);

-- Reference: venta_factura (table: venta)
ALTER TABLE venta ADD CONSTRAINT venta_factura FOREIGN KEY venta_factura (factura_id_factura)
    REFERENCES factura (id_factura);

-- Reference: venta_producto (table: venta)
ALTER TABLE venta ADD CONSTRAINT venta_producto FOREIGN KEY venta_producto (producto_id_producto)
    REFERENCES producto (id_producto);

-- Reference: venta_vendedor (table: venta)
ALTER TABLE venta ADD CONSTRAINT venta_vendedor FOREIGN KEY venta_vendedor (vendedor_id_vendedor)
    REFERENCES vendedor (id_vendedor);

-- End of file.


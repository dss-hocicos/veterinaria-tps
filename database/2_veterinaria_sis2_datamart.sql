
-- tables
-- Table: d_categoria
CREATE TABLE d_categoria (
    id_categoria int  NOT NULL,
    nombre varchar(80)  NOT NULL,
    CONSTRAINT d_categoria_pk PRIMARY KEY (id_categoria)
);

-- Table: d_descuento
CREATE TABLE d_descuento (
    id_descuento int  NOT NULL,
    descripcion varchar(80)  NOT NULL,
    porcentaje decimal(6,2)  NOT NULL,
    duracion_dias int  NOT NULL,
    CONSTRAINT d_descuento_pk PRIMARY KEY (id_descuento)
);

-- Table: d_producto
CREATE TABLE d_producto (
    id_producto int  NOT NULL,
    nombre varchar(80)  NOT NULL,
    precio decimal(6,2)  NOT NULL,
    d_categoria_id_categoria int  NOT NULL,
    d_proveedor_id_proveedor int  NOT NULL,
    CONSTRAINT d_producto_pk PRIMARY KEY (id_producto)
);

-- Table: d_proveedor
CREATE TABLE d_proveedor (
    id_proveedor int  NOT NULL,
    nombre varchar(80)  NOT NULL,
    CONSTRAINT d_proveedor_pk PRIMARY KEY (id_proveedor)
);

-- Table: d_tiempo
CREATE TABLE d_tiempo (
    id_tiempo int  NOT NULL AUTO_INCREMENT,
    fecha date  NOT NULL,
    dia int  NOT NULL,
    mes int  NOT NULL,
    anno int  NOT NULL,
    CONSTRAINT d_tiempo_pk PRIMARY KEY (id_tiempo)
);

-- Table: d_vendedor
CREATE TABLE d_vendedor (
    id_vendedor int  NOT NULL,
    usuario varchar(80)  NOT NULL,
    CONSTRAINT d_vendedor_pk PRIMARY KEY (id_vendedor)
);

-- Table: f_venta
CREATE TABLE f_venta (
    sum_total decimal(6,2)  NOT NULL,
    cant_total int  NOT NULL,
    d_producto_id_producto int  NOT NULL,
    d_descuento_id_descuento int  NOT NULL,
    d_vendedor_id_vendedor int  NOT NULL,
    d_tiempo_id_tiempo int  NOT NULL
);


-- foreign keys
-- Reference: Copy_of_producto_Copy_of_categoria (table: d_producto)
ALTER TABLE d_producto ADD CONSTRAINT Copy_of_producto_Copy_of_categoria FOREIGN KEY Copy_of_producto_Copy_of_categoria (d_categoria_id_categoria)
    REFERENCES d_categoria (id_categoria);

-- Reference: Copy_of_venta_Copy_of_descuento (table: f_venta)
ALTER TABLE f_venta ADD CONSTRAINT Copy_of_venta_Copy_of_descuento FOREIGN KEY Copy_of_venta_Copy_of_descuento (d_descuento_id_descuento)
    REFERENCES d_descuento (id_descuento);

-- Reference: Copy_of_venta_Copy_of_producto (table: f_venta)
ALTER TABLE f_venta ADD CONSTRAINT Copy_of_venta_Copy_of_producto FOREIGN KEY Copy_of_venta_Copy_of_producto (d_producto_id_producto)
    REFERENCES d_producto (id_producto);

-- Reference: Copy_of_venta_Copy_of_vendedor (table: f_venta)
ALTER TABLE f_venta ADD CONSTRAINT Copy_of_venta_Copy_of_vendedor FOREIGN KEY Copy_of_venta_Copy_of_vendedor (d_vendedor_id_vendedor)
    REFERENCES d_vendedor (id_vendedor);

-- Reference: d_producto_d_proveedor (table: d_producto)
ALTER TABLE d_producto ADD CONSTRAINT d_producto_d_proveedor FOREIGN KEY d_producto_d_proveedor (d_proveedor_id_proveedor)
    REFERENCES d_proveedor (id_proveedor);

-- Reference: f_venta_d_tiempo (table: f_venta)
ALTER TABLE f_venta ADD CONSTRAINT f_venta_d_tiempo FOREIGN KEY f_venta_d_tiempo (d_tiempo_id_tiempo)
    REFERENCES d_tiempo (id_tiempo);

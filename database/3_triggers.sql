-- Trigger to fill d_categoria table
DELIMITER //
CREATE TRIGGER trg_insert_d_categoria
AFTER INSERT ON categoria
FOR EACH ROW
BEGIN
    INSERT INTO d_categoria (id_categoria, nombre)
    VALUES (NEW.id_categoria, NEW.nombre);
END;
//
DELIMITER ;

-- Trigger to fill d_descuento table
DELIMITER //
CREATE TRIGGER trg_insert_d_descuento
AFTER INSERT ON descuento
FOR EACH ROW
BEGIN
    DECLARE duracion_dias INT;
    SET duracion_dias = DATEDIFF(NEW.fecha_fin, NEW.fecha_inicio);
    
    INSERT INTO d_descuento (id_descuento, descripcion, porcentaje, duracion_dias)
    VALUES (NEW.id_descuento, NEW.descripcion, NEW.porcentaje, duracion_dias);
END;
//
DELIMITER ;

-- Trigger to fill d_producto table
DELIMITER //
CREATE TRIGGER trg_insert_d_producto
AFTER INSERT ON producto
FOR EACH ROW
BEGIN
    INSERT INTO d_producto (id_producto, nombre, precio, d_categoria_id_categoria, d_proveedor_id_proveedor)
    VALUES (NEW.id_producto, NEW.nombre, NEW.precio, NEW.categoria_id_categoria, NEW.proveedor_id_proveedor);
END;
//
DELIMITER ;

-- Trigger to fill d_proveedor table
DELIMITER //
CREATE TRIGGER trg_insert_d_proveedor
AFTER INSERT ON proveedor
FOR EACH ROW
BEGIN
    INSERT INTO d_proveedor (id_proveedor, nombre)
    VALUES (NEW.id_proveedor, NEW.nombre);
END;
//
DELIMITER ;

-- Trigger to fill d_vendedor table
DELIMITER //
CREATE TRIGGER trg_insert_d_vendedor
AFTER INSERT ON vendedor
FOR EACH ROW
BEGIN
    INSERT INTO d_vendedor (id_vendedor, usuario)
    VALUES (NEW.id_vendedor, NEW.usuario);
END;
//
DELIMITER ;

-- Trigger to fill d_tiempo table
DELIMITER //
CREATE TRIGGER trg_insert_d_tiempo
AFTER INSERT ON factura
FOR EACH ROW
BEGIN
    -- Check if there is no record with the same fecha in d_tiempo
    IF NOT EXISTS (SELECT * FROM d_tiempo t WHERE t.fecha = NEW.fecha) THEN
        INSERT INTO d_tiempo (fecha, dia, mes, anno)
        VALUES (NEW.fecha, DAY(NEW.fecha), MONTH(NEW.fecha), YEAR(NEW.fecha));
    END IF;
END;
//
DELIMITER ;


-- Trigger to update d_categoria table
DELIMITER //
CREATE TRIGGER trg_update_d_categoria
AFTER UPDATE ON categoria
FOR EACH ROW
BEGIN
    UPDATE d_categoria
    SET nombre = NEW.nombre
    WHERE id_categoria = NEW.id_categoria;
END;
//
DELIMITER ;

-- Trigger to update d_descuento table
DELIMITER //
CREATE TRIGGER trg_update_d_descuento
AFTER UPDATE ON descuento
FOR EACH ROW
BEGIN
    DECLARE duracion_dias INT;
    SET duracion_dias = DATEDIFF(NEW.fecha_fin, NEW.fecha_inicio);

    UPDATE d_descuento
    SET descripcion = NEW.descripcion,
        porcentaje = NEW.porcentaje,
        duracion_dias = duracion_dias
    WHERE id_descuento = NEW.id_descuento;
END;
//
DELIMITER ;

-- Trigger to update d_producto table
DELIMITER //
CREATE TRIGGER trg_update_d_producto
AFTER UPDATE ON producto
FOR EACH ROW
BEGIN
    UPDATE d_producto
    SET nombre = NEW.nombre,
        precio = NEW.precio,
        d_categoria_id_categoria = NEW.categoria_id_categoria,
        d_proveedor_id_proveedor = NEW.proveedor_id_proveedor
    WHERE id_producto = NEW.id_producto;
END;
//
DELIMITER ;

-- Trigger to update d_proveedor table
DELIMITER //
CREATE TRIGGER trg_update_d_proveedor
AFTER UPDATE ON proveedor
FOR EACH ROW
BEGIN
    UPDATE d_proveedor
    SET nombre = NEW.nombre
    WHERE id_proveedor = NEW.id_proveedor;
END;
//
DELIMITER ;

-- Trigger to update d_vendedor table
DELIMITER //
CREATE TRIGGER trg_update_d_vendedor
AFTER UPDATE ON vendedor
FOR EACH ROW
BEGIN
    UPDATE d_vendedor
    SET usuario = NEW.usuario
    WHERE id_vendedor = NEW.id_vendedor;
END;
//
DELIMITER ;

-- Trigger to update d_tiempo table
DELIMITER //
CREATE TRIGGER trg_update_d_tiempo
AFTER UPDATE ON factura
FOR EACH ROW
BEGIN
    UPDATE d_tiempo
    SET fecha = FROM_UNIXTIME(NEW.fecha),
        dia = DAY(FROM_UNIXTIME(NEW.fecha)),
        mes = MONTH(FROM_UNIXTIME(NEW.fecha)),
        anno = YEAR(FROM_UNIXTIME(NEW.fecha))
    WHERE id_tiempo = NEW.id_factura;
END;
//
DELIMITER ;

-- Trigger to delete from d_categoria table
DELIMITER //
CREATE TRIGGER trg_delete_d_categoria
AFTER DELETE ON categoria
FOR EACH ROW
BEGIN
    DELETE FROM d_categoria WHERE id_categoria = OLD.id_categoria;
END;
//
DELIMITER ;

-- Trigger to delete from d_descuento table
DELIMITER //
CREATE TRIGGER trg_delete_d_descuento
AFTER DELETE ON descuento
FOR EACH ROW
BEGIN
    DELETE FROM d_descuento WHERE id_descuento = OLD.id_descuento;
END;
//
DELIMITER ;

-- Trigger to delete from d_producto table
DELIMITER //
CREATE TRIGGER trg_delete_d_producto
AFTER DELETE ON producto
FOR EACH ROW
BEGIN
    DELETE FROM d_producto WHERE id_producto = OLD.id_producto;
END;
//
DELIMITER ;

-- Trigger to delete from d_proveedor table
DELIMITER //
CREATE TRIGGER trg_delete_d_proveedor
AFTER DELETE ON proveedor
FOR EACH ROW
BEGIN
    DELETE FROM d_proveedor WHERE id_proveedor = OLD.id_proveedor;
END;
//
DELIMITER ;

-- Trigger to delete from d_vendedor table
DELIMITER //
CREATE TRIGGER trg_delete_d_vendedor
AFTER DELETE ON vendedor
FOR EACH ROW
BEGIN
    DELETE FROM d_vendedor WHERE id_vendedor = OLD.id_vendedor;
END;
//
DELIMITER ;

-- Trigger to delete from d_tiempo table
DELIMITER //
CREATE TRIGGER trg_delete_d_tiempo
AFTER DELETE ON factura
FOR EACH ROW
BEGIN
    DELETE FROM d_tiempo WHERE id_tiempo = OLD.id_factura;
END;
//
DELIMITER ;

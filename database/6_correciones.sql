ALTER TABLE d_producto ADD COLUMN costo decimal(6,2) NULL;

-- Redo trigger to fill table
DROP TRIGGER IF EXISTS trg_insert_d_producto;
DELIMITER //
CREATE TRIGGER trg_insert_d_producto
AFTER INSERT ON producto
FOR EACH ROW
BEGIN
    INSERT INTO d_producto (id_producto, nombre, precio, costo, d_categoria_id_categoria, d_proveedor_id_proveedor)
    VALUES (NEW.id_producto, NEW.nombre, NEW.precio, NEW.costo, NEW.categoria_id_categoria, NEW.proveedor_id_proveedor);
END;
//
DELIMITER ;
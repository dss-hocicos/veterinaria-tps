DELIMITER //

CREATE PROCEDURE load_f_venta_data()
BEGIN
    INSERT INTO f_venta (sum_total, cant_total, d_producto_id_producto, d_descuento_id_descuento, d_vendedor_id_vendedor, d_tiempo_id_tiempo)
    SELECT SUM(v.total), SUM(v.cantidad), v.producto_id_producto, v.descuento_producto_id_descuento_producto, v.vendedor_id_vendedor, t.id_tiempo
    FROM venta v, d_tiempo t
    WHERE v.fecha = t.fecha
    GROUP BY v.producto_id_producto, v.descuento_producto_id_descuento_producto, v.vendedor_id_vendedor, t.id_tiempo;
    
END //

DELIMITER ;

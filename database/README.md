# Instrucciones para ejecutar la base de datos

1. Instalar [Docker](https://docs.docker.com/install/) y [Docker Compose](https://docs.docker.com/compose/install/)

2. Navegar a la carpeta `database`

3. Ejecutar el comando 
```bash
docker build -t mysql-veterinaria .
```

4. Ejecutar el comando 
```bash
docker run -d --name mysql-veterinaria-container -p 3308:3306 mysql-veterinaria
```

## para verificar el funcionamiento del contenedor

5. Acceder a la terminar del contenedor en docker

6. Abrir MySQL con el comando
```bash
mysql --password
```

La contraseña es `123456`

7. Acceder a la base de datos con el comando
```bash
use veterinaria_sis2;
```

8. Ejecutar el SP con el comando
```bash
call load_f_venta_data
```

9. Puedes consultar la tabla de hechos con el sgte. query
```bash
select
    f.sum_total,
    f.cant_total,
    p.nombre,
    p.precio,
    c.nombre,
    prov.nombre,
    d.descripcion,
    d.porcentaje,
    d.duracion_dias,
    v.usuario,
    t.fecha,
    t.dia,
    t.mes,
    t.anno
from
    f_venta f
    inner join d_producto p on f.d_producto_id_producto = p.id_producto
    inner join d_categoria c on p.d_categoria_id_categoria = c.id_categoria
    inner join d_proveedor prov on p.d_proveedor_id_proveedor = prov.id_proveedor
    inner join d_descuento d on f.d_descuento_id_descuento = d.id_descuento
    inner join d_vendedor v on f.d_vendedor_id_vendedor = v.id_vendedor
    inner join d_tiempo t on f.d_tiempo_id_tiempo = t.id_tiempo
order by
    t.fecha desc;
```


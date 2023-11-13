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


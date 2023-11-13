# Use the official MySQL image from Docker Hub
FROM mysql:8.1

# Set the root password
ENV MYSQL_ROOT_PASSWORD 123456

# Create and set the default database
ENV MYSQL_DATABASE veterinaria_sis2

# Copy SQL files to the /docker-entrypoint-initdb.d/ directory
# This directory is automatically executed during the container startup
COPY ./1_veterinaria_sis2_create.sql /docker-entrypoint-initdb.d/
COPY ./2_veterinaria_sis2_datamart.sql /docker-entrypoint-initdb.d/
COPY ./3_triggers.sql /docker-entrypoint-initdb.d/
COPY ./4_etl.sql /docker-entrypoint-initdb.d/
COPY ./5_mockdata.sql /docker-entrypoint-initdb.d/

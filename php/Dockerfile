# Usa la imagen oficial de PHP-FPM como base
FROM php:fpm

# Instala nano
RUN apt-get update && apt-get install -y nano


# Modifica el archivo de configuración para establecer security.limit_extensions
#RUN sed -i 's/^\(security.limit_extensions\s*=\s*\).*$/\1.php .php3 .php4 .php5 .php7/' /usr/local/etc/php-fpm.d/www.conf

# En caso de que la línea no exista, la agrega al final del archivo
#RUN grep -q '^security.limit_extensions' /usr/local/etc/php-fpm.d/www.conf || echo 'security.limit_extensions = .php .php3 .php4 .php5 .php7' >> /usr/local/etc/php-fpm.d/www.conf

# Configura el directorio de trabajo
WORKDIR /var/www/html

# Expon el puerto 9000 (ya lo hace la imagen base)
EXPOSE 9000
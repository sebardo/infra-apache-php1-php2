# Usa la imagen base de Apache
FROM httpd:2.4

# Actualiza la lista de paquetes e instala nano
RUN apt-get update && \
    apt-get install -y nano && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copia el archivo de configuración de Apache
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./httpd-vhosts.conf /usr/local/apache2/conf/extra/httpd-vhosts.conf

# Incluye el archivo de configuración de vhosts en el archivo principal de configuración
RUN echo 'Include conf/extra/httpd-vhosts.conf' >> /usr/local/apache2/conf/httpd.conf

# Crear el directorio de logs si no existe
RUN mkdir -p /usr/local/apache2/logs

# Definir la variable APACHE_LOG_DIR
ENV APACHE_LOG_DIR /usr/local/apache2/logs

# Habilita los módulos necesarios
RUN sed -i '/LoadModule proxy_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i '/LoadModule proxy_fcgi_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i '/LoadModule authz_core_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i '/LoadModule log_config_module/s/^#//g' /usr/local/apache2/conf/httpd.conf
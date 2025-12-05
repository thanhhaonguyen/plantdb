FROM nginx:1.29.0-alpine3.22

# Copy main nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Set environment variables for server names
# These variables can be overridden at build time using --build-arg
# Server names are used in the nginx configuration templates
# to dynamically set the server_name directive for each server block.
ARG PRIMARY_DOMAIN_NAME
ARG API_DOMAIN_NAME
ARG DB_DOMAIN_NAME

ENV PRIMARY_DOMAIN_NAME=${PRIMARY_DOMAIN_NAME:-plantdb.lab.io.vn}
ENV API_DOMAIN_NAME=${API_DOMAIN_NAME:-plantdb-api.lab.io.vn}
ENV DB_DOMAIN_NAME=${DB_DOMAIN_NAME:-plantdb-db.lab.io.vn}

# Copy configuration templates
COPY conf /etc/nginx/templates

RUN mkdir -p /var/cache/nginx && \
    chown -R nginx:nginx /var/cache/nginx

EXPOSE 80 443
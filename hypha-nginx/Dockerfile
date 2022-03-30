FROM nginx:latest as base
COPY ./static /var/www/hypha/static
EXPOSE 80

FROM base as prod
COPY ./nginx.conf /etc/nginx/nginx.conf

FROM base as local
COPY ./nginx-local.conf /etc/nginx/nginx.conf

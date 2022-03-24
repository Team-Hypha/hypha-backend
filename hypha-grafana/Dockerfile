FROM grafana/grafana:latest as base
WORKDIR /
COPY ./datasources.yaml /etc/grafana/provisioning/datasources/datasources.yaml
COPY ./dashboards /etc/grafana/provisioning/dashboards
COPY ./grafana.ini /etc/grafana/grafana.ini
COPY ./plugins /var/lib/grafana/plugins
EXPOSE 3000
FROM grafana/loki:latest
WORKDIR /
COPY ./loki-config.yaml /etc/loki/config.yaml
COPY ./loki-config-local.yaml /etc/loki/config-local.yaml
EXPOSE 3100
EXPOSE 7946
EXPOSE 9095
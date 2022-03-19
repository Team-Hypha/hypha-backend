# Healthcare Demo

## Installation and Usage - Local

**Service 1**
in a new terminal:

- `cd services/service1`
- `npm run dev`

**Service 2**
in a new terminal:

- `cd services/service2`
- `npm run dev`

**Gateway Collector**
in a new terminal:

- `docker compose -f ./gateway-collector/docker-compose.yaml up --force-recreate`

**Agent (either OtelCol-Contrib or Fluent Bit)**
in a new terminal:

- `otelcol-contrib --config ./agent-collector-binary/otel-config.yaml`
  OR
- `fluent-bit -c fluent-config/fluent.conf`

**Make Requests**
Navigate to `localhost` ports `3001` and `3002` to generate requests in the demo.
View Grafana on `localhost` port `3000`.

## Installation and Usage - Dockerized

**Start Service 1, Service 2, and their Agents**
make sure `otelcol-contrib` is in both `service1` and `service2` dirs
from `dockerized_demo` folder:

- `docker compose up --build`

**Gateway Collector**
in a new terminal from project root:

- `docker compose -f ./gateway-collector/docker-compose.yaml up --force-recreate`

**Make Requests**
Navigate to `localhost` ports `3001` and `3002` to generate requests in the demo.
View Grafana on `localhost` port `3000`.

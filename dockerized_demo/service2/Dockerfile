FROM node:16-alpine
WORKDIR /
RUN npm install -g nodemon

COPY package.json package.json
RUN npm install

EXPOSE 3002

COPY otelcol-contrib otelcol-contrib
COPY otel-config.yaml otel-config.yaml
COPY index.js index.js
COPY basic-tracing.js basic-tracing.js
COPY run_with_agent.sh run_with_agent.sh
RUN mkdir logs
RUN touch logs/service2.json

CMD ./run_with_agent.sh

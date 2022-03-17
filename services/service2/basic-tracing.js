const opentelemetry = require("@opentelemetry/sdk-node");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");

const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-grpc");

const { Resource } = require("@opentelemetry/resources");

const {
  SemanticResourceAttributes,
} = require("@opentelemetry/semantic-conventions");

const exporter = new OTLPTraceExporter({
  // optional - url default value is http://localhost:55681/v1/traces
  url: "http://localhost:4317/v1/traces",
});

const sdk = new opentelemetry.NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "service2",
  }),
  traceExporter: exporter,
  instrumentations: [getNodeAutoInstrumentations({
    // load custom configuration for http instrumentation
    '@opentelemetry/instrumentation-http': {
      applyCustomAttributesOnSpan: (span) => {
        span.setAttribute('service', 'service2');
      },
    },
    '@opentelemetry/instrumentation-winston': {
      logHook: (_, record) => {
        record['service'] = 'service2';
      },
    },
  })],
});

// initialize the SDK and register with the OpenTelemetry API
// this enables the API to record telemetry
sdk
  .start()
  .then(() => console.log("Tracing initialized"))
  .catch((error) => console.log("Error initializing tracing", error));

// gracefully shut down the SDK on process exit
process.on("SIGTERM", () => {
  sdk
    .shutdown()
    .then(() => console.log("Tracing terminated"))
    .catch((error) => console.log("Error terminating tracing", error))
    .finally(() => process.exit(0));
});

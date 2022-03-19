#!/bin/sh

# Start the agent collector
./otelcol-contrib --config ./otel-config.yaml &
  
# Start the node process
node -r ./basic-tracing.js $1 &
  
# Wait for any process to exit
wait -n
  
# Exit with status of process that exited first
exit $?

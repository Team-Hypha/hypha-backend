# Start the second process
nodemon -r ./basic-tracing.js index.js &
  
# Start the first process
./otelcol-contrib --config ./otel-config.yaml
  
# Wait for any process to exit
wait -n
  
# Exit with status of process that exited first
exit $?

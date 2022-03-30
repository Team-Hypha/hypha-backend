gateway=`docker compose ps | grep -o "hypha-LoadB.*com:4317"`
nginx=`docker compose ps | grep -o "hypha-LoadB.*com:80"`

tee << EOF endpoints.txt
Gateway Collector: $gateway
Hypha Dashboard: http://$nginx/hypha
EOF

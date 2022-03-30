gateway=`docker compose ps | grep -o "hypha-LoadB.*com:4317"`
nginx=`docker compose ps | grep -o "hypha-LoadB.*com:80"`

cat <<EOF > endpoints.txt
Gateway collector: $gateway
Nginx (hypha dashboard): $nginx
EOF



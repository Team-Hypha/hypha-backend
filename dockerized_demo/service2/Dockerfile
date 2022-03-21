# FROM wboard82/hypha-agent:test
FROM hypha-agent:latest
WORKDIR /
COPY package.json package.json
RUN npm install

EXPOSE 3002
COPY index.js index.js
CMD ["./run_with_hypha.sh", "index.js"]

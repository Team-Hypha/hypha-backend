FROM wboard82/hypha-agent:test
WORKDIR /
COPY package.json package.json
RUN npm install

EXPOSE 3001
COPY index.js index.js
CMD ["./run_with_hypha.sh", "index.js"]

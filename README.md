## Hypha Backend

### Local Deployment

1. From project root directory, run `docker compose up --build`
2. View Grafana on `localhost` port `3000`

### AWS ECS Deployment

<!-- TODO: Expand AWS and AWS CLI configuration details -->

1. Configure AWS credentials
2. Install AWS CLI latest version
3. Configure [Docker ECS Integration](https://docs.docker.com/cloud/ecs-integration/)

- If on MacOS or Windows, install latest version of Docker Desktop
- If on Linux, make sure you have Docker 19.03 or later, then also install the Docker Compose CLI:

```
curl -L https://raw.githubusercontent.com/docker/compose-cli/main/scripts/install/install_linux.sh | sh
```

4. Create a new docker ecs context with `docker context create ecs <context-name>`
5. Switch to the new ecs context with `docker context use myecs`
6. Check that you're on the correct context with `docker context ls`
7. From the `ecs-hypha-backend` directory, run `docker compose up`
8. Once deployment processes complete, check status of services with `docker compose ps`
9. Don't forget to switch your context back for local development! `docker context use default`

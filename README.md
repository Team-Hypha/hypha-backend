# Hypha Backend

## Local Deployment

1. From project root directory, run `docker compose -f local-compose.yml up --build`
2. View Grafana on `localhost` port `3000`

## AWS ECS Deployment

### Prerequisites
1. Install [AWS CLI latest version](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
2. Configure [AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-prereqs.html)
3. Setup [Docker ECS Integration](https://docs.docker.com/cloud/ecs-integration/)


<details>
<summary>MacOS or Windows</summary>
<br>
Install latest version of [Docker Desktop](https://www.docker.com/products/docker-desktop/)
</details>

# Linux, make sure you have Docker 19.03 or later, then also install the Docker Compose CLI: `curl -L https://raw.githubusercontent.com/docker/compose-cli/main/scripts/install/install_linux.sh | sh`

1. Create a new docker ecs context with `docker context create ecs <context-name>`

### Deploy
1. Switch to your ecs context with `docker context use <context-name>`
2. From the project root directory, run `docker compose up`
3. Once deployment processes complete, run `sh get-endpoints.sh` to create `endpoints.txt` file containing the gateway and dashboard endpoints
4. If you want to return to local deployment, switch context with `docker context use default`

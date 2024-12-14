# Docker Notes

## Dockerfile

- File used to define steps and instructions for creating Docker images.

## Instructions

### RUN

- Executes commands during the image build process.
- Runs once at build time.

### CMD

- Specifies the default command to run when the container starts.
- Executes during the container's runtime.

## Common Commands

- `docker image ls`: Lists all available Docker images.
- `docker ps`: Lists all running Docker containers.
- `docker ps -a`: Lists all containers (running and stopped).
- `docker rm <container_id>`: Removes a stopped container.

## Docker Run

- Used to start a container from an image.

### Common Parameters

- `--name <name>`: Assigns a custom name to the container.
- `-d`: Runs the container in detached mode (in the background).
- `-p <host_port>:<container_port>`: Maps a host port to a container port.
- `-it`: Runs the container interactively with a terminal.
- `--rm`: Automatically removes the container after it stops.

## Docker Exec

- Runs commands inside a running container.

### Examples

- `docker exec -it <container_id> bash`: Opens a bash shell in the container.
- `docker exec <container_id> <command>`: Executes a specific command inside the container.
  - Example: `docker exec <container_id> ls /app` lists the contents of the `/app` directory inside the container.

## Volumes

- Used to persist data between container runs.
- Enables sharing data between the host and container.

### Commands

- `docker volume create <volume_name>`: Creates a new volume.
- `docker run -v <volume_name>:<container_path>`: Mounts a volume to a container.
  - Example: `docker run -v my_volume:/data ubuntu` mounts `my_volume` to the `/data` directory in the container.
- `docker volume ls`: Lists all Docker volumes.

### Best Practices

- Use named volumes for consistent data access.
- Mount specific directories to avoid accidental overwrites.
  - Example: `docker run -v $(pwd)/data:/app/data my_image` mounts the host's `data` directory to the container.

## Docker Compose

- Tool to define and manage multi-container applications.

### Example Configuration

```yaml
version: "3"
services:
  node_app:
    container_name: express_app
    ports:
      - "6777:4000"
    build: .
    volumes:
      - /src:/app/src
```

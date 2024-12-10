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

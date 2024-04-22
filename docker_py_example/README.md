# Python application for generating a random number between two user-provided inputs.

## Prerequirements

1. Docker engine running.

As this is a Docker learning project, these are intended to be run inside Docker containers.

## Instructions to run
1. Open a terminal in this working directory
2. Build the docker image

```
docker build -t <name> .
```
3. Create and run the container with an interactive terminal so inputs can be provided.

```
docker run -it --name <name> <name of tag from step 2>
```

Optionally can run the above command with the -rm tag to remove the container after it finishes

4. Follow prompts

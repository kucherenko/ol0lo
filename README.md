# ol0lo

### Docker Instructions

To build and run the container, follow the steps below:

1. Make sure you have Docker installed on your machine.
2. Open a command line terminal.
3. Navigate to the root directory of the project.
4. Build the Docker image by running the following command:

```
docker build -t ol0lo .
```

This command will build the Docker image using the Dockerfile in the project.
5. Once the image is built, you can run the container using the following command:

```
docker run -p 8080:80 ol0lo
```

This command will run the container and map port 8080 of the host machine to port 80 of the container.
6. Open a web browser and navigate to `http://localhost:8080` to access the web app.

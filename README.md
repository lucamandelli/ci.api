# Sample API with Docker

## Docker Compose Setup
### Prerequisites

- Docker
- Docker Compose

## Environment variables

Create a `.env` file at the project root with content like:

```env
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=luca-db
MYSQL_USER=admin
MYSQL_PASSWORD=root
```

## Run the containers

To build and start the services:

```bash
docker-compose up --build -d
```

## Structure

- **db**: MySQL container with volume for data persistence.
- **api**: Node/NestJS application.

## Network

The containers use a custom network named `luca-network` for isolated communication.

## Test the connection

1. Check containers:
   ```bash
   docker ps
   ```
2. Access the database:
   ```bash
   docker exec -it mysql mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD}
   ```
3. Test the API at: [http://localhost:3001](http://localhost:3001)

---

Ready! 🚀

echo "Starting services"
docker-compose -f docker-compose.yaml up -d --build

sleep 20
echo "Services are up and ready"

docker-compose -f docker-compose.yaml up --exit-code-from cypress

echo "Cypress tests passed successfully."

echo "Stopping docker compose..."
docker-compose -f docker-compose.yaml down

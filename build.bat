echo Mulai install dependencies
npm install

echo Mulai build aplikasi Angular
npm run build --configuration production

echo Build Docker image
docker build -f Dockerfile -t angular/test-19:1.0.1 .

echo Jalankan ulang container dengan Docker Compose
docker-compose up -d --force-recreate

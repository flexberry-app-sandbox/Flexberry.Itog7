docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itog7-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itog7-java/app ../../..

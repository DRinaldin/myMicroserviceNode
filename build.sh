#CMD
#faz transpilação Babel
npm run-script build
#Docker
#parar container
docker stop mymicroservicenode
#remover container
docker container rm mymicroservicenode
#apagar imagem container
docker image rm mymicroservicenode
#construir container
docker build -t mymicroservicenode .
#iniciar container
docker run -d --name mymicroservicenode -p 8080:8080 mymicroservicenode
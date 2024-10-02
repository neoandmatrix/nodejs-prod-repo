
### docker build -t backend-app:development -f docker/development/Dockerfile .
### docker run -it -v ${PWD}:/usr/src/backend-app -v /usr/src/backend-app/node-modules -p 3000:3000 backend-app:dev
FROM node:15

WORKDIR /usr/local/app

# Bundle app source (see .dockerignore)
COPY . /usr/local/app

#next binds to 127.0.0.1, this is allows debugging outside the cluster by port forwarding 9255 to 9233
RUN apt update && \
    apt install -y socat &&  \
    npm install && \
    npm run build

RUN chmod 755 docker-entry.sh

CMD ./docker-entry.sh


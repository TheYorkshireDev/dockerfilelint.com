FROM node:9.3.0

COPY . /opt/dockerfilelint.com

WORKDIR /opt/dockerfilelint.com

RUN npm install -g grunt-cli babel

RUN make deps

RUN make build

EXPOSE 5000

CMD ["make", "run"]

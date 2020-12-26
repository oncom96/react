# Extending image
FROM node

RUN apt-get update
RUN apt-get upgrade -y
#RUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Versions
RUN npm -v
RUN node -v

# Install app dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN npm install

# Bundle app source
COPY . /usr/src/app

# Port to listener
EXPOSE 5000

# Environment variables
ENV NODE_ENV production
ENV PORT 5000
ENV PUBLIC_PATH "/"

RUN yarn build
RUN yarn global add serve

# Main command
CMD [ "serve", "-s", "build" ]
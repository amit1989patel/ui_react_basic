
FROM node:alpine

# Create app directory
RUN mkdir -p /dev-danakita-ui
WORKDIR  /dev-danakita-ui

# Install app dependencies
COPY package.json /dev-danakita-ui
RUN npm install

# Bundle app source
COPY . /dev-danakita-ui 

# #set environment variables
# ENV NODE_ENV aws

EXPOSE 5000
CMD [ "npm","run", "start" ]

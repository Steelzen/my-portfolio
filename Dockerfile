# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory in Docker
WORKDIR /usr/src/app

# Copy the dependencies file to the working directory
COPY package.json yarn.lock ./

# Install any dependencies
RUN yarn install

# Copy the content of the local src directory to the working directory
COPY . .

# Specify the command to run on container start
CMD ["yarn", "start"]

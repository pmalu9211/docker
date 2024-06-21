# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install app dependencies using `npm install`
COPY package.json ./
RUN npm install

# Copy the rest of the application code.
COPY . .

# Bind the port that the app will run on.
EXPOSE 3000

# Define environment variable
ENV PORT=3000

# Start the app
CMD [ "npm", "start" ]

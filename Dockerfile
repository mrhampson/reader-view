FROM node:10

# Create the dir for the app
WORKDIR /usr/src/app/

# Copy the depencies defined in package.json
COPY package*.json /usr/src/app/

# Install deps
RUN npm install

# Copy the rest of the source
COPY . /usr/src/app/

CMD ["npm", "start"]
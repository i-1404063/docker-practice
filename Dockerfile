FROM node

# virtual file system in the container
WORKDIR /app

# at first copy the json file then install all the dependency
COPY package.json /app

# install all the dependency referenced in the package.json file (add-dependency path(to reference the package) [pakcage-name] [target](such --dev) --no-overwrite)
RUN npm install

# ./ meaning current directory //it is more efficient because image is being built in different layers /if i edit source code it will take minimum time to build the image
COPY . ./


# exposing port to outside of the container since container runs in isolated environment which totally independent like host machine
EXPOSE 5000

# CMD commnad execute when container start running on the image
CMD ["node", "server.js"]


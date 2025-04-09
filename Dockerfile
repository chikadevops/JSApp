# Use the official Node.js image as a base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the entire project into the container
COPY . .

# Install the app dependencies (in case there are any)
RUN npm install

# Expose the port your app runs on
EXPOSE 3000

# Default command to run when the container starts
CMD ["npm", "start"]

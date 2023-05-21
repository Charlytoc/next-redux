# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]

# Clone the project
git clone https://github.com/VadimMentorQA/calculator.git

# Navigate to the project directory
cd calculator

# Install dependencies
npm install

# Install newman
npm install -g newman

# Launch the project locally
npm run start

# Open the project in browser
http://localhost:3000/

# Stop the project by shortcut: 
Ctrl + C

# Run the unit tests
npm run test

# Run the API tests using newman
newman run https://api.postman.com/collections/12717861-1706152c-b5d3-4c65-974c-1f51f68ebd27\?access_key\=PMAT-01H9R70VQAG4AM7YVNPWS1DHQP

# Run the e2e tests in UI mode
npx cypress open

# Run the e2e tests in headless mode
npx cypress run
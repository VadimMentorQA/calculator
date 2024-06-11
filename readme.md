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

# Run the API tests using newman - work in progress

newman run https://api.postman.com/collections/12717861-b51a5a9b-40ef-4254-b61e-c57fb4eb1206?access_key=PMAT-01J0364PYVRQNYM9V0DG17WVGW

# Run the e2e tests in UI mode

npx cypress open

# Run the e2e tests in headless mode

npx cypress run

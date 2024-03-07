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

newman run https://api.postman.com/collections/32807344-8a9cced9-ad3c-4184-903d-782543772f83?access_key=PMAT-01HRA0M896WR1W5S67ZJYNM4XD

# Run the e2e tests in UI mode

npx cypress open

# Run the e2e tests in headless mode

npx cypress run

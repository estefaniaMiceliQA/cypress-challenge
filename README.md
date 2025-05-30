# Cypress Challenge

## Description  
This project is an example of an e-commerce application for practicing test automation using Cypress, Cucumber, and JavaScript.

Your task is to create as many test scripts as you can for each project's page using stack mentioned above (you can find complete list of app pages under Application Features section below)

DO NOT PUSH DIRECTLY INTO MASTER! Create a new branch with your name as branch name and push changes there. 

## Steps to Run the Project  

1. Clone the repository:  
   ```bash
   git clone git@github.com:estefijmiceli89/cypress-challenge.git
   cd cypress-challenge
   ```

2. Install dependencies using Yarn:  
   ```bash
   yarn install
   ```

3. Start the web application:  
   ```bash
   yarn start
   ```

4. Open Cypress in interactive mode:  
   ```bash
   yarn cypress:open
   ```

5. To run the tests in headless mode:  
   ```bash
   yarn test
   ```

## Application Features  

1. **Home Page**:  
   - Product list with name and price.  
   - Links to product detail pages.  

2. **Product Page**:  
   - Details of a specific product.  
   - Button to add the product to the cart.  

3. **Cart Page**:  
   - List of products added to the cart.  
   - Link to proceed to checkout.  

4. **Checkout Page**:  
   - Form to complete the purchase.  

5. **Profile Page**:  
   - Displays user information: name and email.  

## Project Structure  

- `src/`: Application source code.  
- `cypress/`: Cypress test cases and configurations.  

Good luck!
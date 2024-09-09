Dear Candidate's 

Thank you for your interest in the React Developer position. As part of the interview process, we would like you to complete a task that demonstrates your ability to implement token-based authentication, protected routes, and perform CRUD operations within a React application.

Task Overview

Your objective is to create a React application that implements token-based authentication, protected routes, and CRUD operations using the provided API endpoints. The application should restrict access to all routes except the login page until the user successfully logs in.

1. Token-Based Authentication & Protected Routes:


   Login Page: Create a public login page where users can authenticate using the following credentials:

     {

        "email": "test@gmail.com",

        "password": "12345678"

     }

     - POST URL: `https://hotel.aotrek.net/api/auth/login`
     - Upon successful login, the API will return an access token. Store this token securely using Redux or `localStorage`.

     - Redirect: After successful login, redirect the user from the login page to the home page (e.g., `/home`).

     - Protected Routes: All routes except the login page (e.g., `/create`, `/manage`, `/update`, `/delete`) should be protected and require the token for access. If the user is not authenticated, they should be         redirected to the login page.


2. Create Product (Protected Route):

   - Form Design: Create a product creation form on the `/create` route with fields for:

          - Name

          - Title

          - Description

   - API Integration: Use the stored token to authorize a POST request to create a product using the following API:

     - POST URL: `https://hotel.aotrek.net/api/auth/create`

     - Body:

     {

         "name": "demo",

         "title": "demo",

         "description": "demo"

     }

   - Success/Error Handling: Display feedback using SweetAlert2 for success or failure after the form submission.

3. Show All Products (Protected Route):

   - Product Listing: On the `/manage` route, simulate fetching a list of products using the token with the following API:

     - GET URL: `https://hotel.aotrek.net/api/auth/manage`

     - Display all fetched products in a list, ensuring that the token is used to authorize the request.


4. Update Product (Protected Route):

   - Edit Feature: On the `/update` route, allow users to select a product to update its details (name, title, and description).

   - API Integration: Use the token to authorize a PUT request to update the product using the following API:

     - PUT URL: `https://hotel.aotrek.net/api/auth/update/{{id}}`

     - Body:

     {
         "name": "DEMO",

         "title": "React Developer1",

         "description": "Good Job1"

     }

   - Success/Error Handling: Provide feedback on success or failure using SweetAlert2.

5. Delete Product (Protected Route):

   - Delete Feature: On the `/delete` route, implement a delete button for each product in the list.

   - Confirmation: Use SweetAlert2 to confirm deletion before sending the request.

   - API Integration: Use the token to authorize a DELETE request using the following API:

     - DELETE URL: `https://hotel.aotrek.net/api/auth/delete/{{id}}`


Additional Notes:

- Ensure that all CRUD operations (`POST`, `GET`, `PUT`, `DELETE`) are performed with token-based authorization.

- Protected Routes: All routes, except for the login route, should be protected and inaccessible unless the user is authenticated.

- After login, users should be automatically redirected to the home page, where they can view and manage products.


API Endpoints Recap:

Login URL (Public Route):


POST https://hotel.aotrek.net/api/auth/login

Request Body:

{
    "email": "test@gmail.com",

    "password": "12345678"

}


Create Product URL (Protected Route):

POST https://hotel.aotrek.net/api/auth/create

Request Body:

{

    "name": "demo",

    "title": "demo",

    "description": "demo"

}


Fetch All Products URL (Protected Route):

GET https://hotel.aotrek.net/api/auth/manage


Update Product URL (Protected Route):

PUT https://hotel.aotrek.net/api/auth/update/{{id}}

Request Body:

{

    "name": "DEMO",

    "title": "React Developer1",

    "description": "Good Job1"

}


Delete Product URL (Protected Route):

DELETE https://hotel.aotrek.net/api/auth/delete/{{id}}
   # Akasa Foods
## Description: 
Akasa Foods is a online food ordering Portal where users can select and add items to the cart and place an order.
   Technology Stack: 
     - Frontend: ReactJS
     - Backend: Django
     - Database: SQLite 
     - Libraries/Tools: Axios, React Router, Django Rest Framework, etc.

## Setup Instructions
   - Prerequisites: 
   - Installation Steps:
     1. Clone the repository.
        `git clone https://github.com/Priyanka-chaudhari26/AkasaFoods`
     3. Install dependencies (both frontend and backend).
        - For Frontend: 
          Cmd:
         ` cd frontend/fronttask
          npm install`
          
        - For Backend:
          `cd backend
          pip install -r requirements.txt`
     4. Database setup 
	Make sure after cloning the project, dbsqlite3 is visible in backend folder
	`py manage.py makemigrations`
	`py manage.py migrate`
     6. Running the project:
        - Start the backend server:
          Cmd
	``cd backend
         python manage.py runserver``   
        - Start the frontend server:
          Cmd:
        ``cd frontend
	cd fronttask
	npm start``
          

## Authentication Features
   - Registration: 
     - Endpoint: `/api/register/`
     - Method: POST
     - Description: Users can register with their email and password.
     - Example Request:
       json
       ` {
         "email": "user@example.com",
         "password": "password123"
       }`
    

   - Login:
     - Endpoint: `/api/login/`
     - Method: POST
     - Description: Users can log in to the platform using their credentials.
     - Example Request:
       json
       `{
         "email": "user@example.com",
         "password": "password123"
       }`

 ## Cart Functionality
   - Add to Cart:
     - Endpoint: `/api/product/${id}/add-to-cart/`
     - Method: POST
     - Description: Users can add products to their cart.
     - Example Request:
       json
      ` {
         "product_id": 1,
         "quantity": 2
       }`
   - View Cart:
     - Endpoint: `/api/cart/`
     - Method: GET
     - Description: Users can view their cart with products and quantities.
## Checkout Functionality
   - Process: Ensure items in the cart are in stock. 
  
## Future Improvements
   - Fix cart functionality with user login validation.
   - Improve error handling during the checkout process.



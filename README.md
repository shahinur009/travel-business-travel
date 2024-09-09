github clone link:https://github.com/shahinur009/travel-business-travel.git

live Link: 

**Challenges**
1. I face main challenge in this project is login system. When i get user information save in localStorage then all work so easy. 
2. Delete function: when I implement delete function but it's didn't work perfectly. Solution: when I see 429 error. then realize its a server side problem. 
*If see delete function not work perfectly then login again it will be work* 

**OverView**:
This React application demonstrates token-based authentication with protected routes to ensure secure access to specific functionalities. Users must log in to gain access to restricted pages. The application includes the following features:
Login Page: Users can authenticate by providing the following credentials:
1. Email: test@gmail.com
2. Password: 12345678
On successful login, the application stores the access token securely and redirects the user to the home page.

**Protected Routes**:After logging in, users are redirected to the home page (/home). Access to the following pages is restricted and requires authentication:
1. Manage Products ('/manage'): Users can view the list of all products.
2. Create Product ('/create'): Users can add new products.
3. Update Product ('/update/:id'): Users can update the details of an existing product

**Token**
Token save as localStorage in browser 

**NPM USE**
1. npm install axios
2. npm install sweetalert2

**CSS Framework use**
1. Tailwind CSS
2. Daisy UI
3. Mamba UI

**In terminal use**
npm run dev

**ALL API**
1. Login: POST https://hotel.aotrek.net/api/auth/login
2. Create Product: POST https://hotel.aotrek.net/api/auth/create
3. Fetch All Products: GET https://hotel.aotrek.net/api/auth/manage
4. Update Product: PUT https://hotel.aotrek.net/api/auth/update/:id
5. Delete Product: DELETE https://hotel.aotrek.net/api/auth/delete/:id
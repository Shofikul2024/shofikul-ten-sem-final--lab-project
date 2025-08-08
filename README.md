Shofikul-Islam Tech Point 
Shofikul-Islam Tech Point is a fully functional e-commerce website for a computer and accessories store, built with HTML, CSS, and JavaScript. The website allows users to browse tech products, add them to a shopping cart, register or log in to an account, proceed through a checkout with a mock payment system, and explore products organized by category. A dedicated admin dashboard is included for managing the product inventory.
________________________________________


Features
Home Page: Features a dynamic image slider and displays a grid of products with names, prices, and images. Products are organized into sections: Laptops, Desktops, Components, and Accessories.
Live Product Search: An integrated search bar allows users to filter products in real-time.
User Authentication:
Register and login functionality with user data stored in localStorage.
A pre-configured admin user (email: admin@techpoint.com, password: admin123) for managing products.
Shopping Cart: Users can add or remove products from the cart, update quantities, and view the total price.
Checkout: A mock payment system that requires user login and displays an order summary.
Categories: Browse products organized by Laptops, Desktops, Components, and Accessories.
Admin Dashboard: A secure area for adding or deleting products from the store's inventory (admin-only access).
Responsive Design: Built with pure CSS and media queries to ensure a seamless experience on both desktop and mobile devices.
________________________________________
Project Structure
/
|-- index.html          # Main home page with all products
|-- loging.html         # User login page
|-- register.html       # User registration page
|-- cart.html           # Shopping cart page
|-- checkout.html       # Checkout page with mock payment form
|-- admin.html          # Admin dashboard for managing products
|-- style.css           # Custom CSS for primary styling and layout
|-- styles.css          # Additional styles (used for admin/auth pages)
|-- script.js           # JavaScript for all dynamic functionality
|-- images/             # Folder for local product images
________________________________________
Setup Instructions
1. Clone or Download
Download all project files (index.html, loging.html, register.html, cart.html, checkout.html, admin.html, style.css, styles.css, script.js) and the images folder into a single directory on your local machine.
2. Serve the Website
To avoid Cross-Origin Resource Sharing (CORS) issues related to localStorage across different HTML files, you must run the project on a local server.
Open your terminal or command prompt.
Navigate to the project directory.
Run the following command (requires Python):
Bash
python -m http.server 8000
Open your web browser and go to http://localhost:8000.
3. Clearing Storage (Optional)
To reset all user data, the cart, and the product list to its default state, open the browser's Developer Tools (F12), go to the Console tab, and run:
JavaScript
localStorage.clear();
Reloading the page will recreate the default admin user.
________________________________________
Usage
Browse Products:
Visit index.html to view all available tech products.
Use the navigation bar or scroll down to browse by category.
Click the cart icon on a product to add it to your shopping cart.
User Actions:
Register: Go to register.html to create a new user account.
Login: Use loging.html to sign in. Use the admin credentials (admin@techpoint.com / admin123) for admin access.
Cart: Navigate to cart.html to view and manage items in your cart.
Checkout: Go to checkout.html to complete a mock payment (login is required).
Admin Actions:
Log in with the admin credentials.
Visit admin.html to add new products or delete existing ones from the inventory.
________________________________________
Notes
Images: The website is configured to use local images from the /images directory. Ensure the image paths in the script.js file are correct.
Payment System: The checkout page features a mock payment form for demonstration purposes. Integrating a real payment gateway like Stripe or PayPal would require a server-side backend.
Admin User: A temporary admin user is created by default if no users exist in localStorage. You can modify the credentials or add more admins by editing the script.js file.
________________________________________
Limitations
Data Persistence: All data (users, cart, products) is stored in the browser's localStorage, which is not suitable for a production environment. A real-world application would require a backend database (e.g., MySQL ).
Admin Functionality: The admin dashboard is basic and only supports adding and deleting products. A complete system would include features for editing products, managing orders, and viewing user data.
________________________________________
Future Improvements
Implement a backend using a framework like  Django  for robust data management and API creation.
Integrate a real payment gateway for actual transactions.
Enhance the admin dashboard with product editing, order management, and analytics.
Add more advanced filtering and sorting options for products on the shop page.
Develop a "user profile" page where users can view their order history.
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const menuBtn = document.querySelector("#menu-btn");
    const searchBtn = document.querySelector("#search-btn");
    const navbar = document.querySelector(".header .navbar");
    const searchForm = document.querySelector(".header .search-form");
    

    // Slider elements
    const slides = document.querySelectorAll(".home .slides-container .slide");
    const nextBtn = document.querySelector("#next-slide");
    const prevBtn = document.querySelector("#prev-slide");
    let currentSlideIndex = 0;

    // Cart elements
    const cartBtns = document.querySelectorAll('.products .fa-shopping-cart');
    const cartItemCount = document.querySelector('.cart-item-count');
    let cartCount = 0;

    // Search elements
    const searchBox = document.querySelector('#search-box');
    const productBoxes = document.querySelectorAll('.products .box');

    // --- Event Listeners ---

    
    // Toggle mobile navigation menu
    menuBtn.onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active'); // Close search form if open
    };

    // Toggle search form
    searchBtn.onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active'); // Close navbar if open
    };

    // Hide menus on scroll
    window.onscroll = () => {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    };

    // Slider controls
    nextBtn.onclick = () => nextSlide();
    prevBtn.onclick = () => prevSlide();

    // Cart functionality
    cartBtns.forEach(button => {
        button.onclick = () => {
            cartCount++;
            cartItemCount.textContent = cartCount;
        };
    });

    // Live search functionality
    searchBox.onkeyup = () => {
        const searchTerm = searchBox.value.toLowerCase().trim();

        productBoxes.forEach(box => {
            const productName = box.dataset.name.toLowerCase();
            if (productName.includes(searchTerm)) {
                box.style.display = 'inline-block';
            } else {
                box.style.display = 'none';
            }
        });
    };

    // --- Functions ---

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    // Function to show the next slide
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    // Function to show the previous slide
    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }
    
    // Auto-play the slider
    setInterval(nextSlide, 7000);

    // Initialize the first slide
    showSlide(currentSlideIndex);
});









document.addEventListener('DOMContentLoaded', () => {
    // --- MAIN PAGE (index.html) SCRIPT ---
    // This block only runs if it finds elements specific to the main page.
    if (document.querySelector('.home .slides-container')) {
        // Select DOM elements for the main page
        const menuBtn = document.querySelector("#menu-btn");
        const searchBtn = document.querySelector("#search-btn");
        const navbar = document.querySelector(".header .navbar");
        const searchForm = document.querySelector(".header .search-form");

        // Slider elements
        const slides = document.querySelectorAll(".home .slides-container .slide");
        const nextBtn = document.querySelector("#next-slide");
        const prevBtn = document.querySelector("#prev-slide");
        let currentSlideIndex = 0;

        // Cart elements
        const cartBtns = document.querySelectorAll('.products .fa-shopping-cart');
        const cartItemCount = document.querySelector('.cart-item-count');
        let cartCount = 0;

        // Search elements
        const searchBox = document.querySelector('#search-box');
        const productBoxes = document.querySelectorAll('.products .box');

        // Toggle mobile navigation menu
        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
            searchForm.classList.remove('active');
        };

        // Toggle search form
        searchBtn.onclick = () => {
            searchForm.classList.toggle('active');
            navbar.classList.remove('active');
        };

        // Hide menus on scroll
        window.onscroll = () => {
            navbar.classList.remove('active');
            searchForm.classList.remove('active');
        };

        // Slider controls
        if (nextBtn && prevBtn) {
            nextBtn.onclick = () => nextSlide();
            prevBtn.onclick = () => prevSlide();
        }

        // Cart functionality
        cartBtns.forEach(button => {
            button.onclick = () => {
                cartCount++;
                cartItemCount.textContent = cartCount;
            };
        });

        // Live search functionality
        if (searchBox) {
            searchBox.onkeyup = () => {
                const searchTerm = searchBox.value.toLowerCase().trim();
                productBoxes.forEach(box => {
                    const productName = box.dataset.name.toLowerCase();
                    if (productName.includes(searchTerm)) {
                        box.style.display = 'inline-block';
                    } else {
                        box.style.display = 'none';
                    }
                });
            };
        }

        // Function to show a specific slide
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        // Function to show the next slide
        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }

        // Function to show the previous slide
        function prevSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
        }

        // Auto-play the slider and initialize it
        if (slides.length > 0) {
            setInterval(nextSlide, 7000);
            showSlide(currentSlideIndex);
        }
    }

    // --- ADMIN PAGE (admin.html) SCRIPT ---
    // This block runs if it finds elements specific to the admin page.
    if (document.getElementById('admin-book-list')) {
        displayAdminProducts();

        // Image preview handler
        const imageInput = document.getElementById('book-image');
        const previewImg = document.getElementById('preview-img');
        if (imageInput) {
            imageInput.addEventListener('change', function() {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        previewImg.src = e.target.result;
                        previewImg.classList.remove('hidden');
                    };
                    reader.readAsDataURL(file);
                } else {
                    previewImg.classList.add('hidden');
                }
            });
        }
    }
});


// =====================================================================
// NEW: USER AUTHENTICATION & ADMIN FUNCTIONS
// These functions are in the global scope to be accessible via `onclick`
// =====================================================================

/**
 * Handles user login.
 * Checks for a special admin user first, then checks registered users in localStorage.
 */
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    // 1. Check for the hardcoded admin user
    if (email === 'admin@shofi.com' && password === 'admin1234') {
        alert('Admin login successful!');
        window.location.href = 'admin.html'; // Redirect to admin dashboard
        return;
    }

    // 2. Check for regular registered users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert(`Welcome back, ${user.name}!`);
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        alert('Invalid email or password. Please try again or register.');
    }
}

/**
 * Handles new user registration.
 * Stores user data in localStorage.
 */
function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (!name || !email || !password) {
        alert('Please fill in all fields to register.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already in use
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('An account with this email already exists. Please log in.');
        return;
    }

    // Add the new user
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now log in.');
    window.location.href = 'loging.html'; // Redirect to the login page
}


/**
 * Adds a new product from the admin dashboard.
 * Stores product data in localStorage.
 */
function addBook() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value; // In your context, this could be Brand/Creator
    const price = document.getElementById('book-price').value;
    const category = document.getElementById('book-category').value;
    const imagePreview = document.getElementById('preview-img');

    if (!title || !author || !price || !category) {
        alert('Please fill in all required product fields.');
        return;
    }

    const products = JSON.parse(localStorage.getItem('products')) || [];
    const newProduct = {
        id: Date.now(), // Use a timestamp for a unique ID
        title,
        author,
        price,
        category,
        image: imagePreview.src // Get the base64 URL from the preview
    };

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    alert('New tech product added successfully!');
    document.querySelector('.bg-white.p-6.rounded-lg.shadow-lg form').reset(); // Reset form fields
    imagePreview.classList.add('hidden');
    displayAdminProducts(); // Refresh the list of products on the page
}

/**
 * Displays all products on the admin dashboard for management.
 */
function displayAdminProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const listContainer = document.getElementById('admin-book-list');
    listContainer.innerHTML = ''; // Clear the list before re-rendering

    if (products.length === 0) {
        listContainer.innerHTML = '<p>No products have been added yet.</p>';
        return;
    }

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'flex justify-between items-center bg-gray-50 p-4 rounded-lg';
        productElement.innerHTML = `
            <div class="flex items-center space-x-4">
                <img src="${product.image || 'https://via.placeholder.com/50x75'}" alt="${product.title}" class="w-12 h-16 object-cover rounded">
                <div>
                    <p class="font-bold">${product.title}</p>
                    <p class="text-sm text-gray-600">by ${product.author}</p>
                    <p class="text-sm font-semibold">$${product.price}</p>
                </div>
            </div>
            <div>
                <button onclick="deleteProduct(${product.id})" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
            </div>
        `;
        listContainer.appendChild(productElement);
    });
}

/**
 * Deletes a product from localStorage.
 * @param {number} id - The ID of the product to delete.
 */
function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products = products.filter(product => product.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        displayAdminProducts(); // Refresh the list
    }
}



document.addEventListener('DOMContentLoaded', () => {

    // --- Cart Functionality ---

    // Select all product 'add to cart' buttons and the header's cart counter
    const addToCartButtons = document.querySelectorAll('.products .box .fa-shopping-cart');
    const cartItemCountElement = document.querySelector('.cart-item-count');

    // Load the cart from browser storage, or create an empty cart if one doesn't exist
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // Function to save the current cart state to browser storage
    const saveCart = () => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    };

    // Function to update the number displayed on the cart icon
    const updateCartCounter = () => {
        cartItemCountElement.textContent = cart.length;
    };

    // Loop through each 'add to cart' button and add a click event listener
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Find the parent product card of the button that was clicked
            const productCard = event.target.closest('.box');
            
            // Extract the product's details from the card
            const productId = productCard.dataset.name;
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            const productImage = productCard.querySelector('img').src;

            // Check if the product is already in the cart to avoid duplicates
            const isAlreadyInCart = cart.some(item => item.id === productId);

            if (isAlreadyInCart) {
                alert(`${productName} is already in your cart!`);
            } else {
                // If not, create a new product object
                const newProduct = {
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1 // Default quantity to 1
                };

                // Add the new product to the cart array
                cart.push(newProduct);
                
                // Save the updated cart to storage
                saveCart();

                // Update the cart counter in the header
                updateCartCounter();

                alert(`${productName} has been added to the cart.`);
            }
        });
    });

    // --- General Page Scripts (for header buttons) ---
    
    const searchBtn = document.querySelector('#search-btn');
    const searchForm = document.querySelector('.search-form');
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');

    searchBtn.onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
    };

    menuBtn.onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
    };

    window.onscroll = () => {
        searchForm.classList.remove('active');
        navbar.classList.remove('active');
    };

    // Update the cart counter when the page first loads
    updateCartCounter();
});
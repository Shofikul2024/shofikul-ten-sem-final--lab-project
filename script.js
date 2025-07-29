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
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
}




let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slideIndex = index;

    if (slideIndex >= dots.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = dots.length - 1;
    }

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function currentSlide(index) {
    showSlide(index);
}

// Auto slide
setInterval(nextSlide, 3000);

// Initial slide
showSlide(slideIndex);







// cards 
const cardData = [
    { imgSrc: 'images/image-1.jpeg' },
    { imgSrc: 'images/image-1.jpeg' },
    { imgSrc: 'images/image-1.jpeg' },
    { imgSrc: 'images/image-1.jpeg' },
    { imgSrc: 'images/image-1.jpeg' },
    { imgSrc: 'images/image-1.jpeg' },
];

function createCard(imageSrc) {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = imageSrc;
    card.appendChild(img);
    return card;
}

function renderCards() {
    const cardContainer = document.getElementById('card-container');
    cardData.forEach(data => {
        const card = createCard(data.imgSrc);
        cardContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderCards);



// enquiry form
document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && phone && message) {
        alert('Enquiry submitted successfully!');
        // Perform further processing like sending data to a server
    } else {
        alert('Please fill in all fields.');
    }
});





// foooter section

document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('.footer').appendChild(yearSpan);
});

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
    { imgSrc: 'images/image-2.jpeg' },
    { imgSrc: 'images/image-3.jpeg' },
    { imgSrc: 'images/image-4.jpeg' },
    { imgSrc: 'images/image-5.jpeg' },
    { imgSrc: 'images/image-6.jpeg' },
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

// why housofai

document.addEventListener('DOMContentLoaded', function() {
    const cardData = [
        { imgSrc: 'path/to/expert-counsellors.png', text: 'Expert Counsellors' },
        { imgSrc: 'path/to/years-experience.png', text: '20 Years’ Experience' },
        { imgSrc: 'path/to/successful-applications.png', text: '100 Percent Successful Applications' },
        { imgSrc: 'path/to/acceptance-rates.png', text: 'Highest Acceptance Rates' },
        { imgSrc: 'path/to/students-counselled.png', text: '15000+ Students Counselled' },
        { imgSrc: 'path/to/personalised-attention.png', text: 'Personalised Attention' },
    ];

    const gridContainer = document.querySelector('.grid-container');

    cardData.forEach(data => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        
        const img = document.createElement('img');
        img.src = data.imgSrc;
        img.alt = data.text;
        
        const p = document.createElement('p');
        p.textContent = data.text;

        gridItem.appendChild(img);
        gridItem.appendChild(p);
        
        gridContainer.appendChild(gridItem);
    });
});







// our services

document.querySelector('.view-more-btn').addEventListener('click', function() {
    alert('View More clicked!');
});




// foooter section

document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('.footer').appendChild(yearSpan);
});

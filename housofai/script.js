function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
}



let slideIndex = 0;
const slides = document.querySelector('.slides');

function showSlide(index) {
    slideIndex = index;

    if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
    }

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
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
document.getElementById('enquiryForm').addEventListener('submit', function (event) {
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

// document.addEventListener('DOMContentLoaded', function () {
//     const cardData = [
//         { text: 'Expert Counsellors' },
//         { text: '20 Years’ Experience' },
//         { text: '100 Percent Successful Applications' },
//         { text: 'Highest Acceptance Rates' },
//         { text: '15000+ Students Counselled' },
//         { text: 'Personalised Attention' },
//     ];

//     const gridContainer = document.querySelector('.grid-container');

//     cardData.forEach(data => {
//         const gridItem = document.createElement('div');
//         gridItem.className = 'grid-item';

        

//         const p = document.createElement('p');
//         p.textContent = data.text;

       
//         gridItem.appendChild(p);

//         gridContainer.appendChild(gridItem);
//     });
// });







// our services

document.querySelector('.view-more-btn').addEventListener('click', function () {
    alert('View More clicked!');
});




// foooter section

document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.createElement('span');
    // yearSpan.textContent = new Date().getFullYear();
    document.querySelector('.footer').appendChild(yearSpan);
});

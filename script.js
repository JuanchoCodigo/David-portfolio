// --- Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// Close mobile menu on link click
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

// --- Header Scroll Effect ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.boxShadow = 'none';
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
    }
});

// --- Lightbox Modal Logic ---
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('modal-caption');
const closeModalBtn = document.querySelector('.close-modal');
const triggers = document.querySelectorAll('.lightbox-trigger');

// Open modal on image click
triggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
        // Find the associated title in the sibling .portfolio-info div
        const title = this.nextElementSibling.querySelector('h3').innerText;
        
        modal.style.display = 'flex';
        
        // Slight delay to allow CSS transition to catch the display change
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        modalImg.src = this.src;
        captionText.innerText = title;
        
        // Prevent background scrolling
        document.body.style.overflow = 'hidden';
    });
});

// Close modal function
const closeImageModal = () => {
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
    }, 300); // Matches the CSS transition duration
};

// Event Listeners for closing
closeModalBtn.addEventListener('click', closeImageModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeImageModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeImageModal();
    }
});
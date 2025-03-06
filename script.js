document.addEventListener('DOMContentLoaded', function() {
    handleScrollAnimation();
    highlightCurrentPage();
});

function handleScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

function highlightCurrentPage() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage.split('/').pop()) {
            link.classList.add('hi');
        } else {
            link.classList.remove('hi');
        }
    });
}

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        document.querySelector('header').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');
    }
});

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.social-tile').forEach(tile => {
    tile.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    tile.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});

if (document.querySelector('.events-grid')) {
    document.querySelectorAll('.event-card video').forEach(video => {
        video.addEventListener('mouseover', function() {
            this.play();
        });
        
        video.addEventListener('mouseout', function() {
            this.pause();
        });
    });
}

if (document.querySelector('.resources-grid')) {
    document.querySelectorAll('.resource-card').forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}
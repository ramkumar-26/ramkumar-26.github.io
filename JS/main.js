//Show Menu

let showMenu = (toggleId,navId)=>{
    let toggle = document.getElementById(toggleId);
    let nav = document.getElementById(navId);

    if(toggle && navId){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav_toggle','nav_menu');

//active and remove active

let navLink = document.querySelectorAll('.nav_link');
navLink.forEach(n=> n.classList.remove('active'));

navLink.forEach(n=> n.addEventListener('click',linkAction));

function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'));
    this.classList.add('active');
    let navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
}

// EmailJS Configuration
// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("1aQehdl_p9GiCwBVY"); // Replace with your EmailJS public key
})();

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnLoader = document.getElementById('btn-loader');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
        submitBtn.disabled = true;
        formMessage.textContent = '';
        
        // Get form data
        const formData = {
            from_name: document.getElementById('from_name').value,
            from_email: document.getElementById('from_email').value,
            message: document.getElementById('message').value
        };
        
        // Send notification email to you
        emailjs.send('service_kqzgx7j', 'template_contact', formData)
            .then(function(response) {
                console.log('Notification sent!', response.status);
                
                // Send auto-reply email to sender
                return emailjs.send('service_kqzgx7j', 'template_autoreply', formData);
            })
            .then(function(response) {
                console.log('Auto-reply sent!', response.status);
                
                // Success - both emails sent
                formMessage.textContent = '✅ Message sent successfully! Check your email for confirmation.';
                formMessage.style.color = '#4CAF50';
                
                // Reset form
                contactForm.reset();
                
                // Reset button state
                btnText.style.display = 'inline';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 5000);
            })
            .catch(function(error) {
                // Error
                console.log('FAILED...', error);
                formMessage.textContent = '❌ Failed to send message. Please try again or email me directly at ramkumar.ds26@gmail.com';
                formMessage.style.color = '#f44336';
                
                // Reset button state
                btnText.style.display = 'inline';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            });
    });
}

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme_toggle');
const themeIcon = document.getElementById('theme_icon');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Change icon
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
        localStorage.setItem('theme', 'light');
    }
});
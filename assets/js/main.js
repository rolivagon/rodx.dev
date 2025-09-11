// EmailJS Configuration
(function(){
    emailjs.init("q5JFlvibpjl4x_pIR");
})();

function toggleTheme() {
    const body = document.body;
    const themeText = document.getElementById('theme-text');
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeText.innerHTML = '☀️ Light';
    } else {
        body.setAttribute('data-theme', 'light');
        themeText.innerHTML = '🌙 Dark';
    }
}

// EmailJS Form Handler
function sendEmail(event) {
    event.preventDefault();
    
    // Anti-spam checks
    const honeypot = document.querySelector('input[name="honeypot"]').value;
    if (honeypot) {
        console.log('Bot detected - submission blocked');
        return false;
    }
    
    // Rate limiting check (simple localStorage approach)
    const lastSubmission = localStorage.getItem('lastContactSubmission');
    const now = Date.now();
    const cooldownTime = 60000; // 1 minute
    
    if (lastSubmission && (now - parseInt(lastSubmission)) < cooldownTime) {
        showStatus('❌ Please wait before sending another message', 'error');
        return false;
    }
    
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const statusDiv = document.getElementById('form-status');
    
    // Update button state
    submitBtn.disabled = true;
    btnText.textContent = 'sending...';
    showStatus('📤 Sending message...', 'info');
    
    // Prepare template parameters
    const templateParams = {
        user_name: document.getElementById('email').value,
        user_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toLocaleString()
    };
    
    // Send email via EmailJS
    emailjs.send('service_u2hf018', 'template_glnh2sa', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showStatus('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
            document.getElementById('contact-form').reset();
            localStorage.setItem('lastContactSubmission', now.toString());
        }, function(error) {
            console.log('FAILED...', error);
            showStatus('❌ Failed to send message. Please try again.', 'error');
        })
        .finally(function() {
            // Reset button state
            submitBtn.disabled = false;
            btnText.textContent = 'send --message';
        });
}

function showStatus(message, type) {
    const statusDiv = document.getElementById('form-status');
    statusDiv.textContent = message;
    statusDiv.style.color = type === 'success' ? 'var(--accent-green)' : 
                           type === 'error' ? 'var(--accent-orange)' : 
                           'var(--text-color)';
}

// Add some terminal-like interactions
document.addEventListener('DOMContentLoaded', function() {
    // Attach form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
    }
    
    // Add click sound effect simulation for links
    const links = document.querySelectorAll('.link-card:not(.disabled)');
    links.forEach(link => {
        link.addEventListener('click', function() {
            console.log('> Navigating to:', this.querySelector('.link-title').textContent);
        });
    });

    // Welcome message in browser console
    console.log(`╔══════════════════════════════════════╗
                 ║  Welcome to rodx.dev                 ║
                 ║  Rodrigo Oliva - Indie Developer     ║
                 ║  Status: Ready to build amazing apps ║
                 ╚══════════════════════════════════════╝`);
});
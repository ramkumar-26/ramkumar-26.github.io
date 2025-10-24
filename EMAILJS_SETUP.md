# EmailJS Setup Guide for Contact Form

Your contact form is now ready to work with EmailJS! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE - 200 emails/month)
3. Sign up with your email or Google account

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Select Gmail and click "Connect Account"
   - Authorize EmailJS to send emails from your Gmail
4. Give it a **Service ID** (e.g., `service_portfolio`)
5. Click **"Create Service"**

## Step 3: Create Email Templates

You'll need to create **TWO templates**:
1. **Template 1**: Email to YOU (notification)
2. **Template 2**: Auto-reply to SENDER (confirmation)

### Template 1: Notification Email (To You)

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template structure:

### Template Settings:
- **Template Name**: Portfolio Contact Form
- **Template ID**: `template_contact` (remember this!)

### Email Template Content:

**Subject Line:**
```
New Portfolio Contact: {{from_name}}
```

**Email Body:**
```
Hello Ramkumar,

You have received a new message from your portfolio website!

────────────────────────────────────────

📧 CONTACT DETAILS:

Name: {{from_name}}
Email: {{from_email}}

────────────────────────────────────────

💬 MESSAGE:

{{message}}

────────────────────────────────────────

You can reply directly to this email to respond to {{from_name}}.

---
This message was sent from your portfolio contact form at ramkumar-26.github.io
```

**HTML Version (Copy & Paste This into EmailJS):**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 16px; font-weight: bold; color: #667eea; margin-bottom: 10px; }
        .divider { border-top: 2px solid #e0e0e0; margin: 20px 0; }
        .info-row { margin: 8px 0; }
        .label { font-weight: bold; color: #555; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; border-radius: 5px; margin-top: 10px; }
        .footer { background: #333; color: #999; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 10px 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 style="margin: 0;">🎯 New Portfolio Contact</h2>
        </div>
        
        <div class="content">
            <p>Hello Ramkumar,</p>
            <p>You have received a new message from your portfolio website!</p>
            
            <div class="divider"></div>
            
            <div class="section">
                <div class="section-title">📧 CONTACT DETAILS</div>
                <div class="info-row">
                    <span class="label">Name:</span> {{from_name}}
                </div>
                <div class="info-row">
                    <span class="label">Email:</span> <a href="mailto:{{from_email}}">{{from_email}}</a>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="section">
                <div class="section-title">💬 MESSAGE</div>
                <div class="message-box">
                    {{message}}
                </div>
            </div>
            
            <div class="divider"></div>
            
            <p style="font-size: 14px; color: #666;">
                💡 <strong>Tip:</strong> Click "Reply" to respond directly to {{from_name}}.
            </p>
        </div>
        
        <div class="footer">
            This message was sent from your portfolio contact form at <strong>ramkumar-26.github.io</strong>
        </div>
    </div>
</body>
</html>
```

**How to Use:**
1. In EmailJS template editor, switch to **"HTML" mode** (toggle at top)
2. Copy the entire HTML code above
3. Paste it into the template body
4. Set **"To Email"** to: `ramkumar.ds26@gmail.com`
5. Set **"Reply-To"** to: `{{from_email}}`
6. Click **"Save"**

---

### Template 2: Auto-Reply Email (To Sender)

1. Click **"Create New Template"** again
2. Use this template structure:

### Template Settings:
- **Template Name**: Portfolio Contact Auto-Reply
- **Template ID**: `template_autoreply` (remember this!)

### Email Template Content:

**Subject Line:**
```
Thanks for reaching out! - Ramkumar D
```

**HTML Email Body (Copy & Paste):**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
        .highlight { background: #fff; padding: 15px; border-left: 4px solid #667eea; border-radius: 5px; margin: 20px 0; }
        .footer { background: #333; color: #999; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 10px 10px; }
        .social-links { margin: 15px 0; }
        .social-links a { color: #667eea; text-decoration: none; margin: 0 10px; }
        .btn { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 5px; margin: 10px 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 28px;">👋 Thank You!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">I've received your message</p>
        </div>
        
        <div class="content">
            <p>Hi {{from_name}},</p>
            
            <p>Thank you for reaching out through my portfolio! I appreciate you taking the time to connect.</p>
            
            <div class="highlight">
                <strong>✅ Your message has been received successfully!</strong>
                <p style="margin: 10px 0 0 0; font-size: 14px; color: #666;">I typically respond within 24-48 hours during business days.</p>
            </div>
            
            <p>In the meantime, feel free to:</p>
            <ul>
                <li>Check out my <a href="https://github.com/ramkumar-26" style="color: #667eea;">GitHub profile</a> for my latest projects</li>
                <li>Connect with me on <a href="https://www.linkedin.com/in/connect-ramkumar/" style="color: #667eea;">LinkedIn</a></li>
                <li>View my <a href="https://ramkumar-26.github.io/Files/RAMKUMAR_D_BACKEND_ENGINEER.pdf" style="color: #667eea;">resume</a></li>
            </ul>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="https://www.linkedin.com/in/connect-ramkumar/" class="btn">Connect on LinkedIn</a>
                <a href="https://github.com/ramkumar-26" class="btn">View GitHub</a>
            </div>
            
            <p style="margin-top: 30px;">Looking forward to connecting with you!</p>
            
            <p style="margin-top: 20px;">
                Best regards,<br>
                <strong>Ramkumar Dhayalan</strong><br>
                <span style="color: #667eea;">Senior Software Engineer</span><br>
                <a href="mailto:ramkumar.ds26@gmail.com" style="color: #667eea;">ramkumar.ds26@gmail.com</a>
            </p>
        </div>
        
        <div class="footer">
            <p style="margin: 0;">This is an automated response from <strong>ramkumar-26.github.io</strong></p>
            <p style="margin: 10px 0 0 0;">Please do not reply to this email. I'll respond to your message directly.</p>
        </div>
    </div>
</body>
</html>
```

**How to Use:**
1. Switch to **"HTML" mode** in the template editor
2. Copy the entire HTML code above
3. Paste it into the template body
4. Set **"To Email"** to: `{{from_email}}` (this sends to the person who contacted you)
5. Set **"Reply-To"** to: `ramkumar.ds26@gmail.com` (your email)
6. Click **"Save"**

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **"Public Key"** (looks like: `xyzABC123_defGHI456`)
3. Copy this key

## Step 5: Update Your Code

Open `/home/ramkumar/Desktop/ramkumar-26.github.io/JS/main.js` and replace the placeholders:

### Replace Line 33:
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```
**Change to:**
```javascript
emailjs.init("your_actual_public_key_here");
```

### Replace Lines 61-90 (entire emailjs.send section):
```javascript
// OLD CODE - Replace this entire section
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
    .then(function(response) {
        // Success
        console.log('SUCCESS!', response.status, response.text);
        formMessage.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
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
    }, function(error) {
        // Error
        console.log('FAILED...', error);
        formMessage.textContent = '❌ Failed to send message. Please try again or email me directly at ramkumar.ds26@gmail.com';
        formMessage.style.color = '#f44336';
        
        // Reset button state
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;
    });
```

**NEW CODE - Replace with this:**
```javascript
// Send notification email to you
emailjs.send('YOUR_SERVICE_ID', 'template_contact', formData)
    .then(function(response) {
        console.log('Notification sent!', response.status);
        
        // Send auto-reply email to sender
        return emailjs.send('YOUR_SERVICE_ID', 'template_autoreply', formData);
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
```

### Final Values to Replace:
```javascript
// Line 33
emailjs.init("xyzABC123_defGHI456"); // Your actual public key

// Lines 61 and 65 (appears twice)
emailjs.send('service_portfolio', 'template_contact', formData) // First email (to you)
emailjs.send('service_portfolio', 'template_autoreply', formData) // Second email (auto-reply)
```

## Step 6: Test Your Form

1. Open your portfolio website
2. Go to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email (`ramkumar.ds26@gmail.com`) for the message!

## Troubleshooting

### Form not sending?
- Check browser console (F12) for errors
- Verify all three values are correct:
  - Public Key
  - Service ID
  - Template ID
- Make sure you're connected to the internet

### Not receiving emails?
- Check your spam folder
- Verify the "To Email" in the template is correct
- Check EmailJS dashboard for delivery status

### Rate Limits
- Free plan: 200 emails/month
- If you need more, upgrade to a paid plan ($7/month for 1000 emails)

## Security Notes

✅ **Safe to commit**: Your Public Key is safe to include in your code (it's meant to be public)
✅ **No backend needed**: EmailJS handles everything securely
✅ **Spam protection**: EmailJS has built-in rate limiting

## Features Included

✅ Form validation (all fields required)
✅ Loading state ("Sending..." indicator)
✅ Success message (green checkmark)
✅ Error handling (with fallback email)
✅ Auto-clear form after successful submission
✅ Disabled button during submission (prevents double-submit)

## Alternative: If You Don't Want to Use EmailJS

If you prefer not to set up EmailJS, you can:

1. **Remove the contact form** and just keep social links
2. **Use Formspree** (similar service): https://formspree.io/
3. **Use Netlify Forms** (if hosting on Netlify)
4. **Build a backend API** with Node.js/Express

---

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

Once you complete these steps, your contact form will be fully functional! 🎉

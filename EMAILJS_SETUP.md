# EmailJS Setup Guide

Follow these steps to receive contact form submissions directly to your email:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the prompts to connect your email account
5. **Copy the Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Message from {{from_name}}

**Content:**

```
You have a new message from your portfolio contact form!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent via your portfolio contact form.
```

4. Click "Save"
5. **Copy the Template ID** (e.g., `template_xyz456`)

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find "Public Key" section
3. **Copy your Public Key** (e.g., `abc123XYZ456`)

## Step 5: Update .env File

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual keys:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_abc123
VITE_APP_EMAILJS_TEMPLATE_ID=template_xyz456
VITE_APP_EMAILJS_PUBLIC_KEY=abc123XYZ456
```

3. Save the file

## Step 6: Restart Development Server

1. Stop your dev server (Ctrl+C in terminal)
2. Run `npm run dev` again
3. Test the contact form!

## Testing

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check your email inbox for the message
4. If you get a success message but no email, check your spam folder

## Important Notes

- ✅ Free plan includes 200 emails/month
- ✅ Emails will come to: mavra.iqbal@muccadam.com
- ✅ Form includes validation for name, email, and message
- ✅ Invalid emails will be rejected
- ⚠️ Never commit the `.env` file to GitHub (it's in .gitignore)

## Troubleshooting

If the form doesn't work:

1. Check that all three IDs are correctly entered in `.env`
2. Make sure there are no extra spaces in the `.env` file
3. Restart the dev server after updating `.env`
4. Check browser console for error messages
5. Verify your EmailJS service is active

## Alternative: Use FormSpree

If you prefer not to use EmailJS, you can use FormSpree:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Replace the EmailJS code with FormSpree's endpoint

Need help? Contact me at mavra.iqbal@muccadam.com

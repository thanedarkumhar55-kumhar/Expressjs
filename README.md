# Node.js Backend Developer Portfolio

A professional, responsive five-page developer portfolio
built using:

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

No frontend framework is required.

## 1. Installation

1. Download or clone the project.
2. Open the portfolio folder in VS Code.
3. Install the Live Server extension.
4. Open index.html.
5. Right-click and select Open with Live Server.

## 2. Customize Developer Information

Open:

js/global.js

Find the PROFILE object.

Update:

- Developer name
- Introduction
- Email address
- Location
- GitHub profile
- LinkedIn profile
- Instagram profile
- Statistics

## 3. Add Profile Image

Place your image inside:

assets/images/profile.jpg

Update the image path in index.html and about.html.

## 4. Add Resume

Place your resume here:

assets/resume/resume.pdf

The homepage contains a resume download link.

## 5. Add Projects

Open:

projects.html

For each project, update:

- Project name
- Project description
- Technologies
- GitHub repository URL
- Live demo URL
- Project category

Available categories:

- backend
- fullstack
- frontend

## 6. Add Gallery Images

Place images inside:

assets/images/gallery/

Place certificates inside:

assets/images/certificates/

Update the image paths in gallery.html.

Use descriptive alt attributes.

## 7. Contact Form Backend

The contact form currently provides frontend validation only.

It does not send emails.

To send real emails:

1. Create a Node.js application.
2. Install Express.js.
3. Create a POST /api/contact endpoint.
4. Validate submitted information on the server.
5. Connect an email service.
6. Use fetch() in contact.js.
7. Store API credentials in environment variables.

Never expose email service credentials in frontend JavaScript.

## 8. Theme Management

The website supports:

- Dark mode
- Light mode
- localStorage persistence

Theme preference is stored using:

portfolio-theme

## 9. Responsive Design

The website supports:

- Mobile phones
- Tablets
- Laptops
- Desktop screens

## 10. Before Publishing

- Replace all placeholder information.
- Add your actual profile picture.
- Add your resume.
- Add real project screenshots.
- Update GitHub links.
- Update social media links.
- Test contact form validation.
- Test theme switching.
- Test navigation on mobile.
- Check browser console errors.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README Files</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        h1 {
            text-align: center;
            margin-bottom: 20px;
        }
        h2 {
            border-bottom: 2px solid #2c3e50;
            padding-bottom: 5px;
        }
        a {
            color: #3498db;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        code {
            background-color: #e8e8e8;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #e8e8e8;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        ul, ol {
            margin: 20px 0;
            padding-left: 40px;
        }
        li {
            margin-bottom: 10px;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>README Files</h1>

        <!-- Church Attendance Application -->
        <section>
            <h2>Church Attendance Application</h2>
            <p>The Church Attendance Application is a web-based platform designed to help churches manage their weekly activities, specifically focusing on tracking and managing attendance. This application features full CRUD (Create, Read, Update, Delete) operations and user authentication to ensure secure access and data management.</p>

            <h3>Features</h3>
            <ul>
                <li><strong>Attendance Form:</strong> Submit and manage weekly attendance records stored in MongoDB.</li>
                <li><strong>CRUD Operations:</strong> Create, read, update, and delete attendance records directly from the application.</li>
                <li><strong>Authentication:</strong> Secure user authentication using NextAuth to manage access to the attendance records.</li>
            </ul>

            <h3>Technologies Used</h3>
            <ul>
                <li>Next.js</li>
                <li>MongoDB Atlas</li>
                <li>NextAuth</li>
                <li>React Icons</li>
                <li>Tailwind CSS</li>
            </ul>
        </section>

        <!-- Portfolio Website -->
        <section>
            <h2>Portfolio Website</h2>
            <p>The Portfolio Website is a React-based website designed to showcase your experience, skills, and projects. The site is divided into several sections, each highlighting a different aspect of your professional background.</p>

            <h3>Features</h3>
            <ul>
                <li><strong>Introduction Section:</strong> Overview of your experience with links to social media profiles, a resume download button, and a contact section anchor.</li>
                <li><strong>Popup Modal:</strong> Displays a modal linking to your graphics/UI design portfolio website, with options to cancel or open in a new tab.</li>
                <li><strong>Portfolio Section:</strong> Showcases six key projects with buttons linking to GitHub repositories and live demos.</li>
                <li><strong>Testimonials Section:</strong> A carousel featuring testimonials from past clients or organizations using Swiper.js.</li>
                <li><strong>Contact Section:</strong> A form integrated with Mailjet API to receive emails directly to your Gmail account.</li>
            </ul>

            <h3>Technologies Used</h3>
            <ul>
                <li>React.js</li>
                <li>Swiper.js</li>
                <li>Mailjet API</li>
                <li>React Icons</li>
                <li>Tailwind CSS</li>
            </ul>
        </section>

        <!-- Responsive Website Design for Solid Mineral Processing Organisation -->
        <section>
            <h2>Responsive Website Design for Solid Mineral Processing Organisation</h2>
            <p>This project is a responsive website developed for a solid mineral processing organization. It serves both as an informational website and as an admin panel for managing various aspects of the organization's operations.</p>

            <h3>Features</h3>
            <ul>
                <li><strong>Public Route:</strong> Accessible to the public, this section provides information about the organization and includes forms for orders and contact, which send data to the database and are displayed in the admin panel.</li>
                <li><strong>Admin Route:</strong> Accessible only to authenticated users, with role-based access control to manage orders, contacts, and various reports.</li>
                <li><strong>Admin Level Access:</strong> Two levels of admin access with different permissions. Level one admins manage orders, contacts, and reports, while level two admins have access to financial calculations like customer payments, salaries, and material balances.</li>
            </ul>

            <h3>Technologies Used</h3>
            <ul>
                <li>Next.js</li>
                <li>MongoDB</li>
                <li>NextAuth</li>
            </ul>
        </section>
    </div>
</body>
</html>

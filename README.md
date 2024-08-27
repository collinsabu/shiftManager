# ⏰ Shift Management Application

Welcome to the Shift Management Application! This project is designed to help users effectively manage their work shifts, track earnings, and stay organized with a built-in to-do list. The application offers a simple and intuitive interface for users to clock in and out, manage shifts on a calendar, and view key metrics such as total hours worked and net earnings.

## 📋 Table of Contents
- [Features](#features)
  - [Homepage](#homepage)
  - [Shift Booking Manager](#shift-booking-manager)
  - [To-Do Application](#to-do-application)
  - [Navigation Links](#navigation-links)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Features

### Homepage
The homepage serves as the central hub where users can view and interact with the most important aspects of their shifts:

- **Monthly Target:** Users can set a monthly earnings target during registration. The homepage compares this target with the net earnings accumulated based on hours worked and the hourly rate provided during clock-in.

- **Clock-In/Clock-Out Buttons:** Users can clock in and out of their shifts using dedicated buttons. Upon clicking, a form appears allowing users to enter details such as:
  - Organization name
  - Hourly rate
  - Shift type (Normal, Overtime)
  - Submit button to save the data in the database

- **Shift List:** Displays a list of all shifts worked, including details such as organization, hours worked, and earnings for the day. Each entry also includes a delete button to remove incorrect or unnecessary data.

- **Total Hours:** Shows the cumulative total hours worked for the current month. This resets at the start of a new month.

- **Earnings Calculation:**
  - **Earnings + Tax:** Displays total earnings including tax for the current month.
  - **Earnings - Tax/NI:** Displays net earnings after deducting tax and National Insurance (NI) contributions. Calculations are updated in real-time as users clock in and out.
  
- **PDF Export:** Users can download and share their clock-in list as a PDF, useful for resolving any disputes.

### Shift Booking Manager
The Shift Booking Manager helps users organize their shifts visually using a calendar interface:

- **Calendar View:** Displays monthly dates, with booked shifts highlighted in red and the current day in green.

- **Shift Booking:** Users can book a shift by selecting a day on the calendar and entering shift details. The selected date turns red, indicating a booked shift.

- **Email Notifications:** Users receive an email notification four hours before the start of any booked shift.

- **Shift List:** A list of all booked shifts is displayed below the calendar. Users can delete shifts if canceled. At the end of each month, all shifts are automatically deleted to prepare the calendar for new bookings.

### To-Do Application
The built-in To-Do application helps users manage tasks:

- **Task Management:** Users can add tasks with a name and description. Tasks can be deleted once completed.

- **Task List:** Displays all submitted tasks in a list format, giving users an overview of their pending activities.

### Navigation Links
The application includes a navigation bar with the following links:

- **Homepage:** Navigate back to the main dashboard.
- **Shift Booking Manager:** Access the shift booking calendar.
- **To-Do Application:** Manage your tasks.
- **Sign Out:** Log out of the application.
- **Video Tutorials:** Access video tutorials on how to use the application effectively.

## 🛠️ Technologies Used
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) - For building the React-based front-end.
- ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white) - For handling authentication and session management.
- ![MongoDB Atlas](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) - As the database to store user data, shifts, and tasks.

## 🚀 Getting Started

To get started with the Shift Management Application, follow these steps:

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/shift-management-app.git
   cd shift-management-app
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env.local file in the root directory and add the necessary environment variables for MongoDB, NextAuth, etc.

Run the development server:

bash
Copy code
npm run dev
The app will be available at http://localhost:3000.

Usage
Register/Login: Users must register and log in to access the application.
Set Monthly Target: Upon first login, set your monthly earnings target.
Clock In/Out: Use the buttons on the homepage to track your work hours.
Manage Shifts: Use the Shift Booking Manager to organize your shifts.
Manage Tasks: Use the To-Do app to track your tasks.
🤝 Contributing
Contributions are welcome! If you have suggestions or improvements, please feel free to submit a Pull Request or open an issue to improve this project.

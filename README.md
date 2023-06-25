CodeRight - Coding Question Solver Website
CodeRight is a web application that allows users to solve coding questions in JavaScript. It provides features such as user authentication (login, signup, forgot password), a question dashboard displaying the number of available questions, and a coding workspace where users can write their solutions.

This project is built using Next.js, TypeScript, Tailwind CSS, and Firebase. It also utilizes various React libraries including React Icons, React Toast, React JavaScript Lang, and React VSCode.

Table of Contents
Features
Prerequisites
Installation
Usage
Contributing
License

Features
User authentication:

Signup: Users can create a new account with their email and password.
Login: Users can log in to their existing account.
Forgot Password: Users can reset their password if they forget it.
Question Dashboard:

Users can view the number of available questions.
Clicking on a question will redirect users to the coding workspace.
Coding Workspace:

Users can write JavaScript code to solve the coding questions.
Users can test their code and view the results.
The workspace provides a code editor with syntax highlighting and code formatting.
Various VSCode-like features are integrated, such as IntelliSense and auto-completion.
Prerequisites
Before running the application, ensure you have the following installed:

Node.js (v12 or higher)
npm (v6 or higher)
Firebase project with Firestore and Authentication enabled (create one at https://console.firebase.google.com)

Installation
Clone the repository:

bash
git clone https://github.com/your-username/CodeSolve.git
Navigate to the project directory:

bash
cd CodeSolve
Install the dependencies:

bash
npm install
Create a .env.local file at the root of the project and add the following environment variables:

makefile
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
Replace the placeholders with your Firebase project details.

Usage
Start the development server:

bash
npm run dev

Open your browser and navigate to http://localhost:3000 to access the application.

Contributing
Contributions are welcome! If you have any suggestions or want to report a bug, please create an issue in the GitHub repository.

Fork the repository.
Create your feature branch: git checkout -b feature/your-feature.
Commit your changes: git commit -am 'Add your feature'.
Push to the branch: git push origin feature/your-feature.
Submit a pull request.
License
This project is licensed under the MIT License.

Feel free to customize the README file based on your specific project requirements and structure. Don't forget to include sections like "Deployment" if applicable, or any additional instructions for users.

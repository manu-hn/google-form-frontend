# Frontend Setup Instructions

## Getting Started

1. **Clone the Repository**

   - `git clone https://github.com/manu-hn/google-form-frontend.git`
   - cd google-form-frontend

2. **Open VS Code**

   - Open the cloned repository in Visual Studio Code.

3. **Install Dependencies**

   - Run the following command to install all the necessary dependencies for the frontend:
   - `npm install`

4. **Set Up Environment Variables**

   - Create a `.env.local` file in the `google-form-frontend` directory.
   - Set up the following environment variables:
     - `VITE_FIREBASE_API_KEY`: This is the Firebase API key provided by Google when you create the project in Firebase.
     - `VITE_BASE_URL`: This can be either the backend project's localhost URL or any deployed URL.

   Example `.env.local`:

   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_BASE_URL=http://localhost:your-backend-port
   ```

5. **Firebase Project Setup Instructions**

   - Search for Firebase Console on your browser.
   - Click on "Create Project", enter the project name, hit continue, and then click "Create Project". Once created, press continue.
   - Select "Web Project", enter the project name, and click "Register".
   - Run `npm install firebase` to install Firebase. You may be asked for authentication if you have never used Firebase before.
   - Copy the provided JavaScript code and create a file called `firebase.js` in the `src` directory, then paste the code there.
   - Click "Continue to Console".
   - Go to the "Authentication" section and click "Get Started".
   - Select "Google Provider" along with "Email/Password Provider".
   - In the console of the project, run `firebase init` to initialize Firebase with your project.
   - Your Firebase Cloud setup is now complete.

6. **Start the Frontend Project**
   - After completing the above steps, run the following command to start the frontend project:
   ```bash
   npm run dev
   ```

## Tech Stack and Libraries Used

1. **React**

   - A JavaScript library for building user interfaces.

2. **Redux**

   - A predictable state container for JavaScript apps.

3. **react-router-dom**

   - A collection of navigational components for React applications.

4. **Tailwind CSS**

   - A utility-first CSS framework for rapid UI development.

5. **notistack**

   - A Snackbar library for notifications in React.

6. **Firebase**

   - A platform for building web and mobile applications.

7. **formik**

   - A library for building forms in React.

8. **Axios**

   - A promise-based HTTP client for making API requests.

9. **Vite**

   - A build tool that provides a faster and leaner development experience for modern web projects.

10. **IndexedDB**
    - A browser-based database web API for storing data.

By following these instructions, you will have your frontend application set up and running smoothly. If you have any questions or encounter any issues, feel free to reach out for support.

### Additional Features:

I have implemented Google Sign-In to replicate a Google Form-like feature. I also made use of Firebase Storage to store images, retrieving their public URL links and storing them in MongoDB.

## Note

- The frontend application is deployed on Vercel. The frontend interacts with the backend server deployed on Render.com. Due to the free version of Render, the submit process may take up to 3 minutes to respond. Please be patient while using the deployed application.
- Please make sure your local machine has `Node.js` and `npm` installed.

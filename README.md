# Crown Shopping Web Application

This is a web application built using React for an online shopping platform called Crown Shopping. It allows users to browse and purchase various products.

## Features

- Homepage: Displays featured products and categories.
- Shop: Allows users to browse and search for products.
- Sign In: Provides authentication for users to sign in and access their account.

## Installation

1. Clone the repository: `git clone [<repository-url>](https://github.com/shoaib-fateh/crown-shop-webapplicatio)`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- Firebase: A backend-as-a-service platform for building web and mobile applications.

## Firebase Configuration

To use Firebase in this application, you need to set up a Firebase project and configure it with your own Firebase credentials. Follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Enable the Authentication service and set up the sign-in methods you want to use (e.g., email/password, Google, etc.).
3. Enable the Firestore database service and create a new Firestore database.
4. Copy the Firebase configuration object from the Firebase project settings and replace the placeholder values in the `firebase.utils.js` file located in the `src/firebase` directory with your own credentials.

## Usage

1. Visit the homepage to browse featured products.
2. Navigate to the Shop page to view all available products.
3. Sign in to access your account and make purchases.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

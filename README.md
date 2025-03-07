# Shopping Cart App

A simple shopping cart application built with React, TypeScript, and Vite. The app allows users to browse items, add new items, manage their cart, and proceed to checkout.

## Features

- **Homepage**: Provides navigation links to different sections.
- **Item List Page**: Displays available items with search and sorting functionality.
- **Add Item Page**: Allows users to add new items using a form with validation (React Hook Form).
- **Checkout Page**: Shows cart items, allows removal, and confirms checkout via a modal.
- **Notifications**: Uses React Toastify for user feedback.
- **State Management**: Utilizes React hooks and local storage for cart persistence.
- **Optimized Build**: Developed with Vite for fast performance.

## Technologies Used

- **React** with TypeScript
- **Vite** for development and bundling
- **React Bootstrap** for styling and components
- **React Hook Form** for form validation
- **React Toastify** for notifications

## Project Structure

```
root
│── src
│   ├── components/        # Reusable components
│   ├── pages/             # Application pages
│   ├── App.tsx            # Application entry point with routes
│   ├── main.tsx           # Main file rendering React app
│── public/                # Static assets
│── index.html             # HTML template
│── package.json           # Dependencies and scripts
│── tsconfig.json          # TypeScript configuration
│── vite.config.ts         # Vite configuration
```

## Installation and Setup

1. Clone the repository:

   git clone https://github.com/ishaq001/RandoStore.git

2. Navigate to the project folder:

   cd RandoStore

3. Install dependencies:

   npm install

4. Start the development server:

   npm start

5. Open the app in your browser at:

   http://localhost:5173

## Usage

- Visit the homepage and navigate to different pages.
- Browse and sort items in the **Items List**.
- Add new items using the **Add Item** page.
- Add items to the cart and manage them in the **Checkout** page.
- Complete the checkout process using the modal confirmation.

## Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

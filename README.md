# ShopGuard

ShopGuard is a shopping dashboard application that provides a seamless user experience for managing shopping activities. This project includes a login and registration system with Firebase authentication and a user-friendly dashboard designed in Angular. The project is a demonstration of modern web development practices, focusing on authentication and dashboard UI.

## Features


- **Authentication**: User authentication (login and registration) using Firebase Authentication.
- **Dashboard**: Responsive dashboard interface for managing shopping activities.
- **Angular Framework**: Built with Angular for scalable and maintainable front-end development.
- **Design Conversion**: Conversion of Adobe XD design to functional Angular components.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine
- Angular CLI installed globally (`npm install -g @angular/cli`)
- Firebase project set up with authentication enabled

### Installation

1. **Clone the repository**:

   ```bash
   https://github.com/nyein2001-dev/shop-guard.git
   cd shop-guard
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```
   
2. **Firebase configuration**:

   Before running the application, you need to add your Firebase configuration to `src/environments/environment.ts`. Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, `YOUR_PROJECT_ID`, 
   `YOUR_STORAGE_BUCKET`, `YOUR_MESSAGING_SENDER_ID`, and `YOUR_APP_ID` with your Firebase project credentials.

      ```typescript
      export const environment = {
         production: false,
         firebase: {
         apiKey: "YOUR_API_KEY",
         authDomain: "YOUR_AUTH_DOMAIN",
         projectId: "YOUR_PROJECT_ID",
         storageBucket: "YOUR_STORAGE_BUCKET",
         messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
         appId: "YOUR_APP_ID"
       }
   };
   ```
4. **Start the development server**:

   ```bash
      ng serve
   ```
## Usage

- **Login/Signup**: Use the authentication forms to register a new user or log in with an existing account.
- **Dashboard**: Once logged in, you can access the shopping dashboard to manage your shopping activities.

## Contributing

Feel free to submit issues, pull requests, or feature requests. We welcome all contributions to improve ShopGuard.

---

Happy Weather Tracking with SkySnap!

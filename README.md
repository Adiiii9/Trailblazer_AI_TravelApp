# Trailblazer_AI_TravelApp

## Description
Trailblazer_AI_TravelApp is a mobile application that provides information about UNESCO heritage monuments, allows users to engage in discussions through threads, and enables users to discover information about monuments by uploading pictures or taking pictures through the app's camera feature. The app utilizes machine learning (ML) models built with TensorFlow for image classification, specifically Convolutional Neural Networks (CNNs), to predict monuments based on uploaded or captured images.

## Features
- Information about UNESCO heritage monuments
- Threads for user discussions
- Monument discovery through image upload or camera capture

## Technologies Used
- React Native
- Express
- MongoDB
- Flask
- Python
- TensorFlow (for ML model)
- bcrypt (for encryption)
  
## Dataset
The dataset used for monument image classification consists of images of various monuments. The images are classified using a CNN model trained with TensorFlow and saved as `.h5` files.

## App Functionality
### UNESCO Heritage Monument Information
- Explore detailed information about UNESCO heritage monuments.
  
### Threads Page
- Engage in discussions by creating threads and expressing thoughts.
  
### Discover Page
- Upload a monument picture from the gallery or take a monument picture using the app's camera.
- The app predicts the monument and provides information including image, description, booking options, recommended restaurants, and nearby attractions.

## Deployment
The backend components of the app (Express server, Flask server for ML model) are deployed on Heroku.

## Setup Instructions
1. Clone the repository.
2. Install dependencies for the frontend and backend.
3. Set up MongoDB database.
4. Run the backend server.
5. Run the frontend application.

## Usage
- Explore monument information, engage in discussions, and discover new monuments through images.


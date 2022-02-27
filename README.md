# InterviewProject

## Folder Structure

You will find all coded files inside src

1. assests folder for images
2. compoents folder for various screen parts
3. models folder contains all your logic for redux and saga
4. navigation folder container your bottom navigation and spend limit screen navigation
5. screen folder contain all screen of your app
6. utils have file called functions.js which contain some function which are using in various screens

## NPM Packges used

1. all required packeges for react-redux and saga
2. react-native-fast-image for bottom tab images reason I am using tintColor for active and deactive color and in react-native normal Image tag it does not work in ios
3. react-native-currency-input for spend limit input area

## API

Mock api is user for getting user details which is having some dummy data

### Sample Response

"name": "Mark Henry",
"card_number": "5647 3411 2413 2020",
"cvv": "456",
"expiry_date": "Thru: 12/20",
"year": "2020",
"id": "1",
"limit": 3000,
"spending_limit": 20000,
"spent": 400

## Note

1. Font was paid so have not use any font is application
2. Using api only for getting user information
3. api update changes I am only doing on redux state means if api will refresh you will get the same data

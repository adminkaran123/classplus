# InterviewProject

# Getting Started

## Prerequisites

You'll need [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/en/) and Watchman installed (`brew install watchman`).

> The Node version should match [the `engine` version here](https://github.com/artsy/eigen/blob/main/package.json).

### Setting up iOS

Download Xcode version 13. You can find all available versions of Xcode at [Apple's Developer Portal 🔐](http://developer.apple.com/download/more/).

Ask your mentor to add you on the [firebase.console](https://console.firebase.google.com/project/eigen-a7d3b/settings/iam) to be able to release.

<details><summary>NOTE: After installing Xcode</summary>

Check that Command Line Tools version is added in the Locations tab. Xcode>Preferences>Locations:
<img width="375" alt="" src="https://user-images.githubusercontent.com/29984068/123970729-6009cf00-d987-11eb-933a-1603ba4d6ae8.png">

</details>

### Setting up Android

1. Android development environment:

Follow the official docs [here](https://reactnative.dev/docs/environment-setup). Select "React Native CLI Quickstart" tab

2. Create a virtual device:

[Create a virtual device](https://developer.android.com/studio/run/managing-avds) on which to run the Android app.

### Clone

```
git clone https://gitlab.com/karanjalendere/interviewproject
cd interviewproject
```

### Install dependencies

<details><summary>Work at Artsy?</summary>

1. run npm insatll interviewproject foleder

2. run pod install in ios folder

````sh

## Run the app

Start the react-native bundler:

```sh
yarn start
````

### Run the iOS app

npx react-native run-ios

### Run the Android app

```sh
npx react-native run-android
```

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

Mock api is using for getting user details which is having some dummy data

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

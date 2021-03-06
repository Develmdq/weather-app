# Project Title

**_Paula's Weather App_**

### Project Description

The goal of this project is to provide a solution for Paula in her work of selling ice-creams near to the coasts, so she can consult the weather in these cities in advance, therefore she can work in a productive way and increment her sales

![Screenshot_20211228-223120_WeatherApp](https://user-images.githubusercontent.com/62628508/147620938-e4dd18ed-ca7d-46d1-a015-5f3b970419c0.jpg)
![Screenshot_20211228-231637_WeatherApp](https://user-images.githubusercontent.com/62628508/147621202-6805853f-3e7c-4ef5-a16d-a204838f9ebf.jpg)
![Screenshot_20211125-211556_Expo Go](https://user-images.githubusercontent.com/62628508/147620955-900608f8-5ae8-4904-b4f5-cfa327de6043.jpg)
![Screenshot_20211228-223234_WeatherApp](https://user-images.githubusercontent.com/62628508/147620962-4d19513a-c1c8-446d-8d5a-d4fef2841d2a.jpg)

### Figma Design

-   [Figma Link](https://www.figma.com/file/T4R1r8p5vWIYzPkzoedua5/PaulasApp?node-id=140%3A16)
-   [Figma Prototype](https://www.figma.com/proto/T4R1r8p5vWIYzPkzoedua5/PaulasApp?node-id=127%3A42&starting-point-node-id=298%3A126&scaling=scale-down&show-proto-sidebar=1)
-   [User Persona](https://www.figma.com/file/3mK6qx7f2uoKsTt1MtxohQ/Persona-Canvas?node-id=0%3A1)

### Features

-   Light/dark mode toggle
-   Live Openweathermap API call
-   Data Persistence through expo-sqlite package
-   Cross platform(iOS & Android)

### Tech Stack

**Front:** React Native

**Back:** SQLITE through expo-sqlite package

### Getting Started

### Requirements

-   [Node.js](https://nodejs.org/en/)
-   [Yarn](https://classic.yarnpkg.com/en/)
-   [React native](https://reactnative.dev/docs/getting-started)
-   [Expo CLI](https://expo.io/tools)
-   [Xcode](https://developer.apple.com/xcode/) for iOS development

### Clone

```
git clone https://github.com/cjgv1809/RN-Expo-project.git
```

### Install dependencies

```
cd weather-app
yarn
```

### Setting up API Key

-   To run the project, you need to provide your own OpenWeatherMap API Key.
-   Go to https://openweathermap.org/api, sign up and get an API key.
-   Create a `.env` file in the root directory.

```json
    "API_KEY_1": "YOUR_API_KEY_HERE"
    "API_KEY_2": "YOUR_API_KEY_HERE"
```

### Run the app with Expo

```
yarn start
```

-   You'l
-   You'll then be in the expo development environment.
-   You can either :
    -   Open the iOS Simulator.
    -   Open it in the Expo app on your phone by scanning the QR code.

### Dependencies

    "@expo-google-fonts/roboto-slab": "^0.2.0",
    "@expo/vector-icons": "^12.0.0",
    "@react-native-community/masked-view": "0.1.10",
    "@react-navigation/bottom-tabs": "^5.11.15",
    "@react-navigation/native": "^5.7.6",
    "@react-navigation/stack": "^5.9.3",
    "axios": "^0.24.0",
    "expo": "^42.0.0",
    "expo-app-loading": "1.1.2",
    "expo-asset": "~8.3.3",
    "expo-file-system": "~11.1.3",
    "expo-font": "~9.2.1",
    "expo-sqlite": "~9.2.1",
    "expo-status-bar": "~1.0.4",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-native": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
    "react-native-alert-notification": "^0.1.11",
    "react-native-animatable": "^1.3.3",
    "react-native-button": "^3.0.1",
    "react-native-dotenv": "^3.2.0",
    "react-native-elements": "^3.4.2",
    "react-native-gesture-handler": "~1.10.2",
    "react-native-keyboard-aware-scroll-view": "^0.9.5",
    "react-native-maps": "^0.29.4",
    "react-native-reanimated": "~2.2.0",
    "react-native-safe-area-context": "3.2.0",
    "react-native-screens": "~3.4.0",
    "react-native-vector-icons": "^9.0.0",
    "react-native-web": "~0.13.12"

### Authors

-   **Eduardo Marcet** - (https://github.com/develmdq)
-   **Carlos Gomes** - (https://github.com/cjgv1809)

### Learn More

-   To learn Expo, check out the [Expo documentation](https://docs.expo.dev/)
-   To learn React Native, have a look at the [React Native documentation](https://reactnative.dev/).
-   To learn React, take a look at the [React documentation](https://es.reactjs.org/)

## Feedback

If you have any feedback, please reach out to us at cdcmdq@gmail.com

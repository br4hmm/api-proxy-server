# API Proxy Server

Server used for hiding API keys, rate limiting and caching.

This uses the [OpenWeather API](https://openweathermap.org/api) (Check out the weather app in the public folder) but you can easily change it to whatever public API you are using

## Usage

1- Clone/Download the repository

2- Install dependencies

```
$ npm i
```

3- Rename **.env.example** to **.env** and edit the values

In this weather app, the public API URL is **https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIkey}**

then **.env** values must be like:

- PORT=5000
- API_BASE_URL="https://api.openweathermap.org/data/2.5/weather"
- API_KEY_NAME="appid"
- API_KEY_VALUE="YOUR API KEY"

_Note: You can add on any other query params as needed when hitting the /api endpoint such as https://yourdomain/api?q=detroit without having to add your key in the client_

- Add new routes as you see fit
- Change rate limiting and caching to desired values

4- Run the server on `https://localhost:PORT`

```
$ npm run dev
```

_Enjoy 🤗_

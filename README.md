
# NASA Astronomy Picture of the Day (APOD) App

This app fetches the NASA Astronomy Picture of the Day (APOD) and stores it in a MongoDB database.

## Features

- Automatically fetches the NASA Astronomy Picture of the Day using the [NASA API](https://api.nasa.gov/).
- Stores the picture in a MongoDB database.
- Displays the picture on the frontend.

## Requirements

- Node.js
- MongoDB (Atlas or local instance)
- API Key from NASA (you can get it from [here](https://api.nasa.gov/))
- Cron job scheduler or setInterval() for automated fetching of the picture.

## Setup

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/apod-app.git
cd apod-app
```
### Install dependencies
```bash
npm install
```
### Set up environment variables

```bash
MONGO_URI=your-mongodb-uri
API_KEY=your-nasa-api-key
COLLECTION_NAME=apod-pictures
```


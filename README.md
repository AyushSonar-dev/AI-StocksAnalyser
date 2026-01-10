#AI Stocks Analyser

AI Stocks Analyser is a modern stock market dashboard that provides users with the latest stock data, key market metrics, and insights in a clean and interactive interface.
The platform is designed to centralize stock information, enable secure user access, and support future AI-driven analysis.

##Features

Live stock dashboard showing latest prices

Key market metrics such as open, close, volume, highs, and lows

Automated data ingestion to keep stock data up to date

Secure authentication with session and cookie management

Automated stock information emails

Scalable architecture for future AI-based features

Fast and responsive user interface

##Tech Stack
###Frontend

Next.js

###Backend / Database

MongoDB

Database ingestion functions for stock data updates

###Authentication and Security

Better-Auth

Secure cookie and session management

###Emails and Notifications

NodeMailer for sending stock summaries and informational emails

##Architecture Overview

Frontend built with Next.js for rendering the stock dashboard

MongoDB for storing stock data and user information

Ingestion layer responsible for fetching and updating stock market data

Authentication layer handling user sessions and access control

Email service for sending automated stock-related emails


##Setup and Installation

###Prerequisites

Node.js (v18 or higher recommended)

MongoDB instance

Proper environment variable configuration

###Installation Steps
git clone https://github.com/AyushSonar-dev/AI-StocksAnalyser.git
cd AI-StocksAnalyser
npm install
npm run dev

###Environment Variables

Create a .env file and configure the following:


NODE_ENV="development"
NEXT_PUBLIC_API_URL=http://localhost:3000


MONGO_URI=your_mongodb_connection_string


BETTER_AUTH_SECRET=your_better_auth_secret


GEMINI_API_KEY=your_gemini_api_key


NODEMAILER_EMAIL=your_email_address
NODEMAILER_PASSWORD=your_email_app_password


NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key


##Future Enhancements

AI-based stock trend prediction

Personalized portfolio tracking

Price alerts and notifications

Advanced data visualizations

Multi-market support

##Use Cases

Investors tracking stock market trends

Students learning financial analytics

Developers building fintech dashboards



###Author:

Ayush Sonar
GitHub: https://github.com/AyushSonar-dev

AI Stocks Analyser

AI Stocks Analyser is a modern stock market dashboard that provides users with the latest stock data, key market metrics, and insights in a clean and interactive interface.
The platform is designed to centralize stock information, enable secure user access, and support future AI-driven analysis.

1. Features

Live stock dashboard showing latest prices

Key market metrics such as open, close, volume, highs, and lows

Automated data ingestion to keep stock data up to date

Secure authentication with session and cookie management

Automated stock information emails

Scalable architecture for future AI-based features

Fast and responsive user interface

2. Tech Stack
2.1 Frontend

Next.js

2.2 Backend / Database

MongoDB

Database ingestion functions for stock data updates

2.3 Authentication and Security

Better-Auth

Secure cookie and session management

2.4 Emails and Notifications

NodeMailer for sending stock summaries and informational emails

3. Architecture Overview

Frontend built with Next.js for rendering the stock dashboard

MongoDB for storing stock data and user information

Ingestion layer responsible for fetching and updating stock market data

Authentication layer handling user sessions and access control

Email service for sending automated stock-related emails

4. Project Structure (High Level)
AI-StocksAnalyser/
│
├── frontend/        # Next.js frontend
├── db/              # MongoDB models and connections
├── ingest/          # Stock data ingestion functions
├── auth/            # Authentication and cookie handling
├── mail/            # NodeMailer email services
└── README.md

5. Setup and Installation
5.1 Prerequisites

Node.js (v18 or higher recommended)

MongoDB instance

Proper environment variable configuration

5.2 Installation Steps
git clone https://github.com/AyushSonar-dev/AI-StocksAnalyser.git
cd AI-StocksAnalyser
npm install
npm run dev

6. Environment Variables

Create a .env file and configure the following:

# App Environment
NODE_ENV="development"
NEXT_PUBLIC_API_URL=http://localhost:3000

# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
BETTER_AUTH_SECRET=your_better_auth_secret

# AI / LLM
GEMINI_API_KEY=your_gemini_api_key

# Nodemailer
NODEMAILER_EMAIL=your_email_address
NODEMAILER_PASSWORD=your_email_app_password

# Stock Market API
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key


7. Future Enhancements

AI-based stock trend prediction

Personalized portfolio tracking

Price alerts and notifications

Advanced data visualizations

Multi-market support

8. Use Cases

Investors tracking stock market trends

Students learning financial analytics

Developers building fintech dashboards



Author-

Ayush Sonar
GitHub: https://github.com/AyushSonar-dev

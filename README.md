Python Crypto Investment Manager – Full Stack Project

A complete crypto investment management system with a React frontend, Python backend, MongoDB database, and Postman for debugging.

 Project Overview

This project helps investors analyze crypto assets, predict trends, calculate risk-optimized investment mixes, and generate reports with automated alerts.

It implements:

Rule-based investment mix calculations

Parallel risk checking

Trend prediction

CSV report generation

Email alerts

Scalable NoSQL database storage

This project follows the development milestones provided in the official document.

 Tech Stack
Frontend

React (UI, dashboards, visualizations)

Recharts / Chart.js for graphs

Backend

Python (FastAPI or Flask)

NumPy, Pandas

Concurrent processing (concurrent.futures)

SMTP / Email service

Database

MongoDB (Atlas or local)

Debugging & Testing

Postman (API testing)

 System Architecture
React UI  →  Python API (FastAPI/Flask) → MongoDB
                     ↓
         Risk Checker + Predictions
                     ↓
                CSV Reports + Alerts

 Modules (From the Provided PDF)
1. Investment Mix Calculator

Uses rule-based logic

Performs math operations for asset allocation

Runs parallel calculations for faster results

2. Risk Checker & Predictor

Reads historical price data

Performs volatility checks

Predicts short-term price movement

Uses threading for parallel tasks

Stores trends in MongoDB

3. Report & File Saver

Combines data into readable summaries

Exports to CSV

Sends email alerts for major market changes

4. Spreading Rule Setter

Defines custom investment spreading rules

Tests multiple scenarios

Ensures safe diversification

🗂️ Project Folder Structure
crypto_investment_manager/
│── frontend/ (React App)
│── backend/
│   ├── main.py (FastAPI/Flask)
│   ├── modules/
│   ├── database/
│   └── utils/
│── database/
│   └── mongo_collections.md
│── reports/
│── logs/
│── README.md

🧪 How We Use POSTMAN

Postman is used to test backend endpoints before connecting React.

Testable Endpoints:

GET /prices/{symbol}

POST /calculate-mix

POST /risk-check

POST /predict

GET /generate-report

POST /set-rules

You can debug:

Errors in input data

MongoDB insertions

API response formats

Email alert triggers

 How to Run the Project
1. Clone the repository
git clone https://github.com/yourusername/crypto-manager.git

2. Install backend dependencies
cd backend
pip install -r requirements.txt

3. Start backend
uvicorn main:app --reload      # FastAPI
or
python app.py                  # Flask

4. Start frontend
cd frontend
npm install
npm start

5. Test APIs in Postman

Import the API collection provided.


✔ Frontend Integration Next


# Country Tax App

A full-stack web application that allows users to calculate their net income based on country-specific tax rates and salaries. It also includes a "Latest News" feature that fetches news headlines related to the selected country.

## Features

- Dropdown menu to select a country
- Input field to enter gross salary
- Calculates net income after tax
- Displays the average salary in the selected country
- Fetches and displays the latest news related to the selected country

## Technologies Used

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB Atlas
- API Integration: News API (via Axios)
- Environment configuration: dotenv

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/country-tax-app.git
cd country-tax-app
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NEWS_API_KEY=your_newsapi_key
```

Start the backend server:

```bash
node index.js
```

Or, if you have `nodemon` installed:

```bash
nodemon index.js
```

### 3. Set Up the Frontend

```bash
cd ../
npm install
npm start
```

The React app will run on `http://localhost:3000`.

### 4. Populate the Database (Optional)

You can manually insert countries with tax rates and average salaries into MongoDB Atlas. Example document format:

```json
{
  "name": "Cyprus",
  "taxRate": 20,
  "averageSalary": 1900
}
```

### 5. Using the App

- Select a country from the dropdown.
- Enter your gross salary.
- Click **"Calculate Net Income"** to see your net salary after tax.
- Click **"Show Average Salary"** to view the country's average salary.
- Click **"Latest News"** to fetch news related to the selected country.

## Folder Structure

```
country-tax-app/
├── server/
│   ├── routes/
│   │   ├── countries.js
│   │   └── news.js
│   ├── models/
│   │   └── Country.js
│   ├── .env
│   ├── index.js
│   └── ...
├── src/
│   ├── App.js
│   ├── NewsComponent.js
│   └── ...
├── package.json
├── README.md
└── ...
```

## Troubleshooting

- If you encounter `MODULE_NOT_FOUND` for `axios`, install it using `npm install axios` inside the `server` folder.
- Ensure that your MongoDB connection string and News API key are valid and correctly added to `.env`.
- Make sure your backend server is running before starting the React app.

## License

MIT

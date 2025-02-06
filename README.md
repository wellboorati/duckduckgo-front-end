# DuckDuckGo Frontend

This is the frontend for the DuckDuckGo search API wrapper. It allows users to perform searches, view results, navigate through pages, and see search history.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [Yarn](https://yarnpkg.com/) (preferred package manager)

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/wellboorati/duckduckgo-front-end.git
cd duckduckgo-frontend
yarn install
```

## Running the Application Locally

### Start the Backend First
Before running the frontend, make sure the backend is running. Follow the instructions in the [backend repository](https://github.com/wellboorati/duckduckgo-back-end).

### Development Mode (Auto-restart on changes)

```sh
yarn dev
```

### Production Mode

First, build the project:

```sh
yarn build
```

Then, start the server:

```sh
yarn start
```

## Features

- **Submit Query:** Users can input a search query and fetch results from the DuckDuckGo API.
- **Display Results:** Results are presented with clickable titles.
- **Pagination:** Users can navigate between pages of results.
- **Query History:** Stores past queries, allowing users to re-run previous searches.
- **Search Highlight:** Highlights the searched term in results and counts occurrences.

## Environment Variables

Create a `.env` file in the project root to configure environment variables:

```sh
REACT_APP_API_BASE_URL=http://localhost:3000
```

## Running Tests

To run tests:

```sh
yarn test
```

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push the changes and open a pull request.

## License

This project is licensed under the MIT License.


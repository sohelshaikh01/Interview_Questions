// Now you know fetch

// 1. How fetch works
// Article - @LogRocket The Fetch is finally coming to Node.js

// fetch API - Is present Earlier
// Earlier XMLHttpRequest was used for API Calls
// But Become difficult to use when framework grow and with other library

// 2. AbortController allow stop API Call

// If Fetch return 404 Error Code
// It will be as response
// Error if request fails

// 3. Send Options in Fetch

const options = {
    method: "GET",
    body: new FormData(),
}

fetch("https://example.com", options)
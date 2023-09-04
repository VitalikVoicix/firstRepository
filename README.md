# gptUseCase2App API
Welcome to the `gptUseCase2App` API, a robust solution designed to retrieve country-related information tailored to your requirements.
Whether you need a comprehensive list, specific country details, or even populations within a range, this API has got you covered. 
You can fetch countries based on names, order the list in ascending or descending fashion, filter based on population, or even limit the number of results you get.
The API is driven by query parameters, allowing users to tailor the output based on their needs.

## How it works:
+ **No Query Parameters: Simply fetches the entire list of countries without any filter or sorting logic.**

_Example_ : `GET /restcountries`


+ **Use the name query parameter to filter countries containing the provided name substring.**

_Example_: `GET /restcountries?name=est`

This will retrieve countries with names containing 'est', like Estonia.

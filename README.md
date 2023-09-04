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

+ **Use the population query parameter. The filter searches for countries where the population is less than the provided number, in millions.**

_Example_: `GET /restcountries?population=10`

Retrieves countries with a population of fewer than 10 million people. Remember, if the population parameter equals 0, no filtering occurs.

+ **Use the order query parameter. You can sort countries in ascending or descending order based on their names.**

_Example_: `GET /restcountries?order=ascend`

Lists countries in ascending order of their names.

_Example_: `GET /restcountries?order=ascend`

Lists countries in descending order of their names.

+ **Use the totalNumber query parameter to limit the number of countries returned.**

_Example_: `GET /restcountries?totalNumber=5`

Returns only the first five countries.

### You can also combine these functions

+ **Name and Population Filters Combined**

_Example_: `GET /restcountries?name=est&population=2`

Returns the first three countries when sorted in descending order.

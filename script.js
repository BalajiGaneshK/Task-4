//1.Create a request variable

var request = new XMLHttpRequest();

//2.Create a new Connection

request.open('GET', "https://restcountries.eu/rest/v2/all", true); 

/* NOTE:By giving true,you make the above line asynchronous.So that,if there's any problem in 
receiving data from the above URL, the rest of the program execution wouldn't be affected/stopped */

//3.Send the Connection

request.send();

//4. Register an event listener,once the data is ready,the function will be executed

request.onload = function () {
    
    let countryData = JSON.parse(this.response);

    //1. Get All Countries from Asia Continent/Region using Filter Function

    console.log("1. Get All Countries from Asia Continent/Region using Filter Function");
    let asianCountries = countryData.filter(country => { return country.region === "Asia" });
    console.log(asianCountries);

    //2.Get all Countries with population less than 2 lacs using Filter

    console.log("2.Get all Countries with population less than 2 lacs using Filter")
    let popLessThan2Lakhs = countryData.filter(country => { return country.population < 200000 });
    console.log(popLessThan2Lakhs);

    //3.Print name,Capital, Flag using forEach function
    console.log("3.Print name,Capital, Flag using forEach function");
    countryData.forEach(country => {
        console.log("Name:", country.name, "Capital:", country.capital, "Flag:", country.flag);
    });

    //4.Print Total Population of all countries using reduce function
    console.log("4.Print Total Population of all countries using reduce function");
    let totalPopulation = countryData.reduce((total, country) => { return total + country.population },0);
    console.log("Total Population:", totalPopulation);

    //5.Print the countries which have US Dollars as currency

    console.log("5.Print the countries which have US Dollars as currency");
    console.log(countryData.filter(country => {
      
        let currencies = country.currencies;
        //console.log(currencies);
        for ( let ele of currencies)
        {
            if (ele.code == "USD")
            return country;
        }
        //console.log("**********************");
    }));

    
  
}

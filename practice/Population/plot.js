// Sort and Select the Cities
// sort the cities in decending order
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// select the top five cities
var topFiveCities = sortedCities.slice(0,5)

// Create Arrays of City Names and Growth Figures
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// Create a Bar Chart with the Arrays (most rapidly growing cities)
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

// Create a Bar Chart with the Arrays (seven largest cities by population)
var trace1 = {
    x: topFiveCityNames,
    y: population,
    type: "bar"
};
var data = [trace1];
var layout = {
    title: "City Populations",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};
Plotly.newPlot("pop-plot", data, layout);

console.log(cityGrowths);

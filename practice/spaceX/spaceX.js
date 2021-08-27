const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(receivedData => console.log(receivedData));
d3.json(url).then(data => console.log(data));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

// Use map() to print only the latitude and longitude 
// coordinates of each SpaceX launch station.
d3.json(url).then(spaceXResults => 
    console.log(spaceXResults[0].location.latitude, spaceXResults[0].location.longitude));


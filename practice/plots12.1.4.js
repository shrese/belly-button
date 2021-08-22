var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
};

var data = [trace];
var layout = {
    title: "Pie Chart",
    // xaxis: {title: "Drink Name"},
    // yaxis: {title: "% Order"}
};

Plotly.newPlot("plotArea", [trace], layout);

// the below code will work as well the difference is that the object is no longer enclosed on an array in the fuction call, 
// but is still enclosed inside an array in the variable assignment.
// there is an addition of the []
// var trace = [{
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// }];

// Plotly.newPlot("plotArea", trace);
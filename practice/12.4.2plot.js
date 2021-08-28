function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
    Plotly.newPlot("plot", data);
  };
  
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  
  init();
// d3.json("samples.json").then(function (data) {
//             firstPerson = data.metadata[0];
//             Object.entries(firstPerson).forEach(([key, value]) => { console.log(key + ': ' + value); });
//         });


//         researcher1 =[['name', 'Roza'], ['age', 34], ['hobby',
//             'Hiking']];

//         d3.json("samples.json").then(function (data) {
//             researcher1.forEach(([first, second]) => console.log(first + ": " + second));
//         });
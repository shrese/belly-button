// create the dropdown menue of ID numbers dynamically
// the init function is called on the last line of code
  // select the dropdown menu using d3.select() method and assign a name to the function
function init() {
  var selector = d3.select("#selDataset");

  // use d3.json() method to read the data from the ###.json file that will be assigned an arbitrary arguement
  // in this case samples.json and the arguement name is "data"
  // used to populate the select options
  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
  })
}
// pulls data for the dashboard
function optionChanged(newSample) {
  console.log(newSample);
}

// builds the dashboard
init();

// pull the data that is being selected from the dropdown menu
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

// build the table from the selection from the dropdown menu
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    // clear existing data when a new selection is made
    PANEL.html("");
    
      // Use `Object.entries` to add each key and value pair to the panel
      // Use the key above the tab button for your .text(`....`)
      // tags for each key-value in the metadata.
      // Use .toUpperCase to change the case of each key
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

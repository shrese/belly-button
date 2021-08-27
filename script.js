// create event listener
d3.selectAll("body").on("change", updatePage);

// filters when something is changed on the site
// select option is the id value of the dropdown menu
function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  // selectedOption is the value that was selected
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};
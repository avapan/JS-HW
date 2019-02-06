// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchButton = document.querySelector("#search");

// Add an event listener to the searchButton, call handleClick when clicked
$searchButton.addEventListener("click", handleClick);

// renderTable renders the tableData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    console.log("rendering")

    for (var i = 0; i < tableData.length; i++) {
      // Get get the current UFO info object and its fields
      var ufoinfo = tableData[i];
      var field = Object.keys(ufoinfo);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < field.length; j++) {
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = ufo[field];
      }
    }   
}
function handleClick() {
    // Format user search by removing whitespace, lowercase the string
    var filterDate = $dateInput.value.trim();
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();  
   
    // Set tableData to array of ufo info to match the filter
    tableData = data.filter(function(ufo) {
        var searchDate = ufo.datetime;
        var searchCity = ufo.city.toLowerCase();
        var searchState = ufo.state.toLowerCase();
        var searchCountry = ufo.country.toLowerCase();
        var searchShape = ufo.shape.toLowerCase();
        // If statements to match search criteria with filtered criteria
        if (
            (searchDate === filterDate || filterDate === "") &&
            (searchCity === filterCity || filterCity === "") &&
            (searchState === filterState || filterState === "") &&
            (searchCountry === filterCountry || filterCountry === "") &&
            (searchShape === filterShape || filterShape === "")
        ) {
            return true;
        }
        return false;
    });
    renderTable();

    // Clear input fields
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
}

// Render the table for the first time on page load
renderTable();
// from data.js
var tableData = data;
//console.log(tableData);
//14.3.1
var tbody = d3.select("tbody");

var ufoTable = d3.select("table").append("table");
//ufoTable.text("a new table has been added!");
//14.3.2
data.forEach(function(ufoReport) {
    //console.log(ufoReport)
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
    //    console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

var form = d3.select("#form");
//form.text("New Form Added");

var button = d3.select("#filter-btn");
console.log(button);
button.on("click", filterData);

//form.on("submit", filterData);

function filterData(x) { console.log("here")
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    //console.log(inputValue);
    //console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
     var newTable = d3.select("tbody");
    //css selectors
    //no # because its a specific tag
    //if its an id use the #
    //if its a class use a .

    //console.log(newTable);

    newTable.html("");
    
    
    
    console.log(tbody);
    //var ufoTable = d3.select("table").append("table");
    //ufoTable.text("a new table has been added!");
    //14.3.2
    filteredData.forEach(function(ufoReport) {
        //console.log(ufoReport)
        var tbody = d3.select("tbody");
        var row = tbody.append("tr");
    
        Object.entries(ufoReport).forEach(function([key, value]) {
            //console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

 }

// var newTable = d3.select("ufoTable");

// newTable.html("");

// var tbody = d3.select("tbody");

// var ufoTable = d3.select("table").append("table");
// //ufoTable.text("a new table has been added!");
// //14.3.2
// data.forEach(function(ufoReport) {
//     console.log(ufoReport)
//     var row = tbody.append("tr");

//     Object.entries(ufoReport).forEach(function([key, value]) {
//         console.log(key, value);
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

//function(dtSearch) {
//    d3.event
//}



// YOUR CODE HERE!
//14.3.1
//var ufoTable = d3.select("table").append("table");
//ufoTable.text("a new table has been added!");
//14.2.2 bonus
// tableData.forEach(([datetime, city, state, country, shape, durationMinutes, comments]) => {
//     var row = tbody.append("tr");
//     row.append("td").text(datetime);
//     row.append("td").text(city);
//     row.append("td").text(state);
//     row.append("td").text(country);
//     row.append("td").text(shape);
//     row.append("td").text(durationMinutes);
//     row.append("td").text(comments);
//});

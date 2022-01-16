
// import the data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select('tbody');

function buildTable(data) {
    //clear any existing data 
    tbody.html(" ");

//written using fat arrow formatting 
// can also be written as 
//data.forEach(dataRow);
//function dataRow(){;}
//loop thru each data file object and append a 
//row and cells for each value in the row
data.forEach((dataRow)=>{
    //append a row to the table body
    let row = tbody.append("tr");
    //loop through each field in dataRow and 
    //add each value as a table cell
    Object.values(dataRow).forEach((val)=>{
        let cell = row.append("td");
        cell.text(val);
    });
});
}

function handleClick(){
   
    //Get the datetime value from the filter and save it in the date variable
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //Check to see if a date was entered and filter the defauly data using it 
    if (date) {
        filteredData = filteredData.filter(row=> row.datetime === date);

    };
    //Rebuild the table using the filtered data
    buildTable(filteredData);
}
//Event listener for the form button 
d3.selectAll("#filter-btn").on('click',handleClick);

//build the table when the page loads
buildTable(tableData);

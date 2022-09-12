

// let cashTable = [
//   { ItemUnits: 32, Description: "A pair of shoe", Price: 14000, TotalPrice: "" },
//   { ItemUnits: 45, Description: "A big size bag", Price: 3400, TotalPrice: "" },
//   { ItemUnits: 53, Description: "Smart Tv", Price: 120000, TotalPrice: "" },

// ];


// function generateTableHead(table, data) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//     // for ( let Items in ItemUnits) {
//     //   const sales = cashTable.ItemUnits[Items] * cashTable.Price[index]
//     //   totalPrice = totalPrice.push(sales)
//     //   th.appendChild(text);
//     //   row.appendChild(th);
//     // }
//   }
// }



// function generateTable(table, data) {
//   for (let element of data) {
//     let row = table.insertRow();
//     const sales = element.ItemUnits * element.Price
//     for (key in element) {
//       let cell = row.insertCell();
//       let text = ""
//       if (key === "TotalPrice") {
//         text = document.createTextNode(sales);
//       } else {
//         text = document.createTextNode(element[key]);
//       }

//       cell.appendChild(text);
//     }

//   }
// }

// function addRow(table) {
//   // for (let element of data) {
//     let row = table.insertRow();
//     // for (key in element) {
//       let cell = row.insertCell();
//       // let text = document.createTextNode(element[key]);
//       // cell.appendChild(text);
//   //   }
//   // }
// }

// let table = document.querySelector("table");
// let data = Object.keys(cashTable[0]);
// generateTableHead(table, data);
// generateTable(table, cashTable);

var rIndex,
table = document.getElementById("customers");

// check the empty input
function checkEmptyInput()
{
var isEmpty = false,
ItemUnit = document.getElementById("Item Unit").value,
Description = document.getElementById("Description").value,
Price = document.getElementById("Price").value;

if(ItemUnit === ""){
    alert("Item Unit Cannot Be Empty");
    isEmpty = true;
}
else if(Description === ""){
    alert("Description Cannot Be Empty");
    isEmpty = true;
}
else if(Price === ""){
    alert("Price Cannot Be Empty");
    isEmpty = true;
}
return isEmpty;
}

// add Row
function addHtmlTableRow()
{
// get the table by id
// create a new row and cells
// get value from input text
// set the values into row cell's
if(!checkEmptyInput()){
var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2);
    ItemUnit = document.getElementById("Item Unit").value,
    Description = document.getElementById("Description").value,
    Price = document.getElementById("Price").value,

cell1.innerHTML = ItemUnit;
cell2.innerHTML = Description;
cell3.innerHTML = Price;
// call the function to set the event to the new row
selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{

for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
      // get the selected row index
      rIndex = this.rowIndex;
      document.getElementById("ItemUnit").value = this.cells[0].innerHTML;
      document.getElementById("Description").value = this.cells[1].innerHTML;
      document.getElementById("Price").value = this.cells[2].innerHTML;
    };
}
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
var ItemUnit = document.getElementById("Item Unit").value,
    Description = document.getElementById("Description").value,
    Price = document.getElementById("Price").value;
if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML = ItemUnit;
table.rows[rIndex].cells[1].innerHTML = Description;
table.rows[rIndex].cells[2].innerHTML = Price;
}
}

function removeSelectedRow()
{
table.deleteRow(rIndex);
// clear input text
document.getElementById("ItemUnit").value = "";
document.getElementById("Description").value = "";
document.getElementById("Price").value = "";
}
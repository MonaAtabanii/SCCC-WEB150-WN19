// ADDING ITEMS TO START AND END OF TABLE
var table = document.getElementsByClassName('table2')[0];          // Get the <table2> element by class name


// ADD NEW ROW THE BEGINING OF THE TABLE
var newItemFirst = document.createElement('td');                                        // Create element in column 2
var newTextFirst = document.createTextNode('New equipment that can performs all KMA services'); // Create text node
newItemFirst.appendChild(newTextFirst);                                                   // Add text node to element
table.insertBefore(newItemFirst, table.firstChild); // Add element to the second column of the first row in the table

var newItemFirst = document.createElement('td');                         // Create element in column 1
var newTextFirst = document.createTextNode('KMA Working Equipment');    // Create text node
newItemFirst.appendChild(newTextFirst);                                // Add text node to element
table.insertBefore(newItemFirst, table.firstChild); // Add element to the first colunm of the first table


// ADD NEW Row TO END OF THE TABLE
var newItemLast = document.createElement('td');                    // Create element in column 1
var newTextLast = document.createTextNode('RG Equipment');        // Create text node
newItemLast.appendChild(newTextLast);                            // Add text node to element
table.appendChild(newItemLast);                                 // Add element first column of the last row

var newItemLast = document.createElement('td');                    // Create element in column 2
var newTextLast = document.createTextNode('Made in UK equpment that are exacvate the well');  // Create text node
newItemLast.appendChild(newTextLast);                            // Add text node to element
table.appendChild(newItemLast);                                 // Add element second column of the last row


// EDITING ROW OF THE TABLE
var td1 = document.getElementsById('one');           // Get the element with ID <one> 
var editTD1 = td1.firstChild.nodeValue;              //Get the text of the element
editTD1 = editTD1.replace('YUTONG Heavy Equipment','Heavy Equipment'); //Replace the text
td1.firstChild.nodeValue=editTD1; 


// UPDATE TEXT AND MARKUP
var td3 = document.getElementsById('three');           // Get the element with ID <three> 
var editTD3 = td3.innerHTML;                          //Get the content 
td3.innerHTML = '<a herf=\"http://google.com\">' + editTD3 + '</a>';

var tablelist = document.querySelectorAll('td');           // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;                                                             // Counter variable
for (i = 0; i < tablelist.length; i++) {                           // Loop through elements
  tablelist[i].className = 'cool';                                 // Change class to cool
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('table');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = tablelist.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content
heading.innerHTML = newHeading;                                    // Update h2 using innerHTML (not textContent) because it contains markup
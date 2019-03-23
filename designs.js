// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// function that creates the Grid
function makeGrid() {

//create variables from the dom for all user input
  const inputHeight = document.getElementById('inputHeight');
  const inputWidth = document.getElementById('inputWidth');
  const color = document.getElementById('colorPicker');

//creates a submit event listener on the canvas class
document.addEventListener('submit', function setPicks() {
  var canvas = document.getElementById("pixelCanvas");
  var width = inputWidth.value;
  var height = inputHeight.value;
  var selectedColor = color.value;
  event.preventDefault();
  cells = canvas.querySelectorAll('td');

 //function to draw grid
  function drawActiveGrid(){

    for (let a = 0; a < width; a++ ) {
       row = canvas.insertRow(a);
       // sets a click event listener and which sets color
       //from the user input
       row.addEventListener('click', (e) =>{
         //function setColor
           var clicked = e.target;
           color.addEventListener('change',(e) =>
        //function onColorUpdate
              {
              selectedColor = e.target.value;
                   })
        clicked.style.backgroundColor = selectedColor;
                })
     for (let b = 0; b < height; b++ ) {
          cell = row.insertCell(b);
          }
        }
  }

//check if the grid has been created and
//creates a new grid on submit
  if ( cells.length === 0 ) {
    drawActiveGrid();
  }

  //clears the colors grid if any of the cells
  //in the grid have been colored
  else {
       var newDimensions = (height * width);
       if ( newDimensions === cells.length ){
         for ( let p = 0 ; p < cells.length; p++ ){
            cells[p].style.backgroundColor = "#ffffff";
            }
                   }
      else {
        // clear whole canvas and redraw
        canvas.innerHTML="";
        drawActiveGrid();
            }

           }
              }
                 )
                    }
//calls the makeGrid function
makeGrid()

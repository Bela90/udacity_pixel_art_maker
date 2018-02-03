
const rowInput = $("#inputHeight");
const columnInput = $("#inputWidth");

//generating grid based on user input

$("#button").click(function makeGrid(){

    let htmlTable = "";
    let rowCount = rowInput.val();
    let columnCount = columnInput.val();
	
    for(let i = 0; i < rowCount; i++){
            
            htmlTable += "<tr>";
   
        for(let j = 0; j < columnCount; j++){
            
            htmlTable += "<td class='cell'></td>";
       
        }
            htmlTable += "</tr>";     
    }   

    $("#pixelCanvas").html(htmlTable);



//fetching color from color picker and coloring 
//cell background on click

	$(".cell").click(function() {

		let color = $("#colorPicker").val();
        
        $(this).css("background-color", color);

 	});
});
 








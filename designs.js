// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$("#button").click(function makeGrid(){

    let htmlTable = "";
	let inputWidth = $("#inputWidth").val();
    let inputHeight = $("#inputHeight").val();

    for(let i = 0; i < inputHeight; i++){
            
            htmlTable += "<tr>";
   
        for(let j = 0; j < inputWidth; j++){
            
            htmlTable += "<td class='cell'></td>";
       
        }
        htmlTable += "</tr>";     
    }   

    $("#pixelCanvas").html(htmlTable);


	$(".cell").click(function() {

		let color = $("#colorPicker").val();
        
        $(this).css("background-color", color);

 	});
});
 








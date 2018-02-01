
//generating grid based on user input

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


//picking a color and showing color on grid

	$(".cell").click(function() {

		let color = $("#colorPicker").val();
        
        $(this).css("background-color", color);

 	});
});
 








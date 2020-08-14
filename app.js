$(document).ready(function(){
    $(".grid").children().each(function(){
        var x;
        var y;

        x = parseInt($(this).attr("id").substring(0, 1));
        y = parseInt($(this).attr("id").substring(1));
        //Setting the borders of the 9x9 cells
        if(y == 2 || y == 5){
            $(this).css("border-right-width", 5);
        }
        if(x == 2 || x == 5){
            $(this).css("border-bottom-width", 5);
        }
    });
    //Grid that represents the sudoku
    var grid = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ];
    //Setting the original values in the Sudoku based on grid
    for(var x = 0; x < 9; x++){
        for(var y = 0; y < 9; y++){
            if(grid[x][y] != 0) {
                var id = "#"+x+y;
                $(id).html(grid[x][y]);
                $(id).attr("data-original", "true");
                $(id).css("font-weight", "bold");
            }
        }
    }
    var oldCell = null;
    var newCell;
    //Set key codes to their respective 
    //If the user clicks on a cell
    $(".cell").click(function(){
        //Change the color of  the cell to show that it is selected
        newCell = $(this);
        //If it is one of the original cells, return false
        if(newCell.attr("data-original") === "true"){
            if(oldCell != null){
                oldCell.css("background-color", "white");
            }
            return false;
        }
        if(oldCell != null){
            oldCell.css("background-color", "white");
        }
        $(this).css("background-color", "#c7fff7");
        oldCell = $(this);
        //If the user clicks on a key
        $(window).keydown(function(evt){
            //Set the value in the cell based of the key code
            //  if the cell is not one of the originally placed
            if(newCell.attr("data-original") !== "true"){
                if(evt.which >= 49 && evt.which <= 57){
                    newCell.html(String.fromCharCode(evt.which));
                // if the user click on "backspace"
                } else if(evt.which == 8){
                    newCell.html("");
                }
            }
        }).keyup(function(evt){
            // do something
        });
    });

    //If the user clicks on the "reset" button, clear the grid
    $("#reset").click(function(){
        clearGrid();
    });

    //If the user clicks on the "check" button, check
    $("#check").click(function(){
        checkGrid();
    });
});

function clearGrid(){
    for(var x = 0; x < 9; x++){
        for(var y = 0; y < 9; y++){
            var id = "#"+x+y;
            if($(id).attr("data-original") !== "true"){
                $(id).html("");
            }
        }
    }
}

function checkGrid(){
    alert("incorrect");
    return false;
}
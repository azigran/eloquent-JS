/** Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At
    each position of the grid there is either a space or a “#” character. The characters should form a chess board.

    Passing this string to console.log should show something like this:

     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #

 **/

function chessBoard(size){
  string = "";
  for (var i = 0; i <= size; i++) {
    for (var j = 0; j <=size; j++) {
      if (i % 2 == 0 && j % 2 == 0) {
       string += " ";
     }
      else if (i % 2 == 0 || j % 2 == 0) {
        string += "#";
      }
      else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
}

chessBoard(size);

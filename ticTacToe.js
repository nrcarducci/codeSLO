let ticTacToe ={

    board: [[null,null,null],
           [null,null,null],
           [null,null,null]],

    move: function(input,rowNum,colNum){
        
        if(this.board[rowNum][colNum]===null)
        {
            this.board[rowNum][colNum]=input;
            console.log(this.board);
        }
        else//DOES NOT OVERIDE
        {
            console.log(this.board);
        }
        return this.board;
    },

    clear: function(){
        this.board=[[null,null,null],
        [null,null,null],
        [null,null,null]];
        return this.board
    },
}
//console.log(ticTacToe.board);//outputs the board
console.log(ticTacToe.move("x",1,1));
console.log(ticTacToe.move("0",1,1));
console.log(ticTacToe.move("x",0,0));
console.log(ticTacToe.move("0",0,1));
console.log(ticTacToe.clear());
//////////////////////////////////////////////////////////////////////////////////////////////////////

/*
ticTacToe 
    is an object CHECK

board CHECK
    is a propery of ticTacToe CHECK
    is an array CHECK
    is has three rows CHECK
    each row is initially an array of three null values CHECK

move
    is a method of ticTacToe CHECK
    is a function CHECK
    returns the board CHECK
    adds the given character to the row and column number CHECK
    does not let a player overwrite a cell that has already been used CHECK

clear
    is a method of ticTacToe
    is a function
    returns the board
    resets the board to its original value


Define an object 'ticTacToe'. check

Follow the test specs to create a 'board' property, 'move' method, and a 'clear' method so you can play a game with your partner.

The 'board' property is a grid of arrays that represents the board, where each cell is initiall null.

The 'move' method is a method that, given a character, rowNum, and colNum, adds the character to the correct cell in the board.

The 'clear' method should reset the board to all nulls.

To make it easier to play, have your 'move' method console.log() the board before the method returns the board.
*/
import Room from "./Room";

/**
 * Maze class
 * 
 * This class represents a maze. It is a 2D array of Room objects, along with some other properties.
 * 
 * @author Ethan Moore
 * @author Zach Sanchez
 * @version 1.0
*/
export default class Maze{

    /**
     * 2D array of Room objects
     */
    private myRooms:Room[][];

    /**
     * The starting room
     */
    private myStartingRoom!: Room;

    /**
     * The exit room
     */
    private myExitRoom!: Room;

    constructor(theMaze:number[][]){
        let theDimensions:number = theMaze.length;
        this.myRooms = [];
        for(let i = 0; i < theDimensions; i++){
            this.myRooms[i] = [];
            for(let j = 0; j < theDimensions; j++){
                this.myRooms[i][j] = new Room({theRow:i, theCol:j});
            
            switch(theMaze[i][j]){
                case 5:
                    this.myRooms[i][j].setTypeAsNumber(7);
                    this.myStartingRoom = this.myRooms[i][j];
                    this.myStartingRoom.setIsOpen(true);
                    break;
                case 9:
                    this.myRooms[i][j].setTypeAsNumber(9);
                    this.myExitRoom = this.myRooms[i][j];
                    this.myExitRoom.setIsOpen(true);
                    break;
                case 1:
                    this.myRooms[i][j].setTypeAsNumber(1);
                    this.myRooms[i][j].setIsOpen(true);
                    break;
                case 4:
                    this.myRooms[i][j].setTypeAsNumber(4);
                    this.myRooms[i][j].setIsItemRoom(true);
                    this.myRooms[i][j].setIsOpen(true);
                    break;
                default:
                    break;
            }
            }
        }
    }


    /**
     * Get the starting room
     * 
     * @returns {Room} - The starting room
    */
    public getStartingRoom(): Room{
        return this.myStartingRoom;
    }

    /**
     * Get the exit room
     * 
     * @returns {Room} - The exit room
    */
    public getExitRoom() : Room{
        return this.myExitRoom;
    }

    /**
     * Get the room at a given row and column
     * 
     * @param theRow the row of the room
     * @param theCol the column of the room
     * @returns Room; the room at the given row and column, or null if not found/valid
    */
    public getAdjacentRoom({currentRoom, direction}:{currentRoom:Room, direction:string}): Room | null{
        let theRow:number = currentRoom.getRow();
        let theCol:number = currentRoom.getCol();

        switch(direction){
            case "north":
                return (theRow > 0) ? this.myRooms[theRow - 1][theCol] : null;
            case "south":
                return (theRow < this.myRooms.length - 1) ? this.myRooms[theRow + 1][theCol] : null;
            case "east":
                return (theCol < this.myRooms[0].length - 1) ? this.myRooms[theRow][theCol + 1] : null;
            case "west":
                return (theCol > 0) ? this.myRooms[theRow][theCol - 1] : null;
            default:
                return null;
        }

    }

    /**
     * Get the maze 
     * 
     * @returns {Room[][]} - The maze
    */
    public getMaze():Room[][]{
        return this.myRooms;
    }
    /**
     * Print the maze to the console
    */

    /**
     * Sets the maze. useful for updating, and probably useful for our save system
     * 
     * @param {Maze} - The Maze
    */
    public setMaze(theMaze: Maze):void{
        if(theMaze){
            this.myRooms = theMaze.getMaze();
        }
    }

    public setRoom({theRow, theCol, theRoom}:{theRow:number, theCol:number, theRoom:Room}){
        if(theRow && theCol && this.myRooms[theRow][theCol]){
            this.myRooms[theRow][theCol] = theRoom
        }
    }
    public printMaze(){
        console.log("+" + "-".repeat(this.myRooms[0].length ) + "+");
        for(let i = 0; i < this.myRooms.length; i++){
            let theRow:string = "|";
            for(let j = 0; j < this.myRooms[i].length; j++){
                let theRoom:Room = this.myRooms[i][j];
                if(theRoom.getIsItemRoom()){
                    theRow += "I";
                }else if(theRoom.getIsLocked()){
                    theRow += "L";
                }else if(theRoom === this.myStartingRoom){
                    theRow += "S";
                }else if(theRoom === this.myExitRoom){
                    theRow += "E";
                
                }else if(theRoom.getIsOpen()){
                    theRow += ".";
                } else {
                    theRow += "#";
                }
            }
            console.log(theRow + "|");

        }
        console.log("+" + "-".repeat(this.myRooms[0].length ) + "+");
    }
}
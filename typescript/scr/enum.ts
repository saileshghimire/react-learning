
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
    if(keyPressed == Direction.Up){
        return("hellow world");
    }
}
doSomething(Direction.Up);
doSomething(Direction.Down);
//se crea el objeto(rover)
var rover = {
  direction: 'N',
  position: {
    x: 0,
    y: 0
  },
  travelLog: []
}

//funcion para girar a la derecha.
function turnLeft(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = 'W';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'W': 
      rover.direction = 'S';
      break; 
  }
}

//funcion para girar a la izquierda.
function turnRight(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = 'E';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
}

//funcion para mover el rover hacia adelante.
function moveForward(rover){
  rover.travelLog.push({x: rover.position.x, y: rover.position.y});
  switch(rover.direction){
    case 'N':
      rover.position.y = rover.position.y - 1 ;
      break;
    case 'S':
      rover.position.y = rover.position.y + 1;
      break;
    case 'E':
      rover.position.x = rover.position.x + 1;
      break;
    case 'W':
      rover.position.x = rover.position.x - 1;
      break;
  } 
  
 console.log(rover.travelLog)
}

//funcion para mover el rover hacia atras.
function moveBackward(rover){
  rover.travelLog.push({x: rover.position.x, y: rover.position.y});
  switch(rover.direction){
    case 'N':
      rover.position.y = rover.position.y + 1 ;
      break;
    case 'S':
      rover.position.y = rover.position.y - 1;
      break;
    case 'E':
      rover.position.x = rover.position.x - 1;
      break;
    case 'W':
      rover.position.x = rover.position.x + 1;
      break;
  } 
}

//funcion para leer las letras de la cadena y le da la orden a rover.
function read(comand){
  for(var i = 0; i < comand.length; i++){
    switch(comand[i]){
      case 'f':
        moveForward(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);  
        break;
      case 'b':
        moveBackward(rover);
        break;
    }
  }
}

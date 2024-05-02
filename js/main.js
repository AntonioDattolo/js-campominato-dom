
let grid = document.getElementById("my-grid");
let play = document.getElementById("play");
let diff;
let punt = document.getElementById("punteggio");
let score = 0; 
let contBomb =[];

//FUNZIONE PER DAR INIZIO AL CICLO DELLA CREAZIONE DELLA GRIGLIA

function start(){
    grid.classList.remove("stop")
    grid.innerHTML ="";
    diff = document.getElementById("difficult").value;
    contBomb =[];
    generateBomb()
    score = 0;
    punt.innerHTML= "";
    punt.classList.remove("winner")
    

    if( diff == "easy"){
        for (let x = 1; x <= 100; x++) {
            let gridCreations = createSquare(x);
            grid.append(gridCreations) ;                    
        }
    } else if( diff == "medium"){ 
        for (let x = 1; x <= 81; x++) {
            let gridCreations = createSquare(x); 
            grid.append(gridCreations);
        }       
    } else if( diff == "hard"){
        for (let x = 1; x <= 49; x++) {
            let gridCreations = createSquare(x); 
            grid.append(gridCreations); 
        }  
    }
   
} 
// ***** GLI "IF" COMMENTATI SONO UN ALTERNATIVA

// ***************FUNZIONE PER LA CREAZIONE DEI QUADRATI DELLA GRIGLIA
function createSquare(y){
    let square = document.createElement("div");
    if (diff == "easy"){
        square.classList.add("base-square");
        square.classList.add("bg-square")
    }
    else if (diff == "medium"){
        square.classList.add("base-square9");
        square.classList.add("bg-square")
    }
    else if (diff == "hard"){
        square.classList.add("base-square7");
        square.classList.add("bg-square")
    }        

    
    square.addEventListener("click", function star(){
        
        if(contBomb.includes(y)){
            let lose = "YOU LOSE" ;
            square.innerHTML += ` ${y} è una bomba,YOU LOSE`;
            square.classList.toggle("bomb");
            
            punt.innerHTML = `YOU LOSE, ur SCORE IS ${score}`;
            grid.classList.add("stop")   
        }else {
            square.innerHTML += `il numero della cella è ${y}`;
            square.classList.toggle("selected");
            score++;
            punt.innerHTML = score;    
        }
        //CICLO WHILE PER CONTROLLO VINCITORE
        x=0
        while(x < 100){
            if(score==2 && diff == "hard" ){
                punt.innerHTML = `YOU WIN! UR SCORE IS ${score}`;
                punt.classList.add("winner");
                grid.classList.add("stop")
                

            }else if(score==65 && diff== "medium"){
                punt.innerHTML = `YOU WIN! UR SCORE IS ${score}`;
                punt.classList.add("winner");
                grid.classList.add("stop")
                
                
            }else if(score == 84 && diff =="hard"){
                punt.innerHTML = `YOU WIN! UR SCORE IS ${score}`;
                punt.classList.add("winner");
                grid.classList.add("stop")
                
            }
            x++
        }
    },{once:true})
      
    return square 
}
// EVENTO CHE DA IL VIA ALLA CREAZIONE DELLA GRIGLIA
play.addEventListener("click", start)

/// generazione bombe
function generateBomb(){
     let diff = document.getElementById("difficult").value;
    if (diff == "easy"){

        for (let x = 1; x <= 16; x++){
            let bomb = Math.floor(Math.random() * (100 - 1) + 1);
            if(contBomb.includes(bomb)){
                bomb = Math.floor(bomb + 2.7);
                contBomb.push(bomb)
            } else{
                contBomb.push(bomb)
            }
            
        }
        } else if( diff == "medium"){
        for (let x = 1; x <= 16; x++){
             let bomb = Math.floor(Math.random() * (81 - 1) + 1);
            
             if(contBomb.includes(bomb)){
                bomb = Math.floor(bomb + 2.7);
                contBomb.push(bomb)
            } else{
                contBomb.push(bomb)
            }
            
        }
        }else if( diff == "hard"){
        for (let x = 1; x <= 16; x++){
             let bomb = Math.floor(Math.random() * (49 - 1) + 1);
            
             if(contBomb.includes(bomb)){
                bomb = Math.floor(bomb + 2.7);
                contBomb.push(bomb)
            } else{
                contBomb.push(bomb)
            }
            
        }
    }
    
}


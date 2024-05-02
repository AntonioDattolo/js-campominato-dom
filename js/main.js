
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

    if( diff == "easy"){
        for (let x = 1; x <= 100; x++) {
            let gridCreations = createSquare(x);
            grid.append(gridCreations) ;                    
            // if(contBomb.includes(x)){
            //      grid.append(gridCreations)
            //      gridCreations.classList.add("bomb")
            // }
            
        }
    } else if( diff == "medium"){ 
        for (let x = 1; x <= 81; x++) {
            let gridCreations = createSquare(x); 
            grid.append(gridCreations);
            // if(contBomb.includes(x)){
            //     grid.append(gridCreations)
            //     gridCreations.classList.add("bomb")
            // }
           
        }       
    } else if( diff == "hard"){
        for (let x = 1; x <= 49; x++) {
            let gridCreations = createSquare(x); 
            grid.append(gridCreations);
            // if(contBomb.includes(x)){
            //     grid.append(gridCreations)
            //     gridCreations.classList.add("bomb")
            // } 
         
           
        }  
    }
}
// ***** GLI "IF" COMMENTATI SONO UN ALTERNATIVA

// ***************FUNZIONE PER LA CREAZIONE DEI QUADRATI DELLA GRIGLIA
function createSquare(y){
    // let diff = document.getElementById("difficult").value;
    let square = document.createElement("div");
    // grid.append(square)
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

    //  square.innerHTML = y;
    square.addEventListener("click", function star(){
        if(contBomb.includes(y)){
            let lose = "YOU LOSE" ;
            square.innerHTML += ` ${y} è una bomba,YOU LOSE`;
            square.classList.toggle("bomb");
            square.classList.remove("bg-square")
            punt.innerHTML = `YOU LOSE, ur SCORE IS ${score}`;
            grid.classList.add("stop")
                      
                
                
        }else if(contBomb.includes(y)== false){
            square.innerHTML += `il numero della cella è ${y}`;
            square.classList.toggle("selected");
            score++;
            punt.innerHTML = score;
                
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


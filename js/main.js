// let grid = document.querySelector('div');
let grid = document.getElementById("my-grid");
let play = document.getElementById("play");
let diff;
// let bomb = Math.floor(Math.random() * (100 - 1) + 1);
let contBomb =[];
// MILESTONE 3
// play.addEventListener( "click", function(){

//     for (let x=0; x < 100; x++){
//         let square = document.createElement("div"); 
//         grid.append(square)
//         square.classList.add("base-square");
//         square.classList.add("bg-square")
//          square.addEventListener("click",function(){
    //     square.innerHTML += `il numero della cella è ${y}`;
    //     square.classList.add("selected");
    //     },{once:true})
//     }
// })

//MILESTONE 4
//FUNZIONE PER DAR INIZIO AL CICLO DELLA CREAZIONE DELLA GRIGLIA

function start(){
    grid.innerHTML ="";
    diff = document.getElementById("difficult").value;
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
    square.addEventListener("click",function(){
        if(contBomb.includes(y)){
            square.innerHTML += ` ${y} è una bomba`;
            square.classList.toggle("selected");
            square.classList.remove("bg-square")
        }else{
            square.innerHTML += `il numero della cella è ${y}`;
            square.classList.toggle("selected");
        }
    },{once:true})
   
    return square   
}


// EVENTO CHE DA IL VIA ALLA CREAZIONE DELLA GRIGLIA
play.addEventListener("click", start)

// //*******BONUS 3*********/
// let form = document.forms[`select-diff`];
// console.log(form)
// let menu = form.difficoltà
// console.log(menu)
// let opt = form.difficoltà.options ;
// console.log(opt)

///*****

// opt[1].selected = true;
// form.onsubmit = function(e){
//     e.preventDefault();
//     let optValue = this.difficoltà.value;
//     console.log(`il valore della select è : ${optValue}`);
//     // return optValue
// }

// menu.onchange = function aka(a){
//     a.preventDefault();
//     let optValue = this.selected = true
//     console.log(`il valore della select è : ${optValue}`);
//     let index = this.selectedIndex;
//     console.log(`il valore index della select è : ${index}`);
//     let z = this[this.selectedIndex].index;
//     console.log(z)
//     return z
// }
 

/// generazione bombe
function generateBomb(){
    // let diff = document.getElementById("difficult").value;
    if (diff == "easy"){

        for (let x = 0; x <= 5; x++){
            let bomb = Math.floor(Math.random() * (100 - 1) + 1);
            
            contBomb.push(bomb)
        }
    } else if( diff == "medium"){
        for (let x = 0; x <= 5; x++){
            let bomb = Math.floor(Math.random() * (81 - 1) + 1);
            
            contBomb.push(bomb)
        }
    }else if( diff == "hard"){
        for (let x = 0; x <= 5; x++){
            let bomb = Math.floor(Math.random() * (49 - 1) + 1);
            
            contBomb.push(bomb)
        }
    }
    
}
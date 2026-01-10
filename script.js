let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");

let turn= true;

let petterns = [
    [0,2,3],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turn === true){
        box.innerText = "O";
        turn = false;
       }
       else{
        box.innerText = "X"
        turn = true;
       }
       box.disabled = true;
       checkWinner();
    })
})

checkWinner = function(){
    for(const ele of petterns){
        console.log(ele);
    }
}
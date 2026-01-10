let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");

let turn= true;

let petterns = [
    [0,1,2],
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
    for(const pettern of petterns){
        let position1 = boxes[pettern[0]].innerText
        let position2 = boxes[pettern[1]].innerText
        let position3 = boxes[pettern[2]].innerText

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3){
                console.log("MOUSUMI",position1);
                boxes.forEach((box)=>{
                box.disabled = true;
                })
                alert(`Congratulations Winer Is : ${position1}`);
            }
        }
    }
}
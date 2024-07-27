let boxes = document.querySelectorAll(".box")
let res =document.querySelector(".reset")

let message = document.querySelector(".message")
let msg = document.querySelector(".msg")
let newg = document.querySelector(".newgame")

let turn   = true;


const winpatt = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let count = 0;
let win = false;
boxes.forEach((box) =>{

    box.addEventListener('click',() => {
        if(turn){
            
            box.innerText = "O";
            box.classList.remove("x")
            box.classList.add("o")
            
            turn  = false;
        }
        else{
            box.innerText = "X";
            box.classList.remove("o")
            box.classList.add("x")
            turn = true;
        }
        count++;
        box.disabled = true;

        

        let win = checkWinner();
        if(count==9 && !win){
            msg.innerText = `Game is Drawn`;
            message.classList.remove("hide")
           
        disableboxes();
        }
    });
});



const checkWinner = () =>{
    for(let pat of winpatt){
        // console.log(pat[0] , pat[1], pat[2]);
        // console.log(
        //     boxes[pat[0]].innerText,
        //     boxes[pat[1]].innerText,
        //     boxes[pat[2]].innerText
        // );
        let p1 = boxes[pat[0]].innerText;
        let p2 = boxes[pat[1]].innerText;
        let p3 = boxes[pat[2]].innerText;

        if(p1!="" && p2!="" , p3!=""){
            if(p1 ==p2 && p2==p3){
                win = true;
                console.log("Winner ",p1)
                showwinner(p1);
                return true;
            }
        }
    }
}

const draw = () =>{
    if(count == 9 && win ==false){
        
    }
}

const disableboxes =() =>{
    for(box of boxes){
        box.disabled  = true;
    }
}
const enableboxes =() =>{
    for(box of boxes){
        box.disabled  = false;
    }
}


const showwinner= (winner) =>{

    msg.innerText = `Congratulations, Winner is ${winner}`;
    message.classList.remove("hide")
        //ONCE GAME IS DONE , ALL BOXES SHOULD BE DISABLED
    disableboxes();
}



res.addEventListener('click',() =>{

    turn = true;
    enableboxes();
    boxes.forEach((box) =>{
        box.innerText="";
    })
    message.classList.add("hide")

});

newg.addEventListener('click',() =>{

    turn = true;
    enableboxes();
    boxes.forEach((box) =>{
        box.innerText="";
    })
    message.classList.add("hide")
});
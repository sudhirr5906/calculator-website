let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach(button=>{
button.addEventListener('click',(e)=> {
    if(e.target.innerHTML == "X"){
        // document.querySelector('input').value= '*';
        e.target.innerHTML ='*';
    }
    if(e.target.innerHTML == "C"){
        string=""
        document.querySelector('input').value= string;
    }
    else if(e.target.innerHTML == "="){
        string = eval(string);
        document.querySelector('input').value=string;
    }
    else {
        string =string + e.target.innerHTML;
        console.log(e.target);
        document.querySelector('input').value=string;
    }
    
})
})
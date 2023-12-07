



let currentDisplay='';
function UpdateDisplay(){
document.querySelector('#Display').value=currentDisplay;


}



function Empty(){
    currentDisplay='';
    UpdateDisplay();
    
    
    }
function one(){
    currentDisplay+='1';
    UpdateDisplay();

}
function Two(){
    currentDisplay+='2';
    UpdateDisplay();
}
function Three(){
    currentDisplay+='3';
    UpdateDisplay();
}
function Four(){
    currentDisplay+='4';
    UpdateDisplay();
}
function Five(){
    currentDisplay+='5';
    UpdateDisplay();
}
function Six(){
    currentDisplay+='6';
    UpdateDisplay();
}
function Seven(){
    currentDisplay+='7';
    UpdateDisplay();
}

function Eight(){
    currentDisplay+='8';
    UpdateDisplay();
}
function Nine(){
    currentDisplay+='9';
    UpdateDisplay();
}
function Zero(){
    currentDisplay+='0';
UpdateDisplay();
}
function Decimal(){
    currentDisplay+='.';
    UpdateDisplay();
}
//  this is operator section 

function Plus(){
    currentDisplay+='+';
    UpdateDisplay();
}
function Minus(){
    currentDisplay+='-';
    UpdateDisplay();
}

function Multiply(){
    currentDisplay+='*';
    UpdateDisplay();
}

function Devied(){
    currentDisplay+='/';
    UpdateDisplay();
}

function Equal(){
     let result=eval(currentDisplay);
     currentDisplay=result;
    UpdateDisplay();


}

function  Modulus() {
    currentDisplay+='%';
UpdateDisplay();
}



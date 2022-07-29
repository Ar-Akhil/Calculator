const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const buttomAnswer = document.querySelector(".answer_btm");
const topAnswer = document.querySelector(".answer_top");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".CE");
const clr = document.querySelector(".clear");
const squareRoot = document.querySelector(".root");
const plusOrMinus = document.querySelector(".plus_minus");
let sign = "";
let number = 0;
let firstnumber = 0;
let secondNumber = 0;

numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    if (buttomAnswer.textContent === "0") {
      buttomAnswer.textContent = "";
      buttomAnswer.textContent = e.target.textContent;
    } else {
      buttomAnswer.textContent += e.target.textContent;
    }
  })
);

addEventListener('keypress', (e) => {
  console.log(e.key)
let keyclicked = e.key;
buttomAnswer.textContent += keyclicked;
});

operators.forEach((operator) =>
  operator.addEventListener("click", (e) => {
    console.log('clicked')
    sign = e.target.textContent;
    if (firstnumber == '0') {
      firstnumber = buttomAnswer.textContent;
      topAnswer.textContent = firstnumber + sign;
      buttomAnswer.textContent = "";
    } else {
      secondNumber = buttomAnswer.textContent;
      buttomAnswer.textContent = "";
    }
  })
);

clr.addEventListener("click", () => {
  let len = buttomAnswer.textContent.length;
  if(len>1){
    buttomAnswer.textContent = buttomAnswer.textContent.slice(0,len-1);
  }else{
    buttomAnswer.textContent = '0';
  }
})

plusOrMinus.addEventListener("click", () => {
  if(buttomAnswer.textContent>1){
    buttomAnswer.textContent = '-' + buttomAnswer.textContent;
  }
})

equal.addEventListener("click", () => {
  secondNumber = buttomAnswer.textContent;
  topAnswer.textContent = firstnumber + sign + secondNumber + '=';
  switch (sign) {
    case "+":
      result = Number(firstnumber) + Number(secondNumber);
      break;
    case "-":
      result = Number(firstnumber) - Number(secondNumber);
      break;
    case "x":
      result = Number(firstnumber) * Number(secondNumber);
      break;
    case "/":
      result = Number(firstnumber) / Number(secondNumber);
      break;
  }
  buttomAnswer.textContent = result;
  firstnumber = result;
});

clear.addEventListener('click',()=>{
sign = "";
number = 0;
firstnumber = 0;
secondNumber = 0;
buttomAnswer.textContent = '0'
topAnswer.textContent = ''
})

squareRoot.addEventListener('click',()=>{
  let value = Math.sqrt(Number(buttomAnswer.textContent));
  buttomAnswer.textContent = value;
})
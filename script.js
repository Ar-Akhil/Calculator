const numbers= document.querySelectorAll('.number');
const operators= document.querySelectorAll('.operator');
const buttomAnswer = document.querySelector('.answer_btm');
const topAnswer = document.querySelector('.answer_top');
const equal = document.querySelector('.equal');
let calcvalue = null;
let number = 0;
let firstnumber = 0;
let secondNumber = 0;

numbers.forEach(number => 
  number.addEventListener('click', (e)=>{
  if(buttomAnswer.textContent === '0'){
    buttomAnswer.textContent = '';
    buttomAnswer.textContent = e.target.textContent;
  }else{
    buttomAnswer.textContent += e.target.textContent;
  }
  }))

operators.forEach(operator => 
  operator.addEventListener('click', (e)=>{
    sign = e.target.textContent;
    if(firstnumber == 0){
      firstnumber = buttomAnswer.textContent;
      console.log(firstnumber)
      buttomAnswer.textContent = '';
      return firstnumber;
    }else{
      secondNumber = buttomAnswer.textContent;
      console.log(secondNumber)
      return secondNumber;
    }
  }))

  equal.addEventListener('click',()=>{
    secondNumber = buttomAnswer.textContent;
    switch(sign){
    case '+':
      result = (Number(firstnumber) + Number(secondNumber));
      break;
    case '-':
      result = (Number(firstnumber) - Number(secondNumber));
      break;
    case 'x':
      result = (Number(firstnumber) * Number(secondNumber));
      break;
    case '/':
      result = (Number(firstnumber) / Number(secondNumber));
      break;
    }
    buttomAnswer.textContent = result;
  })
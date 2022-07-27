const numbers= document.querySelectorAll('.number');
const operators= document.querySelectorAll('.operator');
const buttomAnswer = document.querySelector('.answer_btm');
const topAnswer = document.querySelector('.answer_top');

numbers.forEach(number => 
  number.addEventListener('click', (e)=>{
  console.log('number clicked');
  if(buttomAnswer.textContent === '0'){
    buttomAnswer.textContent = '';
    buttomAnswer.textContent = e.target.textContent;
  }else{
    buttomAnswer.textContent += e.target.textContent;
  }
  }))

operators.forEach(operator => 
  operator.addEventListener('click', (e)=>
  console.log('operator clicked'))
)
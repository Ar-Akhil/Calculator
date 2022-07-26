const buttons = document.getElementById('button_grid').querySelectorAll('.number');
const btmAnswer = document.getElementById('ansbtm');
buttons.forEach(button =>
    button.addEventListener('click', e =>{
    let keyClicked = button.textContent;
    let display = btmAnswer.textContent;
    let key = e.target;
    let action = key.dataset.action;
    console.log(display)
    if (btmAnswer.textContent == 0) {
        btmAnswer.textContent = keyClicked; 
        console.log(keyClicked.textContent)
      } else {
        btmAnswer.textContent = display + keyClicked;
      }
    
}))
let text = document.querySelector('#text');
let button = document.querySelector('#button');
button.addEventListener('click',active);


function active() {
       text.textContent = 'Папа, С Днем Рождения !!!' 
       let timer = setInterval(frame,500); 
       function frame() {
        if (text.style.color == 'black') {
            text.style.transition = '1s';
            text.style.color = 'blue';
            text.style.textShadow = '0 0 20px blue'
        } else if (text.style.color == 'blue') {
            text.style.transition = '1s';
            text.style.color = 'red';
            text.style.textShadow = '0 0 20px red'
        } else if (text.style.color == 'red') {
            text.style.transition = '1s';
            text.style.color = 'yellow';
            text.style.textShadow = '0 0 20px yellow'
        } else {
            text.style.transition = '1s';
            text.style.color = 'black';
            text.style.textShadow = '0 0 20px black'
        }
       } 
        
}
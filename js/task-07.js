const input = document.querySelector('#font-size-control'); 
const span = document.querySelector('#text'); 
input.addEventListener ('input', Value) 

function Value (evt) {
    span.style.fontSize = evt.target.value + 'px'; 
}


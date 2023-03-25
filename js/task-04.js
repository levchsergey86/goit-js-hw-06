const buttonDecr = document.querySelector('[data-action="decrement"]');
const buttonIncr = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counteValue = 0;

buttonDecr.addEventListener('click', () => {
    counteValue -= 1;
    value.textContent = counteValue;
})

buttonIncr.addEventListener('click', () => {
    counteValue += 1;
    value.textContent = counteValue;
})

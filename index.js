const textareaElement = document.querySelector('#textarea'),
      totalCounterElement = document.querySelector('#change-total-character'),
      remainCounterElement = document.querySelector('#change-remain-character');

textareaElement.addEventListener('keyup', () => {
  console.log('key is pressed');
  updateCounter();
})

totalCounterElement.innerText = 0;
remainCounterElement.innerText = textareaElement.getAttribute('maxlength');

function updateCounter() {
  totalCounterElement.innerText = textareaElement.value.length;
  remainCounterElement.innerText = textareaElement.getAttribute('maxlength') -textareaElement.value.length;
}
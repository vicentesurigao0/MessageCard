const cardWrapper = document.getElementById('cardWrapper');
const instruction = document.getElementById('instruction');
let isOpen = false;

// Toggle card open/closed on click
cardWrapper.addEventListener('click', function() {
  isOpen = !isOpen;
  if (isOpen) {
    cardWrapper.classList.add('open');
    instruction.textContent = 'Click again to close 😊';
  } else {
    cardWrapper.classList.remove('open');
    instruction.textContent = 'Click the card to open! 👆';
  }
});
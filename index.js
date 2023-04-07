const toggleButton = document.querySelector('.bd-mode-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

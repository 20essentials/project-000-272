document.addEventListener('click', e => {
  if (e.target.matches('.side')) {
    e.target.closest('.container').classList.toggle('pause');
  }
});

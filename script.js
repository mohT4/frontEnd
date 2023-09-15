const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removePanelClasses();
    panel.classList.add('active');
  });
});

function removePanelClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

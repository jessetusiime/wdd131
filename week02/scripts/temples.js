document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.getElementById('hamburger');
const navigation = document.getElementById('primary-nav');

hamButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  hamButton.setAttribute('aria-expanded', isOpen);

  if (isOpen) {
    hamButton.innerHTML = '✖';
  } else {
    hamButton.innerHTML = `
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
        `;
  }
});

document.querySelector('.nav-toggle').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('open');
    this.classList.toggle('open');
});

function toggleEverything() {
    const links = document.querySelector('.linksMenu');
    links.classList.toggle('hidden');
    links.classList.toggle('visible');

    const left = document.getElementById('leftText');
    const right = document.getElementById('rightText');

    left.classList.toggle('visible');
    left.classList.toggle('hidden');

    right.classList.toggle('visible');
    right.classList.toggle('hidden');
}

const animals = document.querySelectorAll('.animal');

animals.forEach(animal => {
    animal.addEventListener('click', () => {
        animal.classList.toggle('selected');
    });
});
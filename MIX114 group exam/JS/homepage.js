const animals = document.querySelectorAll('.animal');

animals.forEach(animal => {
    animal.addEventListener('click', () => {
        animal.classList.toggle('selected');
    });
});


const tourOptions = document.querySelectorAll(".option");

tourOptions.forEach(option => {
    option.addEventListener("click", () => {
        // Fjern "selected" fra alle først hvis du bare vil tillate én valgt
        tourOptions.forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");
    });
});
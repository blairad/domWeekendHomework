document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript has loaded');

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleSubmitForm );


})

    const handleSubmitForm = function (event) {
        event.preventDefault();
    

    const characterList = document.createElement('li');
    characterList.classList.add('li');

    const list = document.querySelector('ul');
    list.appendChild(characterList);




}

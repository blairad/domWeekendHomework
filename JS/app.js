document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript has loaded');

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleSubmitForm );
})

    const handleSubmitForm = function (event) {
        event.preventDefault();
    
        const characterListItem = createCharacterListItem(event.target);
        const characterList = document.querySelector('#character-list');
        characterList.appendChild(characterListItem);

        event.target.reset();

    }

        const createCharacterListItem = function (form) {
            const characterListItem = document.createElement('li');
            characterListItem.classList.add('character-list-item');
            return characterListItem;
        }
    // const list = document.querySelector('ul');
    // list.appendChild(characterList);

    // const firstNameElement = document.createElement('h2');
    // firstNameElement.textContent = `${event.target.firstName.value}`
    // firstNameElement.classList.add('h2');''








document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript has loaded');

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleSubmitForm );
})

    const handleSubmitForm = function (event) {
        event.preventDefault();
    

        const characterListItem = document.createElement('li');
        characterListItem.classList.add('li');

        const list = document.querySelector('ul');
        list.appendChild(characterListItem);
        
        const firstName = document.createElement('h2');
        firstName.textContent = `${event.target.firstName.value} `
        firstName.classList.add('h2');

        const lastName = document.createElement('h2');
        lastName.textContent = `${event.target.lastName.value}`
        lastName.classList.add('h2');
        
        const showTitle = document.createElement('h3');
        showTitle.textContent = `${event.target.show.value}`
        showTitle.classList.add('h3');

        const characterOccupation = document.createElement('p');
        characterOccupation.textContent = `${event.target.Occupation.value}`
        characterOccupation.classList.add('p');

        characterListItem.appendChild(firstName); 
        characterListItem.appendChild(lastName);
        characterListItem.appendChild(showTitle);
        characterListItem.appendChild(characterOccupation);
        
        event.target.reset();
        }

    // const handelDeleteAllClick = function (event){
    // const characterListItem = document.querySelector('#DeleteAll');
    // characterListItem.innerHTML = '' ;


//         var btn = document.getElementById('btn');
//         btn.onclick = function () {
//             document.getElementById('DeleteAll').remove();
//             this.remove();
// };

        
    





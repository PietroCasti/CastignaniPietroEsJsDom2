
let cardsWrapper = document.querySelector('#cardsWrapper');
let showContactBtn = document.querySelector('#showContactBtn');
let addContactBtn = document.querySelector('#addContactBtn');


let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');


let removeContactBtn = document.querySelector('#removeContactBtn');
let searchContactBtn = document.querySelector('#searchContactBtn');




let rubrica = {

    contacts: [
        { name: 'Mirko', number: 3331111111 },
        { name: 'Pasquale', number: 3332222222 },
        { name: 'Benny', number: 3332333333 },
        { name: 'Gianmarco', number: 3334444444 },
        { name: 'Asia', number: 3335555555 },
        { name: 'Vincenzo', number: 3336666666 },
    ],

    showContact: function (array) {

        cardsWrapper.innerHTML = '';

        array.forEach((contact) => {
            let div = document.createElement('div');
            div.classList.add("col-12", "col-md-8", "my-2");
            div.innerHTML = `
                <div class="card-custom">
                    <p class="m-0">${contact.name}</p>
                    <p class="m-0">${contact.number}</p>
                    <p class="m-0"><i class="fa-solid fa-trash fa-xl icon"></i></p>
                </div>
            `
            cardsWrapper.appendChild(div)
        })
        let icons = document.querySelectorAll('.icon')

        icons.forEach((icon, i) => {
            icon.addEventListener('click', () => {
                // console.log(this.contacts[i].name);
                let nameToDelete = array[i].name;
                this.removeContact(nameToDelete);
            })
        })

    },



    addContact: function (newname, newnumber) {

        this.contacts.push({ name: newname, number: newnumber })
        this.showContact(this.contacts)
    },



    removeContact: function (removedName) {
        let names = this.contacts.map((contact) => contact.name.toLowerCase())
        let index = names.indexOf(removedName.toLowerCase())
        // console.log(index);
        if (index >= 0) {
            this.contacts.splice(index, 1);
            this.showContact(this.contacts);
            showContactBtn.innerHTML = 'Nascondi rubrica';
        }
        else {
            alert('Contatto non presente in rubrica')
        }
    },


    searchContact: function (searchedName) {

        let filtered = this.contacts.filter((contact) => searchedName.toLowerCase() == contact.name.toLowerCase());

        if (filtered.length > 0) {
            this.showContact(filtered);
            showContactBtn.innerHTML = 'Nascondi rubrica';
            confirm = true
        } else {
            alert('Nome non presente in rubrica!');
            nameInput.value = '';
        }
    }

}


let confirm = false;


// Lista di eventi sui vari Buttons

// !4
showContactBtn.addEventListener('click', () => {

    if (confirm == false) {
        rubrica.showContact(rubrica.contacts);
        confirm = true;
        showContactBtn.innerHTML = 'Nascondi rubrica';
    } else {
        cardsWrapper.innerHTML = '';
        confirm = false;
        showContactBtn.innerHTML = 'Mostra rubrica';

    }
})




addContactBtn.addEventListener('click', () => {

    if (nameInput.value != '' && numberInput.value != '' && numberInput.value.length == 10) {
        confirm = true;
        rubrica.addContact(nameInput.value, numberInput.value);
        showContactBtn.innerHTML = 'Nascondi Rubrica';
        nameInput.value = '';
        numberInput.value = '';

    } else {
        alert('Attenzione, inserisci correttamente nome e numero di esattamente 10 cifre del nuovo utente');
        nameInput.value = '';
        numberInput.value = '';
    }

})


removeContactBtn.addEventListener('click', () => {
    confirm = true;
    rubrica.removeContact(nameInput.value);
    nameInput.value = '';
})


searchContactBtn.addEventListener('click', () => {
    rubrica.searchContact(nameInput.value);
    nameInput.value = '';
    
})

console.log("WELCOME TO THE TODO LIST");
let enterButton = document.getElementById('enter');
let input = document.getElementById('userInput');
let ul = document.querySelector('ul');
let item = document.getElementsByTagName('li');

function createListElement() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function croosOut() {
        li.classList.toggle('done');
    }
    li.addEventListener('click', croosOut);

    function deleteListItem() {
        li.classList.add('delete');
    }


    let dBtn = document.createElement('button');
    dBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dBtn);
    dBtn.addEventListener('click', deleteListItem);
}

function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress() {
    if (inputLength() > 0 && event.which === 13) { // for enter key the skyvalue is 13
        createListElement();
    }
}

enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
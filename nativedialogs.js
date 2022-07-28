
let btnAlert = document.getElementById('btnAlert');
let btnConfirm = document.getElementById('btnConfirm');
let btnPrompt = document.getElementById('btnPrompt');
let btnSaferPrompt = document.getElementById('btnSaferPrompt');

function buttonActions() {
    btnAlert.addEventListener('click', () => {
        alert('Alert Button was Clicked!!')
    });
    btnConfirm.addEventListener('click', clickConfirmHandler);
    btnPrompt.addEventListener('click', clickPromptHandler);
    btnSaferPrompt.addEventListener('click', clickSaferPromptHandler);
}

// function clickAlarmHandler(){
//     alert('You Just Clicked Me - The Alert Button!!')
// }

function clickConfirmHandler() {
    let output = document.getElementById('confirmBtnOutput');
    let confirmResult = confirm('Confirm Button was clicked!! Make your choice below!');
    output.innerHTML = `The value returned by the confirm method is: ${confirmResult}`;
}

function clickPromptHandler() {
    let output = document.getElementById('promptBtnOutput')
    let favPet = prompt('What is your favorite pet?', "Dog");
    if (favPet == null) {
        output.innerHTML = 'Hmm, You didn\'t enter anything';
    } else {
        output.innerHTML = `You are a ${favPet} person`;
    }
}


function clickSaferPromptHandler() {

    let output = document.getElementById('saferPromptBtnOutput')
    let dirtyFavPet = prompt('What is your favorite pet?', "Dog");
    let cleanFavPet = DOMPurify.sanitize(dirtyFavPet);
    if (cleanFavPet == null) {
        output.innerHTML = 'Hmm, You didn\'t enter anything';
    } else {
        output.innerHTML = `You are a ${cleanFavPet} person`;
    }

}

window.addEventListener('DOMContentLoaded', function () {
    //my function
    buttonActions();
});

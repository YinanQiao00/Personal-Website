/*  main three buttons  */
let btnAlert = document.getElementById('btnAlert');
let btnConfirm = document.getElementById('btnConfirm');
let btnSaferPrompt = document.getElementById('btnSaferPrompt');

/*  all the ok buttons  */
let okAlert = document.getElementById('okAlertBtn');
let okConfirm = document.getElementById('okConfirmBtn');
let okPrompt = document.getElementById('okPromptBtn');

/*  all the cancel buttons   */
let cancelConfirm = document.getElementById('cancelConfirmBtn');
let cancelPrompt = document.getElementById('cancelPromptBtn');

/*  All the customized dialogs  */
let btnAlertDialog = document.getElementById('alertBtnDialog');
let btnConfirmDialog = document.getElementById('confirmBtnDialog');
let btnSaferPromptDialog = document.getElementById('promptBtnDialog');

function buttonActions() {
    /* Alert Buttons*/
    btnAlert.addEventListener('click', () => {
        btnAlertDialog.show();
    });
    okAlert.addEventListener('click', () => {
        btnAlertDialog.close();
    });

    /* Confirm Buttons*/
    btnConfirm.addEventListener('click', () => {
        btnConfirmDialog.show();
    });
    okConfirm.addEventListener('click', () => {
        btnConfirmDialog.close();
        let output = document.getElementById('confirmBtnOutput');
        output.innerHTML = `Confirm result: True`;
    });
    cancelConfirm.addEventListener('click', () => {
        btnConfirmDialog.close();
        let output = document.getElementById('confirmBtnOutput');
        output.innerHTML = `Confirm result: False`;
    });

    /* Prompt Buttons*/
    btnSaferPrompt.addEventListener('click', () => {
        btnSaferPromptDialog.show();
    });
    okPrompt.addEventListener('click', () => {
        btnSaferPromptDialog.close();
        let pet = document.getElementById('favPet').value;
        let cleanFavPet = DOMPurify.sanitize(pet);
        let output = document.getElementById('saferPromptBtnOutput');
        output.innerHTML = `You are a ${cleanFavPet} person`;

    });
    cancelPrompt.addEventListener('click', () => {
        btnSaferPromptDialog.close();
        let output = document.getElementById('saferPromptBtnOutput');
        output.innerHTML = 'Hmm, You didn\'t enter anything';
    });
}


window.addEventListener('DOMContentLoaded', function () {
    //my function
    buttonActions();
});

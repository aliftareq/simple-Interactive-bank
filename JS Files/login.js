// here these code is for make login interActive

//step-1 add click evetn handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {

    // always remember to get the value use ".value"

    // step-2 : get the value of email 
    const emailfield = document.getElementById('user-email');
    let email = emailfield.value

    //step - 3: getting  password
    const passwordField = document.getElementById('user-password');
    let password = passwordField.value;

    //Danger : DO NOT VARIFY EMAIL & PASSWORD IN CLIENT SIDE.

    //step - 4: varify email and password
    if (email === 'sontan@bap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('chabi kaha haaaaaii?? !!!');
        // var audio = new Audio('audioFiles\chabi_kahan_hai.mp3');
        // audio.play();
    }
})
const formparent = document.getElementById('tilmeld')
const myName = document.getElementById('name')
const myLastname = document.getElementById('lastname')
const myAdr = document.getElementById('adr')
const myZip = document.getElementById('zip')
const myEmail = document.getElementById('email')

const myButton = document.getElementById('button')



myButton.addEventListener('click', (event)=> {
    event.preventDefault();

    let myTrimmedName = myName.value.trim();
    let myTrimmedLastname = myLastname.value.trim();
    let myTrimmedAdr = myAdr.value.trim();


    if (myTrimmedName.length > 2 && myTrimmedLastname.length > 2 && myTrimmedAdr.length > 2 && validateEmail(myEmail.value) && validateForm(zip.value)) 
    {
        console.log('formen er udfyldt korrekt');

        formParent.innerHTML = '<h2>tak for tilmeldingen</h2>';
    }
    
    else

    if (myTrimmedName.length < 2) {
        console.log('Name IKKE godkendt')
        myName.classList.toggle('errorMarking');
    }

    if (myTrimmedLastname.length < 2) {
        console.log('LastName IKKE godkendt')
        myLastname.classList.toggle('errorMarking');
    }

    if (myTrimmedAdr.length < 2) {
        console.log('Adr IKKE godkendt')
        myAdr.classList.toggle('errorMarking');
    }
    if(validateEmail(myEmail.value)){
    }
    else{
        console.log('Email ikke godkendt')
        alert('Email ikke godkendt')
        myEmail.classList.toggle('errorMarking');
    }

    if (validateForm(zip)){

    }
    else{
        console.log('zip ikke godkendt')
        alert ('zip ikke godkendt')
        myZip.classList.toggle('errorMarking');
    }


    function validateEmail(email) {
        // Definer en simpel regulær udtryk for email-validering
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Test om emailen matcher det regulære udtryk
        let isValid = emailRegex.test(email);
    
        // Returner resultatet af valideringen (true eller false)
        return isValid;}
    


        function validateForm(zip) {
            
            let zipregex = /^\d+$/;
            
            let isValid = zipregex.test(zip)
            
            return isValid;}
})
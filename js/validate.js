function validateForm(){
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const message=document.getElementById('message').value;

    const errorName=document.getElementById('error-name');
    const errorEmail=document.getElementById('error-email');
    const errorMessage=document.getElementById('error-message');

    errorName.textContent='';
    errorEmail.textContent='';
    errorMessage.textContent='';

    let isValid=true;

    if(name===""){
        errorName.textContent='Please fill out this field.';
        isValid=false;
    }
    else if(name.length<3){
        errorName.textContent='The name cannot be less than 3 letters';
        isValid=false;
    }


    if(email===""){
        errorEmail.textContent='Please fill out this field.';
        isValid=false;
    }

    if(message===""){
        errorMessage.textContent='Please fill out this field.';
        isValid=false;
    }

    return isValid;

}
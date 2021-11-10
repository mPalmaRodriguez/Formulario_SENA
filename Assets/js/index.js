let form = document.getElementById('form')
form.addEventListener ('submit', (event)=>{
    requiredFields.forEach((input) =>{
        valid = valid| requiredValue (input.input);
    });
    if (!valid){
        event.preventDefault
    }
});
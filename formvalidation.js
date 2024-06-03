let nameError=document.getElementById('name_error')
let phoneError=document.getElementById("phone_error")
let emailError=document.getElementById('email_error')
let messageError=document.getElementById('message_error')
let submitError=document.getElementById('submit_error')


function validateName(){
    var name=document.getElementById('contact_name').value

    if(name.length==0){
        nameError.innerHTML='Name is required'
        return false
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameError.innerHTML='Write full name'
        return false
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true
}

function validatePhone(){
    var phone=document.getElementById('contact_phone').value
    if(phone.length==0){
        phoneError.innerHTML='Phone is required'
        return false
    }
    if(phone.length!==10){
        phoneError.innerHTML='Enter 10 digits phone number'
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Enter valid number'
        return false
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true
}

function validateEmail(){
    var email= document.getElementById('contact_email').value
    if(email.length==0){
        emailError.innerHTML='Email is required'
        return false
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)){
        emailError.innerHTML='Enter valid email'
        return false
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
}


function validateMsg(){
    var message=document.getElementById('contact_msg').value
    let required=30
    let left= required-message.length
    if(left>0){
        messageError.innerHTML=left+'more characters required'
        return false
    }
    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
}

function validateForm(){
    submitError.style.display='block'
    if(!validateName()|| !validateEmail()|| !validateMsg()||!validatePhone()){
        submitError.innerHTML ='Please fix the problem to submit'
        setTimeout(function(){
            submitError.style.display='none'
        },3000);
        return false
    }
}
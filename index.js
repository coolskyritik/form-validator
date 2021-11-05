const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

function showError(input,message){
    var formcontrol=input.parentElement;
    formcontrol.className='form-control error';
    const small=formcontrol.querySelector('small');
    small.innerText=message;
}
function showSuccess(input) {
    const formcontrol=input.parentElement;
    formcontrol.className='form-control success';
}

function CheckEmail(input) {0
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input)){
        showSuccess(input);
    }else{
        showError(input,`Email is invalid`);
    }
    
}

function checkrequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim()===''){
            showError(input,`${Fieldname(input)} is required`);
        }
        else{
            showSuccess(input);
        }
        
    });
    
}
function Fieldname(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
}



form.addEventListener('submit',function (e) {
    e.preventDefault();
    console.log("submit");
    

    checkrequired([username,email,password,password2]);
    CheckEmail(email);
    
})

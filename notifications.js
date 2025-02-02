let toastBox=document.getElementById('toastBox')
let successMsg='<i class="fa-solid fa-check"></i> Successfully Submited'
let ErrorMsg='<i class="fa-solid fa-xmark"></i> Please fix the error'
let InvalidMsg='<i class="fa-solid fa-circle-exclamation"></i> Invalid input, Check again'

function showToast(msg){
    let toast=document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML= msg
    toastBox.appendChild(toast)

    if(msg.includes('error')){
        toast.classList.add('error')
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid')
    }

    setTimeout(() => {
        toast.remove()
    }, 6000);
}
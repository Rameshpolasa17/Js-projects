let imageBox=document.getElementById('img_box')
let qrImage=document.getElementById('qrImg')
let qrText=document.getElementById('qrText')

function generateQr(){
    if(qrText.value.length>0){
        qrImage.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ qrText.value
        imageBox.classList.add('show_img')
    }else{
        qrText.classList.add('error')
        setTimeout(()=>{
            alert('Enter the Url or Text')
            qrText.classList.remove('error')
        },1000)
    }
}
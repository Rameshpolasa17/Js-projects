const quote=document.getElementById('quote')
const author=document.getElementById('author')
let image=document.querySelector('.night_mode')
const api_url='https://api.quotable.io/random'
async function getQuote(url){
    const responce= await fetch(url)
    var data= await responce.json()
    quote.innerHTML=data.content
    author.innerHTML=data.author
}
getQuote(api_url)

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML+"---by "+author.innerHTML,"Tweet Window","width=600, height=300");
}

image.onclick=function(){
    document.body.classList.toggle('dark_mode')
    if(document.body.classList.contains('dark_mode')){
        image.src="img/day-mode.png"
    }else{
        image.src="img/night-mode.png"
    }
}


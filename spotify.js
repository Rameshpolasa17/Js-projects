console.log("Hello Anika");
console.log("Hello");
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myprogressbar');
let gif= document.getElementById('gif');

let songs=[
    {songname:"Oo Antava", filepath:"songs/1.mp3", coverpath:"img/samantha.jpg"},
    {songname:"Jennifer Lopez", filepath:"songs/2.mp3", coverpath:"img/samantha.jpg"},
    {songname:"Nuvvunte", filepath:"songs/3.mp3", coverpath:"img/samantha.jpg"},
    {songname:"Chali chaliga", filepath:"songs/1.mp3", coverpath:"img/samantha.jpg"},
    {songname:"Appudo Ippudo", filepath:"songs/1.mp3", coverpath:"img/samantha.jpg"},
    {songname:"My heart is beating", filepath:"songs/1.mp3", coverpath:"img/samantha.jpg"},
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
});
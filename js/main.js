const showplay = document.querySelector('.showplay');
const showpause = document.querySelector('.showpause');
const play = document.querySelector('.play');
const pause = document.querySelector('.stop');
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const forward = document.querySelector('.forward')
const back = document.querySelector('.back')
const range = document.querySelector('input')
const showsinger = document.querySelector('.showsong .songartiest')
const showsong = document.querySelector('.showsong .songname')
const showimg = document.querySelector('.showsong img')


const songbox = document.querySelectorAll('.songbox')
const songs = document.querySelectorAll('audio')
const songsinfo = document.querySelectorAll('.songinfo')
const img = document.querySelectorAll('.songscontainer img')
const songname = document.querySelectorAll('.songscontainer .songname')
const singer = document.querySelectorAll('.songscontainer .songartiest')

let activeindex = 0;

window.addEventListener('load', function () {
    range.value = '0'
})
for (let i = 0; i < songsinfo.length; i++) {
    console.log('test for')
    songsinfo[i].addEventListener('click', function () {
        reseter()
        songs[activeindex].pause();


        showbtnpause();
        activeindex = i;
        songplay();

    })
}
range.addEventListener('input', function () {
    songs[activeindex].currentTime = range.value;
})
if (songs[activeindex].ended == false) {
    setInterval(function () {
        range.value = songs[activeindex].currentTime;
        if(songs[activeindex].ended == true) {
            reseter() 
            activeindex = activeindex + 1;
            if(activeindex == 9){
                activeindex=0;
            }
            songplay()
        }
    }, 10)

}


pause.addEventListener('click', function () {
    songs[activeindex].pause();
    showbtnplay();
})
showpause.addEventListener('click', function () {
    songs[activeindex].pause();
    showbtnplay();
})
play.addEventListener('click', function () {
    songplay()
    showbtnpause();
})
showplay.addEventListener('click', function () {
    songplay()
    showbtnpause();
})

prev.addEventListener('click',function(){
    songs[activeindex].pause();
    songs[activeindex].currentTime=0;
    showbtnpause()
    reseter();
    activeindex = activeindex-1
    if(activeindex<0){
        activeindex = 8;
    }
    songplay();
})
next.addEventListener('click',function(){
    songs[activeindex].pause();
    songs[activeindex].currentTime=0;
    showbtnpause()
    reseter();
    activeindex = activeindex+1
    if(activeindex==9){
        activeindex=0;
    }
    songplay();
})
forward.addEventListener('click',function(){
    songs[activeindex].currentTime = songs[activeindex].currentTime + 10
})
back.addEventListener('click',function(){
    songs[activeindex].currentTime = songs[activeindex].currentTime - 10
})

function showbtnpause() {
    pause.classList.remove('hidden');
    play.classList.add('hidden');
    showplay.classList.add('hidden');
    showpause.classList.remove('hidden');
}
function showbtnplay() {
    pause.classList.add('hidden');
    play.classList.remove('hidden');
    showplay.classList.remove('hidden');
    showpause.classList.add('hidden');
}
function songplay(){
    range.max = songs[activeindex].duration;
    songs[activeindex].play()
    showimg.src = img[activeindex].src
    showsinger.textContent = singer[activeindex].textContent
    showsong.textContent = songname[activeindex].textContent
    songbox[activeindex].classList.add('active')
}
function reseter(){
    songbox[activeindex].classList.remove('active')
}
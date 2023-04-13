// initialize variable
let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let proo = document.getElementById('pro');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
console.log("welcome to spotify")
let music = [
    { songName: "Apna bna le -bhediya", filePath: "music/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Mera_pyar tera_pyar-", filePath: "music/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "song- bang-bang", filePath: "music/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Pal Full Video - Jalebi_Arijit  ", filePath: "music/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "Backbon hardhisandhu song", filePath: "music/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "Tum Se Full Video - Jalebi_Jubin ", filePath: "music/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "Kesariya-bharahmastra", filePath: "music/7.mp3", coverPath: "cover/7.jpg" },
    { songName: "Nashe-se_chadh_gyi", filePath: "music/8.mp3", coverPath: "cover/8.jpg" },
    { songName: "O Bedardiya tu_jhuthi..", filePath: "music/9.mp3", coverPath: "cover/9.jpg" },
    { songName: "sun_rha_hai na-tu ashique2", filePath: "music/10.mp3", coverPath: "cover/10.jpg" }

]

songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = music[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = music[i].songName;
})

// audioElement.play();

// handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
        document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        document.getElementById(`${songIndex}`).classList.add('fa-circle-play');
        document.getElementById(`${songIndex}`).classList.remove('fa-circle-pause');
    }
})

proo.addEventListener('change', () => {
    audioElement.currentTime = proo.value * audioElement.duration / 100;
})

const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
       
       console.log(e.target);
        songIndex  = parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `music/${ songIndex + 1}.mp3`;
        mastersongName.innerText = music[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
      
    })
})



document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `music/${ songIndex + 1}.mp3`;
    mastersongName.innerText = music[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
   
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
    if(songIndex==0){
        document.getElementById(9).classList.add('fa-circle-play');
    document.getElementById('9').classList.remove('fa-circle-pause');
    }
    else{
    document.getElementById(`${songIndex-1}`).classList.add('fa-circle-play');
    document.getElementById(`${songIndex-1}`).classList.remove('fa-circle-pause');
    }
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `music/${ songIndex + 1}.mp3`;
    mastersongName.innerText = music[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
    
    document.getElementById(`${songIndex+1}`).classList.add('fa-circle-play');
    document.getElementById(`${songIndex+1}`).classList.remove('fa-circle-pause');
})


// listen ro events 
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate')
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    proo.value = progress;
    console.log(progress)
    if(progress===100){
        if(songIndex>=9){
            songIndex=0;
        }
        else{
            songIndex+=1;
        }
        audioElement.src = `music/${ songIndex + 1}.mp3`;
        mastersongName.innerText = music[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
       
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
        document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
        
        if(songIndex==0){
            document.getElementById(9).classList.add('fa-circle-play');
        document.getElementById('9').classList.remove('fa-circle-pause');
        }
        else{
        document.getElementById(`${songIndex-1}`).classList.add('fa-circle-play');
        document.getElementById(`${songIndex-1}`).classList.remove('fa-circle-pause');
        }
        
       
        }
    }
    
)
  


function makePlaylist(){


let purpose =
document.getElementById("purpose").value;



let mood =
document.getElementById("mood").value;



let title="";

let reason="";



if(mood=="피곤함"){


title="🌙 Calm Night Focus";


reason=
"피곤한 상태이므로 잔잔한 피아노와 Ambient 음악을 추천합니다.";


}


else if(mood=="불안함"){


title="🌧 Rainy Study Room";


reason=
"긴장을 줄이고 안정감을 주는 음악을 추천합니다.";


}


else{


title="🔥 Deep Focus Playlist";


reason=
"집중력을 유지할 수 있는 Lo-fi 음악을 추천합니다.";


}




document.getElementById("title").innerHTML
=
title;



document.getElementById("reason").innerHTML
=
`
공부 목적 : ${purpose}<br><br>
${reason}
`;



document.getElementById("youtube").href
=
"https://www.youtube.com/results?search_query=lofi+study+music";



document
.getElementById("result")
.classList
.remove("hidden");


}








let songs=[


{title:"Midnight Study Room", file:"120 film.mp3"},

{title:"Rainy Focus", file:"blur rose.mp3"},

{title:"Deep Concentration", file:"breeze.mp3"},

{title:"Morning Focus", file:"Apple Butterscotch.mp3"},

{title:"Blue Study", file:"cocoa pen.mp3"},

{title:"Silent Library", file:"click.mp3"},

{title:"Night Piano", file:"inori.mp3"},

{title:"Deep Work", file:"supercalifragilisticexpialidocious.mp3"},

{title:"Rain Window", file:"Sound of Rain.mp3"},

{title:"Study Space", file:"old metronome.mp3"},

{title:"Calm Memory", file:"Walk!.mp3"},

{title:"Focus Flow", file:"FOR WHAT.mp3"},

{title:"Dreamy Study", file:"lucid dream.mp3"},

{title:"Final Concentration", file:"yume no toori.mp3"}

];





let currentSong=0;


let audio =
document.getElementById("player");





function playSong(index){


currentSong=index;


audio.src =
songs[index].file;


document.getElementById("songTitle").innerHTML
=
songs[index].title;


audio.play();


}







function nextSong(){


currentSong++;


if(currentSong >= songs.length){

currentSong=0;

}


playSong(currentSong);


}







function prevSong(){


currentSong--;


if(currentSong < 0){

currentSong=songs.length-1;

}


playSong(currentSong);


}






audio.addEventListener(
"ended",

function(){

nextSong();

}

);






let playlistBox =
document.getElementById("playlist");



songs.forEach((song,index)=>{


let item =
document.createElement("p");


item.innerHTML =
"🎼 " + song.title;



item.onclick=function(){

playSong(index);

};



playlistBox.appendChild(item);


});
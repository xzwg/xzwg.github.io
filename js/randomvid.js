const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get('s');

const videoSettings = '?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&enablejsapi=1&amp;';
let video = new Array();


//theraceee
video.push({
	video_id: 'P-qe28ZCHxY',
	video_name: "devil",
	id: 'P-qe28ZCHxY' + videoSettings + 'start=0',
	note: 'race',
	volume: 35,
}); 
//theracf
video.push({
	video_id: '4KE4wRoT8bA',
	video_name: "devild",
	id: '4KE4wRoT8bA' + videoSettings + 'start=0',
	note: 'rachse',
	volume: 35,
}); 
//theracff
video.push({
	video_id: 'TFU1Tg3HJDg',
	video_name: "devilde",
	id: 'TFU1Tg3HJDg' + videoSettings + 'start=0',
	note: 'rachseg',
	volume: 35,
}); 
//theracffg
video.push({
	video_id: 'UJWrfMlUO0Q',
	video_name: "devildec",
	id: 'UJWrfMlUO0Q' + videoSettings + 'start=0',
	note: 'rachsegv',
	volume: 35,
}); 


let randVid = songId && songId >= 0 && songId < video.length ? songId : Math.floor(video.length * Math.random());

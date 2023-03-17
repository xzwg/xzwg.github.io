const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get('s');

const videoSettings = '?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&enablejsapi=1&amp;';
let video = new Array();


//theraceee
video.push({
	video_id: 'VyB0xHOiXAg',
	video_name: "devil",
	id: 'VyB0xHOiXAg' + videoSettings + 'start=0',
	note: 'race',
	volume: 35,
}); 


let randVid = songId && songId >= 0 && songId < video.length ? songId : Math.floor(video.length * Math.random());

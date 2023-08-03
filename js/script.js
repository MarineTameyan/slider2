let sliderImg = document.querySelector('.slider-img');
let images = ['nkar1.jpg', 'nkar2.jpg', 'nkar3.jpg', 'nkar4.jpg', 'nkar5.jpg' , 'nkar6.jpg'];
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let imgContain = document.getElementsByClassName('imgs')
let index = 0;
let interval

function prev(){
    if (index < 0) {
        index--
    }
	return setImage();			 
}

function next(){
    if (index > 0) {
        index++
    }
	return setImage();			 
}

function setImage(){
	return sliderImg.setAttribute('src', "images/"+images[index]);
	
}

function startSlider(){
	interval = setInterval(next, 1000)
}

startBtn.addEventListener('click', startSlider);

function stopSlider() {
	clearInterval(interval);
  }

stopBtn.addEventListener('click', stopSlider)


for(let i = 0; i < imgContain.length; i++){
	imgContain[i].addEventListener('click', function(){
	sliderImg.src = imgContain[i].src
	index = i
	})
}

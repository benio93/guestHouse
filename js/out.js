var next = document.querySelector('.right');
var prev = document.querySelector('.left')

var sliderImages = document.querySelectorAll('.slider>ul>li')
var index = 0;
next.addEventListener('click',function(){
  sliderImages[index].classList.add('sliderVisibility')
  index += 1
    if( index > 2){
      index = 0
    }
  sliderImages[index].classList.remove('sliderVisibility')
})

prev.addEventListener('click',function(){
  sliderImages[index].classList.add('sliderVisibility')
  index -= 1
    if( index < 0){
      index = 2
    }
  sliderImages[index].classList.remove('sliderVisibility')
})



var openAbout = document.querySelector('#menu-list').firstElementChild;


openAbout.addEventListener('mouseover', function(){

})

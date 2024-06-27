const slider = document.getElementById('timeRange');
const min_price_slider = document.getElementById('min-price');
const max_price_slider = document.getElementById('max-price');
var inputs = document.querySelectorAll('.main-header-forms input');
if(inputs){
  inputs.forEach(function(key, value){
     key.addEventListener('input', function(){
        
        getting_data();
        
     })
  })
}

slider.addEventListener('input', function(e) {
   if(e.id = 'timeRange'){
      oneRangeSlide();
   }
   if(e.id = 'min-price'){
    slideOne();
  }
  if(e.id = 'max-price'){
    slideTwo();
  }
  
});


function oneRangeSlide(){
  const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  const trackColor = `linear-gradient(to right, #0C73FE 0%, #0C73FE ${value}%, #ababab ${value}%, #ababab 100%)`;
  const v = slider.value;
  slider.parentNode.parentNode.querySelector('input[type="number"]').value = v;
  slider.style.setProperty('--track-color', trackColor);
}
oneRangeSlide();


let sliderOne = document.getElementById("min-price");
let sliderTwo = document.getElementById("max-price");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("min-price").max;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  
  fillColor();
  const min_price = min_price_slider.value;
  min_price_slider.parentNode.parentNode.querySelector('input.min-price').value = min_price;
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  fillColor();
  const max_price = max_price_slider.value;
  max_price_slider.parentNode.parentNode.querySelector('input.max-price').value = max_price;
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

slideOne();
slideTwo();



function getMonthName(month) {
  const months = ["январья", "февральз", "марта", "апрелья", "майа", "июнья", 
                  "июлья", "августа", "сетябрья", "октобрья", "ноябрья", "декабрья"];
  return months[month];
}

function getFormattedDate(dt) {
  if(dt === ''){
    var dt = new Date();
   
    var day = dt.getDate();
    var month = dt.getMonth();
    var year = dt.getFullYear();
    const monthName = getMonthName(month);
    return `${day} ${monthName} ${year}`;
   
  }else{
    dt = dt;
    const parts = dt.split("-");
    const year = parseInt(parts[0]); 
    const month = parseInt(parts[1]) - 1; 
    const day = parseInt(parts[2]); 
    const monthName = getMonthName(month);
    return `${day} ${monthName} ${year}`;
  }
  
  
 
}

function getting_data(){
  const person = document.querySelector('#person');
  const time = document.querySelector('#time');
  const dt = document.querySelector('#date');
  const timeRange = document.querySelector('#timeRange');
  
  document.querySelector('.persons').innerText = person.value;
  document.querySelector('.hours').innerText = time.value;
  const getDate = getFormattedDate(dt.value);
  document.querySelector('.form-results span.date').innerText = getDate;
  document.querySelector('.start-date').innerText = timeRange.value + ':00';


};
getting_data();
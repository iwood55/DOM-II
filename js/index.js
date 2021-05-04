// Your code goes here
const logo = document.querySelector('h1')
const navLinks = document.querySelector('.nav')
const header = document.querySelector('h2')
const paragraph = document.querySelector('p')
const image = document.querySelector('div.image-content');
const nav =document.querySelector('.nav-link')


/* 1. */
logo.addEventListener('click', function(event){
    event.target.style.color = 'green';
});
/* 2. */
navLinks.addEventListener('mouseover', function(event){
    event.target.style.color = 'blue';
    setTimeout(function() {
        event.target.style.color = "";
      }, 400);
});
/* 3. */
navLinks.addEventListener('mouseout', function(event){
    event.target.style.color = 'orange';
})
/* 4. */
function zKey(event){
    if(event.key === 'z'){
        event.target.style.background = 'red'
    }
}
document.addEventListener('keydown', zKey)
/* 5. */
function mKey(event){
    if(event.key === 'm'){
        event.target.style.background = 'green'
    }
}
document.addEventListener('keyup', mKey)
/* 6. */
header.addEventListener('dblclick', function(event){
    event.target.style.color = 'yellow'
    setTimeout(function() {
        event.target.style.color = "";
      }, 400);
      event.stopPropagation();
});
/* 7. */
function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    paragraph.style.transform = `scale(${scale})`;
}
let scale = 1;
paragraph.addEventListener('wheel', zoom)
/* 8. */
window.addEventListener('resize', function(event){
    paragraph.style.background = 'purple'
})
/* 9. */
document.addEventListener('copy', function(event){
    const selection = document.getSelection();
    event.target.style.color = 'teal'
});
/* 10. */
document.addEventListener('paste', function(event){
    event.target.style.color = 'orange'
});


/* Stopping Nav Refresh */
Array.from(document.links).forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
  });
});

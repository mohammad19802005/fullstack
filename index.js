// step 1 (get)
// const stars = document.getElementById('stars');
// const moon = document.getElementById('moon');
// const mountains_behind = document.getElementById('mountains_behind');
// const mountains_front = document.getElementById('mountains_front');
// const text = document.getElementById('text');
// const btn = document.getElementById('btn');

// step 2 (event)
// window.addEventListener('scroll' , function(){
//     let value = window.scrollY;
//     //  step 3 (motion)
//     moon.style.top = value * .75 + 'px';
//     stars.style.left = value * 3 + 'px';
//     mountains_behind.style.top = value * .75 + 'px';

// })
const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains_behind = document.getElementById('mountains_behind');
const text = document.getElementById('text');
const mountains_front = document.getElementById('mountains_front');
const btn = document.getElementById('btn');

window.addEventListener('scroll' , function(){
    let value = window.scrollY;
    moon.style.top = value * .75 + 'px';
    stars.style.left = value * 3 +'px';
})




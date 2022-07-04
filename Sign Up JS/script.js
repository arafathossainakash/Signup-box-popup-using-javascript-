// Selector
const btn = document.querySelector('.singupBtn');
const signBox = document.querySelector('.container');
const closeBtn = document.querySelector('.crossBtn');
const body = document.querySelector('body');

btn.addEventListener('click', function(){
    signBox.style.display = 'block';
    body.style.background = 'rgba(0,0,0,0.7)';
});

closeBtn.addEventListener('click', function(){
    signBox.style.display = 'none';
    body.style.background = 'transparent';
});


// check selector

// console.log(btn)
// console.log(signBox)
// console.log(closeBtn)
// console.log(body)
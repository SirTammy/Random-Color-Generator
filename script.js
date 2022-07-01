const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 255 + 1)
    const g = Math.floor(Math.random() * 255 + 1)
    const b = Math.floor(Math.random() * 255 + 1)
    const newColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    if(r<15 && g<15 && b<15){
        h1.style.color = 'white'
    }
})
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const colContainer = document.querySelector(".color-container");

btn.addEventListener('click', function(){
    const random  = genRandomNumber();
    // document.body.style.backgroundColor = random;
    colContainer.style.backgroundColor = random;
    color.textContent = random;
})


function genRandomNumber(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}
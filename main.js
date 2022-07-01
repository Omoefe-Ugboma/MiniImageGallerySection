const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

imgs.forEach(img => img.addEventListener('click', 
imgClick));

function imgClick(e){
    // Reset the opacity
    imgs.forEach(img => (img.style.opacity =1));
    // change current image to src of clicked image
    current.src = e.target.src;
     
    // Change the opacity var
    e.target.style.opacity = opacity;

}


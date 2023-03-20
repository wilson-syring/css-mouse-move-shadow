//variables for selecting the html elements
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
//variable gor the amount of px shadow will move the text shadow
const walk = 600;

//function for changing the text shadow of element
function shadow(e) {
    //variables for element size
    const {offsetWidth: width, offsetHeight: height} = hero;
    //variable for getting cursor position
    let {offsetX: x, offsetY: y} = e;
    //if statement for ignoring the children of the parent element for actual cursor location
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    //variables for reducing the walk px by half
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    //style for the shadows movement and color
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
}

//event listener for mousemove
hero.addEventListener('mousemove', shadow);
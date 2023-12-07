function getRandomPosition() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let randomX = Math.floor(Math.random() * (screenWidth - 128)); 
    let randomY = Math.floor(Math.random() * (screenHeight - 43));

    return { x: randomX, y: randomY };
}

let section = document.getElementById('section')
let apple = document.getElementById('appleIcon')

function cloneAndPositionButton() {

    let clonedButton = apple.cloneNode(true);


    clonedButton.id = 'clonedButton';

    let randomPosition = getRandomPosition();
    clonedButton.style.left = randomPosition.x + 'px';
    clonedButton.style.top = randomPosition.y + 'px';

    document.body.appendChild(clonedButton);
}


function iphone(){
let i = 1;

if(i = 1){
    section.style.backgroundColor = 'yellow';
    i++;
}else if(i = 2){
    section.style.backgroundColor = 'green';
    i++
}else{
    section.style.backgroundColor = 'white';
    i = 0
}

apple.addEventListener('click', cloneAndPositionButton);

}

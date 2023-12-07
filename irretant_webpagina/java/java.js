function getRandomPosition() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let randomX = Math.floor(Math.random() * (screenWidth - 128)); // Adjust 100 as per your button width
    let randomY = Math.floor(Math.random() * (screenHeight - 43)); // Adjust 40 as per your button height

    return { x: randomX, y: randomY };
}

let section = document.getElementById('section')
let apple = document.getElementById('appleIcon')

function cloneAndPositionButton() {
    // Clone the button

    let clonedButton = apple.cloneNode(true);

    // Optionally, change the ID or any other attributes of the cloned button
    clonedButton.id = 'clonedButton';

    // Set random position
    let randomPosition = getRandomPosition();
    clonedButton.style.left = randomPosition.x + 'px';
    clonedButton.style.top = randomPosition.y + 'px';

    // Add the cloned button to the body
    document.body.appendChild(clonedButton);
}

// Call the function to clone and position the button when the original button is clicked

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

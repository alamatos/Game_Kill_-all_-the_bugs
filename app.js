var actualWidth = 0
var actualHeight = 0
var lives = 1
var time = 15
var createBug = 1500



function startGame() {
        
    var levelChoice= document.getElementById('LevelBox').value

        if (levelChoice =='SelectLevel') {
            alert('Please insert a level for the game')
            return false
        }   else {
            window.location.href='killingZone.html?' + levelChoice
        }
            }

    var level = window.location.search

    level = level.replace('?', '')

        if (level==='Easy') {
            createBug = 2000
        } else if (level ==='Medium') {
            createBug = 1500
        } else {
            createBug = 1000
        }

function gameArea () {
    actualWidth = window.innerWidth
    actualHeight = window.innerHeight

    console.log(actualWidth, actualHeight)
}
// Firstly we need to call the function in order to know the dimension of the actual window
// When the window is resized it will automatically call the function

gameArea()



// i need to reduce the time available in the timer, in order to know if the user wins or loses the game
var timer = setInterval(function () {
    time--

if (time<0) {
    clearInterval(timer)
    clearInterval(placeBug)
    window.location.href = 'victory.html'

} else {
    document.getElementById('timer').innerHTML=time 
}
},1000)

function randomPositioning () {

// I already implemented a timer to position a bug in the killing zone,
// but i only want to have one bug at a time, so
// I need to check if a bug is already on the killing zone.

if (document.getElementById('bug')) {
    document.getElementById('bug').remove()


// Now i need to withdraw a life per bug not killed
if (lives>3) {

    window.location.href ='GameOver.html'

} else{

    document.getElementById('L' + lives).src= 'images/empty_heart.png'
    lives ++
}
}

// Create random positions for the bugs, having in consideration the actual size of the widow, as well as
// the dimension of the picture used to represent the bug (that's why i decreased 90 px) 

    var positionX = Math.floor(Math.random()*actualWidth)-90
    var positionY = Math.floor(Math.random()*actualHeight)-90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX,positionY)

    // In order to have a dynamic position i need to create an image as an HTML element.

    var bug = document.createElement('img')
    bug.src = 'images/bug.png'

    // To have bugs with random sizes i need to implement a function that provides me a class name.

    bug.className = bugRandomSize() + ' ' + chooseSide()

    bug.style.left= positionX + 'px'
    bug.style.top= positionY + 'px'
    bug.style.position= 'absolute'
    bug.id='bug'
    bug.onclick= function () {
        this.remove()
        
    }

    document.body.appendChild(bug)   

    console.log(bugRandomSize())

}

function bugRandomSize () {
    var size = Math.floor(Math.random()*3)

    // It's not neede to use break, due to the fact that return is the last instruction of the function, interrupting 
    // the function and returning the value available
    
    switch (size) {
        case 0:
            return 'smallBug'

        case 1:
            return 'normalBug'

        case 2:
            return 'bigBug'
    }
}

function chooseSide () {

    var side = Math.floor(Math.random()*2)
    
    switch (side) {

        case 0 :

        return 'leftSide'

        case 1 :

        return 'rightSide'
    }
}


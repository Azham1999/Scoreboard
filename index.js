let Add = document.getElementById("score")

let count = 0

function homeaddone() {
    count = count + 1
    Add.innerText = count
    console.log(count)
}

function homeaddtwo() {
    count = count + 2
    Add.innerText = count
    console.log(count)
}

function homeaddthree() {
    count = count + 3
    Add.innerText = count
    console.log(count)
}

let Add2 = document.getElementById("score2")

let count2 = 0

function awayaddone() {
    count2 = count2 + 1
    Add2.innerText = count2
    console.log(count2)
}

function awayaddtwo() {
    count2 = count2 + 2
    Add2.innerText = count2
    console.log(count2)
}

function awayaddthree() {
    count2 = count2 + 3
    Add2.innerText = count2
    console.log(count2)
}

function restart() {
    count = 0
    count2 = 0
    Add.innerText = count
    Add2.innerText = count2
}
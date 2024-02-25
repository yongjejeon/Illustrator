let red = document.getElementById("red")
let blue = document.getElementById("blue")
let purple = document.getElementById("purple")

red.addEventListener("click", () => {
    document.getElementById("redtext").innerText = "This is Red!"
})

blue.addEventListener("click", () => {
    document.getElementById("bluetext").innerText = "This is Blue!"
})

purple.addEventListener("click", () => {
    document.getElementById("purpletext").innerText = "This is Purple!"
})
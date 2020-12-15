window.addEventListener("keypress", (event) => {
    console.log(event)
    document.getElementById('keyValue').textContent = event.key
})

window.addEventListener("keypress", (event) => {
    console.log(event)
    document.getElementById('keyCode').textContent = event.code
})

window.addEventListener("keypress", (event) => {
    console.log(event)
    document.getElementById('charCode').textContent = event.charCode
})


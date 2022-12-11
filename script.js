const btn= document.getElementById("btnColores");
btn.addEventListener('click', () => {
        document.body.style.background = colorChange()
})

function colorChange () {
    return `hsl(${Math.floor(Math.random()*360)}, 25% ,70%  )`
}


/* declaraciones */
const btn= document.getElementById("btnColores");


/*background changer */

btn.addEventListener('click', () => {
    document.body.style.background = colorChange()
})

function colorChange () {
    return `hsl(${Math.floor(Math.random()*360)}, 20% ,70%)`
}



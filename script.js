const horGridElement = document.querySelector('.horizontal');
const verGridElement = document.querySelector('.vertical');
const buttonElement = document.querySelector('.submit');
const sketchPadElement= document.querySelector('.sketch-pad');
const colorPickElement = document.querySelector('.color');

let gridElement = document.querySelectorAll('.grid');

let isClicking=false;

sketchPadElement.addEventListener("mousedown" , ()=>{
    isClicking = true;
    console.log(isClicking)

})

sketchPadElement.addEventListener("mouseup" , () => {
    isClicking = false;
    console.log(isClicking)
})



renderGrid(50,50)

function renderGrid(hor,ver) {
    let accumulator = "";
    for(let i = 0 ; i < hor*ver ; i++){
        accumulator += "<div class='grid'></div>"
    }


    sketchPadElement.setAttribute("style" , `grid-template-columns: repeat(${hor}, 1fr); grid-template-rows: repeat(${ver},1fr)`);

    sketchPadElement.innerHTML = accumulator;
    gridElement = document.querySelectorAll('.grid');
    


    gridElement.forEach((grid) => {

        
        grid.addEventListener("mouseover", (e) => {
            if(isClicking) grid.setAttribute("style",`background-color: ${colorPickElement.value}`);

        });

        grid.addEventListener("click", (e) => {
            grid.setAttribute("style",`background-color: ${colorPickElement.value}`);

        });
    })

}


buttonElement.addEventListener("click", () =>{
    let hor = horGridElement.value
    let ver = verGridElement.value
    renderGrid(hor,ver);

    console.log(colorPickElement.value);
})



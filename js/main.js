const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', (e) => {
    if (e.code.toLowerCase = 'space') {
        setRandomColors()
    }
})

document.addEventListener('click', (e) => {
    console.log(e.target.dataset)
    const type = e.target.dataset.type

    if (type === 'lock') {
            const node = e.target.tagName.toLowerCase() === 'i'
            ? e.target
            : e.target.children[0]

        console.log(node)

        node.classList.toggle('fa-lock-open');
        node.classList.toggle('fa-lock');


    }
})

function setRandomColors() {
    cols.forEach((col) => {
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        const color = chroma.random()
        
        text.textContent = color
        col.style.background = color

        setTextColor(text, color)
        setTextColor(button, color)
    })
}


function setTextColor (text, color) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColors()
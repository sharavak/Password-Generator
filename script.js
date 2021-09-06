const len = document.querySelector('#len')
const span = document.querySelector('span')
let lenPas = 0
const opti = document.querySelectorAll('.opt')
const button = document.querySelector('button')
const copy = document.querySelector('.copy')

let password = ''
let userOpt = []
const pas = document.querySelector('.pas')

const options = {l:['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],u:['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
d:['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],s:['!',  '#', '$', '%', '&',  '?', '@']
}

len.addEventListener('input', function () {
    span.innerText = len.value
    lenPas=parseInt(len.value)
})

for (let o of opti) {
    o.addEventListener('change', function () {
        if (o.checked === true) {
            userOpt.push(o.value)    
        }
        else if (o.checked === false) {
            userOpt.splice(userOpt.indexOf(o.value), 1);
            console.log(userOpt);
            } 
    })
}

button.addEventListener('click', function () {
    const check=gene()
    if (check === undefined || check==='') {
        alert('Hey! Please fill the field')
    }
    else {
        pas.style.animationName = 'names'
        pas.style.animationDuration = '3s';
        pas.style.animationFillMode = 'forwards';
        pas.style.animationTimingFunction = 'ease-in';
        pas.innerText = check
        password = ''
    }      
})

function gene() {
    if (userOpt.length === 1) {
        for (let i = 0; i < lenPas; i++){
            let r = Math.floor(Math.random() * options[userOpt[0]].length)
            password = password + options[userOpt[0]][r]
        }
        return password
    }
    else if (userOpt.length === 2) {
        if (userOpt[0] in options && userOpt[1] in options) {
            for (let i = 0; i < lenPas; i++){
                let n=Math.floor(Math.random()*2)
                let r = Math.floor(Math.random() * options[userOpt[n]].length)
                password = password + options[userOpt[n]][r]

            }
        }
        return password
    }
    else if (userOpt.length === 3) {
        if (userOpt[0] in options && userOpt[1] in options && userOpt[2] in options) {
            for (let i = 0; i < lenPas; i++){
                let n=Math.floor(Math.random()*userOpt.length)
                let r = Math.floor(Math.random() * options[userOpt[n]].length)
                password = password + options[userOpt[n]][r]
            }
        }
        return password
    }
    else if (userOpt.length === 4) {
        if (userOpt[0] in options && userOpt[1] in options && userOpt[2] in options && userOpt[3] in options) {
            for (let i = 0; i < lenPas; i++){
                let n=Math.floor(Math.random()*userOpt.length)
                let r = Math.floor(Math.random() * options[userOpt[n]].length)
                password = password + options[userOpt[n]][r]
            }
        }
        return password
    }
}

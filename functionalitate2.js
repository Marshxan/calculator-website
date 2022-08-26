let input = document.querySelector('#form')
let number = 0;
let last_clicked = 0;
let can = 0;
let operatie = undefined
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')

function remove_selected() {
    let arr = [percent, ce, c, del, dogex, x2, sqrt, division, one, two, three, four, five, six, seven, eight, nine, plus, minus, point, egal, multiplier]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains('selected')) {
            arr[i].classList.remove('selected')
        }
    }
}

let percent = document.querySelector('#percent')
let ce = document.querySelector('#ce')
let c = document.querySelector('#c')
let del = document.querySelector('#del')

let dogex = document.querySelector('#dogex')
let x2 = document.querySelector('#x2')
let sqrt = document.querySelector('#sqrt')
let division = document.querySelector('#division')

let multiplier = document.querySelector('#multiplier')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let point = document.querySelector('#point')

let egal = document.querySelector('#egal')

/* equal function */

egal.addEventListener('click', () => {
    remove_selected()
    console.log('egal clicked')
    egal.classList.add('selected')

    if (operatie == '*') {
        number *= last_clicked
        operatie = undefined
    }

    if (operatie == '+') {
        number += last_clicked
        operatie = undefined
    }

    if (operatie == '-') {
        number -= last_clicked
        operatie = undefined
    }

    if (operatie == 'sqrt') {
        number = Math.sqrt(number)
        operatie = undefined
    }

    if (operatie == 'x2') {
        number *= number
        operatie = undefined
    }

    if (operatie == '%') {
        number = number % last_clicked
        operatie = undefined
    }

    if (operatie == '/') {
        number = number / last_clicked
        operatie = undefined
    }

    remove_selected()
    update_input()
})


/* special functions*/
function special_functions() {
    percent.addEventListener('click', () => {
        remove_selected()
        console.log('percent clicked')
        percent.classList.add('selected')
        operatie = '%'
    })

    ce.addEventListener('click', () => {
        remove_selected()
        console.log('ce clicked')
        ce.classList.add('selected')
        last_clicked = 0;
        number = 0;
        update_input()
    })
    c.addEventListener('click', () => {
        remove_selected()
        console.log('c clicked')
        c.classList.add('selected')
    })
    del.addEventListener('click', () => {
        remove_selected()
        console.log('percent clicked')
        last_clicked = 0;
    })


    dogex.addEventListener('click', () => {
        remove_selected()
        console.log('dogex clicked')
        dogex.classList.add('selected')
    })
    x2.addEventListener('click', () => {
        remove_selected()
        console.log('x2 clicked')
        x2.classList.add('selected')
        operatie = 'x2'
    })
    sqrt.addEventListener('click', () => {
        remove_selected()
        console.log('sqrt clicked')
        sqrt.classList.add('selected')
        operatie = 'sqrt'
    })
    division.addEventListener('click', () => {
        remove_selected()
        console.log('division clicked')
        division.classList.add('selected')
        operatie = '/'
    })
    multiplier.addEventListener('click', () => {
        remove_selected()
        console.log('multiplier clicked')
        multiplier.classList.add('selected')
        operatie = '*'
    })
    minus.addEventListener('click', () => {
        remove_selected()
        console.log('minus clicked')
        minus.classList.add('selected')
        operatie = '-'
    })
    plus.addEventListener('click', () => {
        remove_selected()
        console.log('plus clicked')
        plus.classList.add('selected')
        operatie = '+'
    })
    point.addEventListener('click', () => {
        remove_selected()
        console.log('point clicked')
        point.classList.add('selected')
    })
}
/*here ends*/

function update_input() {
    input.value = number
}

/*signs 1-10*/
function numbers() {
    one.addEventListener('click', () => {
        remove_selected()
        console.log('one clicked')
        one.classList.add('selected')
        can++
        if (operatie != undefined) {
            last_clicked = last_clicked*10+1
            console.log(last_clicked)
        }
        else {
            number = number * 10 + 1
        }

        update_input()
    })
    two.addEventListener('click', () => {
        remove_selected()
        console.log('two clicked')
        two.classList.add('selected')
        can++
        if (operatie != undefined) {
            last_clicked = last_clicked*10+2
            console.log(last_clicked)
        }
        else {
            number = number * 10 + 2
        }
        console.log(last_clicked)
        update_input()
    })
    three.addEventListener('click', () => {
        remove_selected()
        console.log('three clicked')
        three.classList.add('selected')
        can++
        if (operatie != undefined) {
            last_clicked = last_clicked*10+3
            console.log(last_clicked)
        }
        else {
            number = number * 10 + 3
        }

        update_input()
    })
    four.addEventListener('click', () => {
        remove_selected()
        console.log('four clicked')
        four.classList.add('selected')
        can++

        if (operatie != undefined) {
            last_clicked = last_clicked*10+4
            console.log(last_clicked)
        }
        else {
            number = number * 10 + 4
        }
        update_input()
    })
    five.addEventListener('click', () => {
        remove_selected()
        console.log('five clicked')
        five.classList.add('selected')
        can++
        if (operatie != undefined) {
            last_clicked = last_clicked*10+5
            console.log(last_clicked)
        }
        else {
            number = number * 10 + 5
        }

        update_input()
    })
    six.addEventListener('click', () => {
        remove_selected()
        console.log('six clicked')
        six.classList.add('selected')
        can++
        if (operatie != undefined) {
            last_clicked = last_clicked*10+6
            console.log(last_clicked)
        }
        else {
            number = number * 10 + 6
        }

        update_input()
    })
    seven.addEventListener('click', () => {
        remove_selected()
        console.log('seven clicked')
        seven.classList.add('selected')
        can++
        if (operatie != undefined) {
            last_clicked = last_clicked*10+7
            console.log(last_clicked)
        }
        else {
            number = number * 10 + 7
        }

        update_input()
    })
    eight.addEventListener('click', () => {
        remove_selected()
        console.log('eight clicked')
        eight.classList.add('selected')
        can++
        if (operatie != undefined) {
            last_clicked = last_clicked*10+8
            console.log(last_clicked)
        }
        else {
            number = number * 10 + 8
        }

        update_input()
    })
    nine.addEventListener('click', () => {
        remove_selected()
        console.log('nine clicked' + number)
        nine.classList.add('selected')
        can++
        if (operatie != undefined) {
            last_clicked = last_clicked*10+9
            console.log(last_clicked)
        }
        else {
            number = number * 10 + 9
        }

        update_input()
    })
}
special_functions()
numbers()
special_functions()



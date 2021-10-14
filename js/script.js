const btnDropDown = () => {
    const dropDown = document.getElementById('dropdown-menu')
    const btnArrow = document.getElementById('btnArrow')
   if (dropDown.style.display === 'none') {
       btnArrow.setAttribute('class', 'fas fa-caret-right')
       dropDown.style.display = 'block'
   } else {
       btnArrow.setAttribute('class', 'fas fa-caret-down')
       dropDown.style.display = 'none'
   }
}

const showAllMenu = () => {
    const list = document.getElementById('nav-list-down')
    if (list.style.display === 'none') {
        list.style.display = 'block'
    } else {
        list.style.display = 'none'
    }
}

const btnDropDownR = () => {
    const dropDown = document.getElementById('dropdown-menuR')
    const btnArrow = document.getElementById('btnArrowR')
    if (dropDown.style.display === 'none') {
        btnArrow.setAttribute('class', 'fas fa-caret-right')
        dropDown.style.display = 'block'
    } else {
        btnArrow.setAttribute('class', 'fas fa-caret-down')
        dropDown.style.display = 'none'
    }
}

// ! date
let date = new Date()

let day = date.getDay()
let month = date.getMonth()
let dateNumber = date.getDate()
let year = date.getFullYear()

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// set th, nd, rd (ordinal) on date
const nth = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

const showDate = document.getElementById('showDate')
showDate.innerHTML = `${days[day]}, ${months[month]} ${dateNumber}<sup>${nth(dateNumber)}</sup>, ${year}`

import { criteria } from "./criteria.js";
import { generatePassword } from "./generatePassword.js";



const pass = document.getElementById('password');
const generatePassBtn = document.getElementById('generate-password')
const length = document.getElementById('length');
const lowercase = document.getElementById('lowercase')
const uppercase = document.getElementById('uppercase')
const numbers = document.getElementById('numbers')
const specialCharacters = document.getElementById('special-chars')
const pattern = document.getElementById('pattern');
console.log('hi')


generatePassBtn.addEventListener('click', generatePassword)

//length

length.addEventListener('change', function () {

    criteria.length = length.value
})

//Lowercase
lowercase.addEventListener('change', function () {
    if (this.checked) {
        console.log('lowercase checked')
        criteria.lowercase = true
    }
    else {
        criteria.lowercase = false
        console.log('lowercase unchecked')
    }

})
//Uppercase
uppercase.addEventListener('change', function () {
    if (this.checked) {
        console.log('uppercase checked')
        criteria.uppercase = true
    }
    else {
        criteria.uppercase = false
        console.log('uppercase unchecked')
    }

})

//Numbers
numbers.addEventListener('change', function () {
    if (this.checked) {
        console.log('numbers checked')
        criteria.numbers = true
    }
    else {
        criteria.numbers = false
        console.log('numbers unchecked')
    }

})

//Special Chars
specialCharacters.addEventListener('change', function () {
    if (this.checked) {
        console.log('special cahrs checked')
        criteria.specialChars = true
    }
    else {
        criteria.specialChars = false
        console.log('special chars unchecked')
    }

})

//Pattern
pattern.addEventListener('change', function () {
    if (this.checked) {
        console.log('pattern checked')
        criteria.pattern = true
    }
    else {
        criteria.pattern = false
        console.log('pattern unchecked')
    }

})







export { pass, uppercase, lowercase, numbers, pattern, specialCharacters }
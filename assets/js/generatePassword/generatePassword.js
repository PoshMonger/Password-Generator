import { criteria } from './criteria.js';
import { gen_lowercase, gen_uppercase, gen_numeric, gen_special } from './charCode.js';
import {pass,uppercase,lowercase,numbers,specialCharacters,pattern} from './DOMElements.js'




export const generatePassword = () => {
   var charOptions = [];
   var password = '';
   var numberChecked =0;

   if (criteria.lowercase == true) {
      charOptions.push(gen_lowercase)
       numberChecked++ 
      console.log(charOptions)
   }
   if (criteria.uppercase == true) {
      charOptions.push(gen_uppercase)
      numberChecked++ 
      console.log(charOptions)
   }
   if (criteria.numbers == true) {
      charOptions.push(gen_numeric)
      numberChecked++ 
      console.log(charOptions)
   }
   if (criteria.specialChars == true) {
      charOptions.push(gen_special)
      numberChecked++ 
      console.log(charOptions)
   }


console.log(numberChecked)
   for (let i = 0; i < criteria.length; i++) {

      let randomNumber = Math.round(Math.random() * (numberChecked-1))


      console.log(randomNumber)
      const createChar = charOptions[randomNumber]
   password += createChar()




   }

   pass.value = password


}


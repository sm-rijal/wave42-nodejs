const colors = require('colors');
const validator = require('validator');
const lodash = require("lodash")
const moment = require("moment") 

const isEmail = validator.isEmail('foo@bar.com'); 

// console.log(isEmail);
if(isEmail){
    console.log("format email benar");
} else {
    console.log("masukan format email");
}

console.log(colors.green("Hayyy")); // outputs green text
console.log(lodash.capitalize("SAMSUL"));


const valid = require('validator');

const checkEmail = (email) =>
{
    
    if(valid.isEmail(email))
    {
        console.log("email da benar");
    }
    else
    {
        console.log("ini bkn email");
    }

}
checkEmail("mariana.djum@yahoo.com")

moment.locale("id")
const waktu = moment().format();
console.log(waktu);
console.log(moment().format('dddd, DD MMMM YYYY, h:mm:ss a')) // January 24th 2024, 8:52:21 pm
console.log(moment().format('dddd')) // Wednesday

console.log("haiii");
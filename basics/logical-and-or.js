// Logical And Operator - True if both of sides are true. False otherwise
// Logical Or Operator - True if at least one side is true
/**let temp = 55

if (temp >= 60 && temp <= 90){
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120){
    console.log('It is dangerous, stay home')
} else {
    console.log('Eh. Do what you want.')
}/** */

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer up vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some vegan dishes.')
} else {
    console.log('Заказывай что хочешь.')
}
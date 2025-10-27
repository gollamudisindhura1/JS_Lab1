// //Task 1: Flexible String Manipulation with Functions

// function formatFullName(firstName, lastName){
//     // Here I am checking if either input is not a string and if input is missing.
//     if(!firstName || !lastName|| typeof firstName!=="string" || typeof lastName!=="string"){
//         return "Invalid name input.";
//     }
//     // The typeof operator returns a string indicating the type of the operand's value.


// // Capitalize the first leeter of each name 

// let formattedFisrtName = firstName.charAt(0).toUpperCase()+ firstName.slice(1).toLowerCase();
// let formattedLastName = lastName.charAt(0).toUpperCase()+ lastName.slice(1).toLowerCase();
// return `${formattedLastName}, ${formattedFisrtName}`;
// }
// console.log("Task 1:");
// console.log(formatFullName("sindhu", "gollamudi")); //Output Sindhu Gollamudi
// console.log(formatFullName("sindhu", "GOLLAMUDI")); // Output Sindhu Gollamudi
// console.log(formatFullName("", "Gollamudi"));//Output Invalid
// console.log(formatFullName("Sindhu", "")); // Output Invalid
// console.log(formatFullName("sindhu", null)); // Output Invalid

// Task 2: Mathematical Operations with Multiple Parameters

function calculateTotalCost(price, quantity, taxRate){
    // check if inputs are valid numbers
    //The isNaN() method converts the value to a number before testing it.
    if (isNaN(price)|| isNaN(quantity)|| isNaN(taxRate)){
    }
    let totalCost =(price*quantity)*(1+taxRate);
    return totalCost;
}
    console.log(calculateTotalCost(10, 3, 0.04));
    console.log(calculateTotalCost("abc", 3, 0.04));

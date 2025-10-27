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

// function calculateTotalCost(price, quantity, taxRate){
//     // check if inputs are valid numbers
//     //The isNaN() method converts the value to a number before testing it.
//     if (isNaN(price)|| isNaN(quantity)|| isNaN(taxRate)){
//     }
//     let totalCost =(price*quantity)*(1+taxRate);
//     return totalCost;
// }
//     console.log("\nTask 2:");
//     console.log(calculateTotalCost(10, 3, 0.04));
//     console.log(calculateTotalCost("abc", 3, 0.04));

//Task 3: Functions with Conditional Logic

// function checkEligibility(age, isEmployed){
    
//     if(typeof age !=="number" || typeof isEmployed !== "boolean" || isNaN(age)||age<0 ){
//         return "Invalid input"
//     }

    
//     if (age> 18 && isEmployed){
//         return "You are eligible";
//     }else if (age >18 && !isEmployed){
//         return "you ar conditionally eligible.";
//     }else{
//         return "You are not eligible";
//     }

// }
// console.log("\nTask 3:");
// console.log(checkEligibility(20, true)); // Output: You are eligible.
// console.log(checkEligibility(19, false));// Output: you are conditionally eligible.
// console.log(checkEligibility(17, true));// Output: you not eligible
// console.log(checkEligibility("20", false)); // Output: Invalid input

// Task 4: Refactoring for Reusability

function calculateTotalCost(price, quantity, taxRate, discount=0){
    if (typeof price!=="number" ||typeof quantity!=="number"|| typeof taxRate!=="number" || typeof discount!=="number"|| isNaN(price) || isNaN(quantity) || isNaN(taxRate) || isNaN(discount) || price <0 || quantity <0||taxRate<0||discount<0){
        return "Invalid input";
    }

    let total = price *quantity
    let discountedTotal = total - discount
    if (discountedTotal <0){
        return "Invalid input: Discount exceeds subtotal";
    }
    let totalCost = discountedTotal * (1+taxRate)
    return totalCost;
    }

console.log("\nTask 4: ");
console.log(calculateTotalCost(10, 2, 0.1)); 
console.log(calculateTotalCost(10, 2, 0.1, 5)); 
console.log(calculateTotalCost(5.99, 3, 0.08, 2)); 
console.log(calculateTotalCost(10, 2, 0.1, "6")); 
console.log(calculateTotalCost(10, 2, 0.1, 25)); 
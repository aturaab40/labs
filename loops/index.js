/* 
JavaScript has at least 20 different ways to loop over things, including all of the array methods, like forEach, map, and filter; recursive functions; and while, and for.

For array methods and recursive functions, you can end a loop early with a return statement, but if you were to use a return statement in a while or for loop, it would end the entire function, which is not ideal. Instead, if you want to jump to the next iteration of the loop, you can use the continue statement, like so.
*/

for (let index = 0; index < 11; index++) {
    
    // skip multiples of 2
    if (index % 2 === 0) {
        continue;
    }
    
    console.log(index);
}   
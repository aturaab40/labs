/* 
JavaScript has at least 20 different ways to loop over things, including all of the array methods, like forEach, map, and filter; recursive functions; and while, and for.

For array methods and recursive functions, you can end a loop early with a return statement, but if you were to use a return statement in a while or for loop, it would end the entire function, which is not ideal.
*/


/* 
Instead, if you want to jump to the next iteration of the loop, you can use the continue statement, like so.
*/
for (let index = 0; index < 11; index++) {
    
    // skip multiples of 2
    if (index % 2 === 0) {
        continue;
    }
    
    console.log(index);
}



/* 
    The break statement lets you end the loop prematurely, without running any more iterations.
*/

for (let index = 0; index < 11; index++) {
    
    // End the loop when we get to a multiple of 3
    if (index % 3 === 0) {
        break;
    }

    console.log(index);
}



/* 
These two statements work great for individual loops, but what if we needed to coordinate nested loops? 
*/


/* 
If we just used break or continue inside the inner loop, it wouldn’t be able to stop or skip the outer loop.
*/
const ages = [1, 4, 7, 30, 33];

for (let i = 0; i < ages.length; i++) {
    const iNum = ages[i];
    
    for (let j = 0; j < ages.length; j++) {
        const jNum = ages[j];

        if ((iNum * jNum) % 2 === 0) {
            // This continues the inner loop if the number is even
            continue; 
        }
        
        console.log((iNum * jNum));
    }
}




/* 
To let us call continue or break on the outer loop from inside the inner loop, we need to apply a label to the outer loop. The label goes right before the for statement. Then, we can use the label with the continue statement. Notice how the results change once we add the label.
*/
const ages = [1, 4, 7, 30, 33];

outerLoop: for (let i = 0; i < ages.length; i++) {
    const iNum = ages[i];
    
    for (let j = 0; j < ages.length; j++) {
        const jNum = ages[j];

        if ((iNum * jNum) % 2 === 0) {
            // This continues the inner loop if the number is even
            continue outerLoop; 
        }
        
        console.log((iNum * jNum));
    }
}

const calculateCharacter = () =>{
    const tweet = prompt("write your tweet:");
    const tweetCount = tweet.length;
    const tweetLeft = 140 - tweetCount;
    
  // show  with alert  with string concatenation
/* alert( " you have written " + tweetCount + " characters so  you have " + tweetLeft + " charecters remaining."); */

// show  with console.log with string interpolation
console.log( `you have written  ${tweetCount} characters so  you have  ${tweetLeft}  charecters remaining.`)


    

}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);

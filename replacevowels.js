
// Write a function, .vreplace() that extends the String prototype by replacing all vowels 
// in a string with a specified vowel.

// Examples
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

// "cheese casserole".vreplace("o") ➞ "chooso cossorolo"

// "stuffed jalapeno poppers".vreplace("e") ➞ "steffed jelepene peppers"
// Notes
// Words will be lowercased.

// .replace(//g, "") 
function replaceVowels(vowelToReplace, str){
    let strArr = str.split("")

    let vowels = ['a', 'e', 'i', 'o', 'u']
    for(i=0; i<strArr.length; i++){
        if(vowels.includes(strArr[i]) ){
            strArr[i] = vowelToReplace
        }

    }

    console.log(strArr.join(""));
}
replaceVowels("o", "cheese casserole")
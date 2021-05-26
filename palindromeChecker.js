/*function palindrome(str){
    var reg = /[\W_]/g;
    var smallStr= str.toLowerCase().replace(reg," ");
var reversed = smallStr.split("").reverse().join("");
if(reversed===smallStr) return true;

return false;

}
console.log(palindromes("Madam"));

function palindromes(string){
    var reg = /[\W_]/;
    var smallString= string.toLowerCase().replace(reg,"");
var reversed= smallString.split("").reverse().join("");
if(reversed===smallString) return true;
return false;
}

palindromes("Eye");

function palindrome(strn){//function
    reg= /[\W_]/g;//regular expression
    var smallStrn= strn.toLowerCase().replace(reg,"");//to get palindrome must convert string to lowercase
var reversal= smallStrn.split("").reverse().join("");//splits and reverse chars in string then joins them
if(reversal===smallStrn) return true;
return false;//no need for curly braces
}
console.log(palindrome("Anna"));//call function wth console.log();*/
const button = document.getElementById("BTN");
button.addEventListener("click",function (){
    var reg = /[\W_]/g;
    let text = document.getElementById("name").value;
    let pali = document.getElementById("pali");
    smallString= text.toLowerCase().replace(reg,"");
var reverse = smallString.split("").reverse().join("");
if(reverse===smallString) {
    pali.textContent = `${smallString} is a palindrome`
}else{
    pali.textContent = `${smallString} is  not a palindrome `
}
} )








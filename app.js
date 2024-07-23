//Q/* #1
var today = new Date();
document.write(today +"<br/>"+"<br/>")
//Q#2
 var firstName =prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = ""
var  result= (firstName+lastName)
var greetings = ("Hello, "+ result)
alert(greetings)
//Q#3
 function addTwoNumbers(){
    var num1 =parseFloat(prompt("Enter the first number"));
    var num2 =parseFloat(prompt("Enter the second number"));
    var sum = num1 + num2;
    return sum;
}
var result=addTwoNumbers()
document.write("The sum of the two numbers is " + result+"<br/>"+"<br/>")  
//Q#4

//Q#8
function calculateHypotenus(){
    function calculateHypotenus(x){
        return x * x
    }
    var base = +prompt("Enter the base of aright angle triangle:")
    var perpendicular = +prompt("Enter the perpendicular of a right angle triangle:")
    var hypotenus = Math.sqrt(calculateSquare(base)+ calculateSquare(perpendicular))
    alert("The hypotenus of right angle triangle with base " +base+"and perpendicular "+perpendicular)
}

//Q#13
function countOccurences(str,letter){
var count = 0;
for(var i = 0; i < str.length; i++){
    if(str[i] ===letter){
        count++
    }
}
   return count;
}
var result = countOccurences('SAYLANI','A')
document.write(result)



















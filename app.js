console.log("hello");

var birthDate = document.querySelector("#date");
var luckyNumber = document.querySelector("#number");
var bthCheck = document.querySelector("#check")

function enteredDate()
{
      var strDate = birthDate.value;
      // const strDate = arrDate.toString();
      // console.log(strDate);
      // console.log("Type of strDate is " + typeof(strDate))
      var array = strDate.split("-");
      console.log(array);

      // console.log("Entered date is: " + birthDate.value);
      // // console.log("Entered number is: " + luckyNumber.value);

}
// console.log(typeof(birthDate));
bthCheck.addEventListener("click", enteredDate);

console.log("hello");

var birthDate = document.querySelector("#date");
var luckyNumber = document.querySelector("#number");
var bthCheck = document.querySelector("#check")
var sum = 0;
var strConcat = "";

function enteredDate()
{
      var strDate = birthDate.value;
      // const strDate = arrDate.toString();
      // console.log(strDate);
      // console.log("Type of strDate is " + typeof(strDate))
      var array = strDate.split("-");
      // console.log(array);
      // console.log(array[0]);
      // console.log(array[1]);
      // console.log(array[2]);

      for(var i = 0; i<array.length; i++)
      {
            strConcat += array[i];
            strConcat.split("0/")
      }
      dateNum = Number(strConcat)
      console.log(strConcat)
      
      // console.log("Entered date is: " + birthDate.value);
      // // console.log("Entered number is: " + luckyNumber.value);

}
// console.log(typeof(birthDate));
bthCheck.addEventListener("click", enteredDate);

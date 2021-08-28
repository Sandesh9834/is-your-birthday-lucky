var birthDate = document.querySelector("#date");
var luckyNumber = document.querySelector("#number");
var bthCheck = document.querySelector("#check");

var strConcat = "";

function addDate(dateNum)
{
    var sum = 0;
    while (dateNum != 0) 
    {
        sum = sum + dateNum % 10;
        dateNum = parseInt(dateNum / 10);
    }
    return sum;
}

function enteredDate()
{
      var strDate = birthDate.value;
      var number = Number(luckyNumber.value);
      var array = strDate.split("-");

      for(var i = 0; i<array.length; i++)
      {
            strConcat += array[i];
            strConcat.split("0/")
      }
      dateNum = Number(strConcat)
     
      var sumOfDate = addDate(dateNum);

      if(sumOfDate % number === 0)
      {
            console.log("Lucky")
      }
      else
      {
            console.log("Not lucky")
      }      
}

bthCheck.addEventListener("click", enteredDate);

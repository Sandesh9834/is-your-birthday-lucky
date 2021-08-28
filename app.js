var birthDate = document.querySelector("#date");
var luckyNumber = document.querySelector("#number");
var bthCheck = document.querySelector("#check");
var displayMessage = document.querySelector("#output")
var strConcat = "";

function addDate(inputDate)
{
      var sum = 0;
      var array = inputDate.split("-");

      for(var i = 0; i<array.length; i++)
      {
            strConcat += array[i];
            strConcat.split("0/")
      }

      dateNum = Number(strConcat)

      while (dateNum != 0) 
      {
            sum = sum + dateNum % 10;
            dateNum = parseInt(dateNum / 10);
      }
      return sum;
}

function checkDate (sumOfDate, numLuck)
{
      if(sumOfDate % numLuck === 0)
      {
            displayMessage.innerText = `${numLuck} is a lucky number!🎉`
            console.log("Lucky")
      }
      else
      {
            displayMessage.innerText = `${numLuck} is a not lucky number 😔`
            console.log("Not lucky")
      }   
}

function enteredDate()
{
      var inputDate = birthDate.value;
      var numLuck = Number(luckyNumber.value);

      if(inputDate && numLuck)
      {
            const sumOfDate = addDate(inputDate);
            checkDate(sumOfDate, numLuck)
      }   
      else 
      {
            displayMessage.innerText = "Enter value in both the fields ⚠"
      }
}

bthCheck.addEventListener("click", enteredDate);

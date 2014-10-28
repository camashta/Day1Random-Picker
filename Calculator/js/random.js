$(function(){
	
	$("button#sumbut").on("click", function() {
		var itemNumber1 = parseInt($("#number1").val());
		var itemNumber2 = parseInt($("#number2").val());
		var sum = itemNumber1 + itemNumber2;
		$("p#resulttext").text("The sum of " + itemNumber1 + " and " + itemNumber2 + " is: ");
		$("h3#resultnumber").text(sum);
	
	});
	$("button#substractbut").on("click", function() {
		var itemNumber1 = parseInt($("#number1").val());
		var itemNumber2 = parseInt($("#number2").val());
		var substract = itemNumber1 - itemNumber2
		$("p#resulttext").text("The substraction of " + itemNumber1 + " and " + itemNumber2 + " is: ");
		$("h3#resultnumber").text(substract);
	
	});
	$("button#multiplybut").on("click", function() {
		var itemNumber1 = parseInt($("#number1").val());
		var itemNumber2 = parseInt($("#number2").val());
		var multiply = itemNumber1 * itemNumber2
		$("p#resulttext").text("The multiplication of " + itemNumber1 + " and " + itemNumber2 + " is: ");
		$("h3#resultnumber").text(multiply);
	
	});
	$("button#divisionbut").on("click", function() {
		var itemNumber1 = parseInt($("#number1").val());
		var itemNumber2 = parseInt($("#number2").val());
		var division = itemNumber1 / itemNumber2
		$("p#resulttext").text("The division of " + itemNumber1 + " and " + itemNumber2 + " is: ");
		$("h3#resultnumber").text(division);
	
	});
	});
	







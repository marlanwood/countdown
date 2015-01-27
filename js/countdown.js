//change the text below to reflect your own,
var before = "Groundhog's Day will be in: ";
var current = "Today is Groundhog's Day!";
var montharray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

function countdown(yr, m, d) {
	//document.getElementById("count2").value = "test"; //new Date.toLocalTimeString();
	//document.getElementById("count2").value = new Date().toLocaleTimeString();
	setInterval(function() {setPreText(yr, m, d)}, 1000);
	
 // ...
}

function setPreText(yr, m, d) {
	//First check to see if today is Groundhog's Day.
	//if (new Date().getDate() == 26 && new Date().getMonth() == 0) //Test Jan 26th
	if (new Date().getDate() == 2 && new Date().getMonth() == 1) //Check for Feb 2nd
	{
		document.getElementsByName("count2")[0].value = current;
	} else {
		document.getElementsByName("count2")[0].value = before;
		setTime(yr,m,d);
	}
}
function setTime(yr, m, d) {
	//document.getElementById("count2").value = new Date().toLocaleTimeString();
	//document.getElementsByName("count2")[0].value = new Date().getDate(); //Show current day
	//document.getElementsByName("count2")[0].value = new Date().getMonth(); //Show current month
	//document.getElementsByName("count2")[0].value = Math.abs(new Date(yr+"/"+m+"/"+d) - new Date()); //Show milliseconds

	//document.getElementsByName("count2")[0].value = Math.round((Math.abs(new Date(yr+"/"+m+"/"+d) - new Date() ))/(1000)) + " secs"; //Countdown in seconds
    //document.getElementsByName("count2")[0].value = Math.round((Math.abs(new Date(yr+"/"+m+"/"+d) - new Date() ))/(1000)) + " secs"; //Countdown in seconds
	//document.getElementsByName("count2")[0].value = document.getElementsByName("count2")[0].value + "test";

	//document.getElementsByName("count2")[0].value = Math.floor((Math.abs(new Date(yr+"/"+m+"/"+d) - new Date() ))/(1000)) + " secs"; //Countdown in seconds
	showDays(yr,m,d);
	showHours(yr,m,d);
	showMinutes(yr,m,d);
	showSeconds(yr,m,d);
}

function showDays(yr,m,d) {
	document.getElementsByName("count2")[0].value = document.getElementsByName("count2")[0].value + Math.floor((Math.abs(new Date(yr+"/"+m+"/"+d) - new Date() ))/(1000*60*60*24)) + " days";
}
function showHours(yr,m,d) {
	document.getElementsByName("count2")[0].value = document.getElementsByName("count2")[0].value + ", " + (Math.floor( ((new Date(yr+"/"+m+"/"+d) - new Date())/(1000*60*60))) - Math.floor( ((new Date(yr+"/"+m+"/"+d) - new Date())/(1000*60*60*24))) * 24)  + " hrs";
}
function showMinutes(yr,m,d) {
	document.getElementsByName("count2")[0].value = document.getElementsByName("count2")[0].value + ", " + (Math.floor( ((new Date(yr+"/"+m+"/"+d) - new Date())/(1000*60))) - Math.floor( ((new Date(yr+"/"+m+"/"+d) - new Date())/(1000*60*60))) * 60.)  + " mins";
}
function showSeconds(yr,m,d) {
	document.getElementsByName("count2")[0].value = document.getElementsByName("count2")[0].value + ", " + (Math.floor( ((new Date(yr+"/"+m+"/"+d) - new Date())/(1000))) - Math.floor( ((new Date(yr+"/"+m+"/"+d) - new Date())/(1000*60))) * 60)  + " secs";
}


//enter the count down date using the format year/month/day
countdown(2015, 2, 2);
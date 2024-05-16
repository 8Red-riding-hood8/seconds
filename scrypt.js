let hours_value = window.prompt("Enter count of hours", 0);
let seconds_value = Math.pow(60, 2) * hours_value;
alert(`In ${hours_value} hour(s) - ${seconds_value} seconds`);
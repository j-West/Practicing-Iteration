
// Increment the counter variable by 10 each time through the loop

for (var i = 5; i < 120; i += 10) {
	console.log("The current value is " + i);
}

// Decrement the counter variable by 2 each time through the loop

for (var i = 4096; i >= 1; i /= 2) {
	console.log("The current value is " + i);
}

// Object iteration

// Create an array of presidents

var presidents = [
										"George Washington",
										"John Adams",
										"Thomas Jefferson",
										"James Madison",
										"James Monroe",
										"John Quincy Adams",
										"Andrew Jackson",
										"Martin Van Buren",
										"William Henry Harrison",
										"John Tyler",
										"James K. Polk",
										"Zachary Taylor",
										"Millard Fillmore",
										"Franklin Pierce",
										"James Buchanan",
										"Abraham Lincoln",
										"Andrew Johnson",
										"Ulysses S. Grant",
									];

// Loop through the presidents array using the counter variable as the index position in the array. 
// Also use the counter variable plus 1 ((i + 1)) to output which number each president was

for(var i = 0; i < presidents.length; i++) {
	console.log("President #" + (i + 1) + " was " + presidents[i]);
}
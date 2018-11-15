// Getting submit button and the form
var button = document.getElementById('submit'); 
var form = document.getElementById('postJob');

// Creating jobs array for saving data
var jobs = []

button.addEventListener('click', (e) => {
	e.preventDefault()	

	// Getting values of users inputs
  let companyName = document.getElementById('companyName').value || undefined
  let jobTitle = document.getElementById('jobTitle').value || undefined
  let description = document.getElementById('description').value || undefined
  let location = document.getElementById('location').value || undefined
  let salary = document.getElementById('salary').value || undefined
  let x = document.getElementById("time").selectedIndex;
  let time = document.getElementsByTagName("option")[x].value || undefined;

	// creating an object 
	let job = {
			 company: companyName,
			 title: jobTitle,
			 description: description,
			 location: location,
			 salary: salary,
			 time: time
	}

	// pushing the object to jobs array
	jobs.push(job);


	// Stores the JavaScript object as a string
	localStorage.setItem('jobs', JSON.stringify(jobs));
	
	alert("You have succussfull posted your job!");

	form.reset();
})

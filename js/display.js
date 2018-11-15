var $ = (arg) => document.querySelector(arg)
window.onload = () => {
	let tbody = $('#tbody')	
	let jobs_string = localStorage.getItem('jobs')
	let jobs; 

	if (jobs_string == null) {
		alert('No data was entered!')
	} else {
		jobs = JSON.parse(jobs_string)
	} 	

	for (job of jobs || []) {
		let body_content = `
			<tr>
				<td>${job.company}</td>
				<td>${job.title}</td>
				<td>${job.description}</td>
				<td>${job.location}</td>
				<td>${job.salary}</td>
				<td>${job.time}</td>
			</tr>
		`
		tbody.innerHTML += body_content
	}
}
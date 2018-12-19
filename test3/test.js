	let NO_WORKERS = 10;

	for(let i=0; i<NO_WORKERS; i++){
	console.log('Creez workerul: '+i);
	const worker = new Worker('worker.js');

	worker.onmessage = event =>{
		console.log("rezultat:" + event.data[1]);
	}
}


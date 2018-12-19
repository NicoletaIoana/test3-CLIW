let incercari=1000;

let c=0;
for(let i=0; i<incercari; i++)
{
	let x = Math.random()*2-1;
	let y = Math.random()*2-1;
	if (Math.sqrt(x*x + y*y) < 1) c++;
}

console.log("sunt in worker!");

let pi = c*4/incercari;
postMessage(["raspuns",pi]); 

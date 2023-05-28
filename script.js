//your JS code here. If required.
function press(){
	//console.log("hy");
 	var p = document.getElementById('status');
p.innerText=""; 
	var h = document.createElement('h1');
	h.innerText  = "Entered Metaverse";
p.appendChild(h);
	document.body.appendChild(p);
	
}
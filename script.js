//your JS code here. If required.
let ageinp=document.getElementById("age");
let nameinp=document.getElementById("name");

let submit=document.getElementById("btn");

btn.addEventListener("click",()=>{
	let ageval=ageinp.value;
	let nameval=nameinp.value;
	
		if(ageval>=18){
		setTimeout(()=>{
		alert("Welcome, "+nameval+". You can vote.")
	},4000)
	}
	else if(ageval<18 && ageval>0){
		alert("Oh sorry "+nameval+". You aren't old enough.")
	}
		else{
			alert("Please enter valid details");
		}
})


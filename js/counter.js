
//accessing all the elements; my logic
// var nums=document.querySelectorAll(".nums");
// 	nums.forEach(function(num){	
// 		var newInsta=num.innerText;
// 		var zeroCount=0;		
		 
// 		var fn=setInterval(function() {
// 		zeroCount=zeroCount+1;		
// 			num.innerText=zeroCount;
// 			if(num.innerText==newInsta) {
// 				clearInterval(fn);	
// 			}
// 		},2);			
// })





// traversy media logic
var nums = document.querySelectorAll(".nums");

nums.forEach(function(num) {
		let speed=100;
		let target=num.getAttribute("data-target");	
	const updateCounter=()=>{
		let count=+num.innerText;	
		let inc=target / speed;	
		if(count < target) {
			let currentVal=count+inc;
			num.innerText=Math.ceil(currentVal);
			setTimeout(updateCounter, 50);
		} else {
				num.innerText=target;
			}	
	};
	updateCounter();
})
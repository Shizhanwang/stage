window.onload = function(){
	 var walk = document.querySelectorAll("button")[0];
	 var arm1 = document.getElementById("arm1");
	 var arm2 = document.getElementById("arm2");
	 var leg1 = document.getElementById("leg1");
	 var leg2 = document.getElementById("leg2");
	 var head = document.getElementById("head");
	 var prewalk = document.getElementById("prewalk");
	 var run = document.querySelectorAll("button")[1];
	 var count = 0;
	 walk.onclick = function(){
	 	
	 	if(count % 2 == 0){
	 		arm1.style.transform = "rotate(20deg)";
	 		arm2.style.transform = "rotate(-20deg)";
	 		leg1.style.transform = "rotate(-30deg)";
	 		leg2.style.transform = "rotate(30deg)";
		}
	 	else{
	 		arm1.style.transform = "rotate(-20deg)";
	 		arm2.style.transform = "rotate(20deg)";
	 		leg1.style.transform = "rotate(30deg)";
	 		leg2.style.transform = "rotate(-30deg)";
	 	}
	 	count++;
	 	prewalk.style.transform += "translate(-30px)";
	 }
		
		run.onclick = function(){
	 	
	 	if(count % 2 == 0){
	 		arm1.style.transform = "rotate(20deg)";
	 		arm2.style.transform = "rotate(-20deg)";
	 		leg1.style.transform = "rotate(-30deg)";
	 		leg2.style.transform = "rotate(30deg)";
		}
	 	else{
	 		arm1.style.transform = "rotate(-20deg)";
	 		arm2.style.transform = "rotate(20deg)";
	 		leg1.style.transform = "rotate(30deg)";
	 		leg2.style.transform = "rotate(-30deg)";
	 	}
	 	count++;
	 	prewalk.style.transform += "translate(30px)";
	 	
	 }
	
}

const Bilder = ["1.png","2.png","3.png","4.png","5.png","6.png"];  	
function a(){
	 	 document.getElementById("hallo").value="Tschüss";
  	}

	function Zufallsgenerator(){
			document.getElementById("demo").src = Bilder[Math.floor(Math.random() *6)];
	}
	
		

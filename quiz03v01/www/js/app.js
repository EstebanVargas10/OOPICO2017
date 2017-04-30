
 function malespin(){
 	var givenWord = document.getElementById("text").value;
 	var givenWordLowCase = givenWord.toLowerCase();
 	var givenWordLowCaseArray = givenWordLowCase.split("");
 	var arrayLength = givenWordLowCaseArray.length;

 	for(var i=0; i<arrayLength; i++){
 		switch (givenWordLowCaseArray[i]) {
		    case "a":
		        givenWordLowCaseArray[i] = "e";
		        break;
		    case "e":
		        givenWordLowCaseArray[i] = "a";
		        break;
		    case "i":
		        givenWordLowCaseArray[i] = "o";
		        break;
		    case "o":
		        givenWordLowCaseArray[i] = "i";
		        break;
		    case "b":
		        givenWordLowCaseArray[i] = "t";
		        break;
		    case "t":
		        givenWordLowCaseArray[i] = "b";
		        break;
		    case "p":
		        givenWordLowCaseArray[i] = "m";
		        break;
		    case "m":
		        givenWordLowCaseArray[i] = "p";
		        break;
		    case "f":
		        givenWordLowCaseArray[i] = "g";
		        break;
		    case "g":
		        givenWordLowCaseArray[i] = "f";
		        break;            
		}
 	}

 	var encrypted = givenWordLowCaseArray.toString().replace(/,/g, "");
 	document.getElementById("encrypted").innerHTML = '<p>Malespin: ' + encrypted + '</p>';
 }

 function murcielago(){
 	var givenWord = document.getElementById("text").value;
 	var givenWordLowCase = givenWord.toLowerCase();
 	var givenWordLowCaseArray = givenWordLowCase.split("");
 	var arrayLength = givenWordLowCaseArray.length;

 	for(var i=0; i<arrayLength; i++){
 		switch (givenWordLowCaseArray[i]) {
		    case "m":
		        givenWordLowCaseArray[i] = "0";
		        break;
		    case "u":
		        givenWordLowCaseArray[i] = "1";
		        break;
		    case "r":
		        givenWordLowCaseArray[i] = "2";
		        break;
		    case "c":
		        givenWordLowCaseArray[i] = "3";
		        break;
		    case "i":
		        givenWordLowCaseArray[i] = "4";
		        break;
		    case "e":
		        givenWordLowCaseArray[i] = "5";
		        break;
		    case "l":
		        givenWordLowCaseArray[i] = "6";
		        break;
		    case "a":
		        givenWordLowCaseArray[i] = "7";
		        break;
		    case "g":
		        givenWordLowCaseArray[i] = "8";
		        break;
		    case "o":
		        givenWordLowCaseArray[i] = "9";
		        break;            
		}
 	}

 	var encrypted = givenWordLowCaseArray.toString().replace(/,/g, "");
 	document.getElementById("encrypted").innerHTML = '<p> Murcielago: ' + encrypted + '</p>';
 }

 function cesar(){
 	var givenWord = document.getElementById("text").value;
 	var givenWordLowCase = givenWord.toLowerCase();
 	var givenWordLowCaseArray = givenWordLowCase.split("");
 	var arrayLength = givenWordLowCaseArray.length;

 	for(var i=0; i<arrayLength; i++){
 		switch (givenWordLowCaseArray[i]) {
		    case "a":
		        givenWordLowCaseArray[i] = "d";
		        break;
		    case "b":
		        givenWordLowCaseArray[i] = "e";
		        break;
		    case "c":
		        givenWordLowCaseArray[i] = "f";
		        break;
		    case "d":
		        givenWordLowCaseArray[i] = "g";
		        break;
		    case "e":
		        givenWordLowCaseArray[i] = "h";
		        break;
		    case "f":
		        givenWordLowCaseArray[i] = "i";
		        break;
		    case "g":
		        givenWordLowCaseArray[i] = "j";
		        break;
		    case "h":
		        givenWordLowCaseArray[i] = "k";
		        break;
		    case "i":
		        givenWordLowCaseArray[i] = "l";
		        break;
		    case "j":
		        givenWordLowCaseArray[i] = "m";
		        break;  
		    case "k":
		        givenWordLowCaseArray[i] = "n";
		        break;
		    case "l":
		        givenWordLowCaseArray[i] = "o";
		        break;
		    case "m":
		        givenWordLowCaseArray[i] = "p";
		        break;
		    case "n":
		        givenWordLowCaseArray[i] = "q";
		        break;
		    case "o":
		        givenWordLowCaseArray[i] = "r";
		        break;
		    case "p":
		        givenWordLowCaseArray[i] = "s";
		        break;
		    case "q":
		        givenWordLowCaseArray[i] = "t";
		        break;
		    case "r":
		        givenWordLowCaseArray[i] = "u";
		        break;
		    case "s":
		        givenWordLowCaseArray[i] = "v";
		        break;
		    case "t":
		        givenWordLowCaseArray[i] = "w";
		        break;
		    case "u":
		        givenWordLowCaseArray[i] = "x";
		        break;
		    case "v":
		        givenWordLowCaseArray[i] = "y";
		        break;
		    case "w":
		        givenWordLowCaseArray[i] = "z";
		        break;  
		    case "x":
		        givenWordLowCaseArray[i] = "a";
		        break;
		    case "y":
		        givenWordLowCaseArray[i] = "b";
		        break;
		    case "z":
		        givenWordLowCaseArray[i] = "c";
		        break;                            
		}
 	}

 	var encrypted = givenWordLowCaseArray.toString().replace(/,/g, "");
 	document.getElementById("encrypted").innerHTML = '<p> Cesar: ' + encrypted + '</p>';
 }

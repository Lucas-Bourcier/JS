
		// FONCTION SOMME
/*const somme = new Function('a', 'b', 'return a + b');

alert(somme(1,2))
	document.getElementById("msg");*/
    function somme(){
             var nbr1, nbr2, sum;
             nbr1 = Number(document.getElementById("nbr1").value);
             nbr2 = Number(document.getElementById("nbr2").value);
             sum = nbr1 + nbr2;
             document.getElementById("sum").value = sum;
         }
	
	
		// OPTION MAX
//alert(Math.max(5,10));

//function max(a,b){
	//return (a>b)?a:b;
//}
		// FONCTION MAX
//alert(max(2,5))
//document.getElementById

function maximum(){
	var max1, max2, max
    max1 = Number(document.getElementById("max1").value);
    max2 = Number(document.getElementById("max2").value);
	max	 = (max1>max2)?max1:max2;
	document.getElementById("max").value = max;
}
/*
	  <input id="max1"> >/=/< <input id="max2">
      <button onclick="maximum()">Calculer le max</button>
	  <input disabled type="number" id="max">
	  */
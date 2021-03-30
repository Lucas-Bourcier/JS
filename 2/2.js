window.addEventListener('load',()=>{ //ajoute le script uniquement apres le chargement total de la page
	document.getElementById('bt-run').addEventListener('click',()=>{ //ajoute les elements suivant apres un click
	let elm=document.getElementById('selector').value; //Attribue la valeur style a l'objet Selectionné dans le input
	let css=document.getElementById('style').value; //Attribue la valeur style situé dans le html
	document.querySelector(elm).style.cssText=css;
	
	});
});
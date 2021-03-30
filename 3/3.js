let bbb = 0; //Ici j'initialise la variable en lui assignant la valeur 0

document.getElementById('aaa').addEventListener('click', event => { // Ici j'accede a mon ID aaa qui ajoute un evenement 'Click' au event actuel et qui fait :
	alert(bbb++) //Alert Variable bbb + 1
});
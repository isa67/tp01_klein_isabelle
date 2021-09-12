



$("form").submit(function(e){
	/* confirmer le mdp
	 que les champs soient non nuls*/

	/* récupération des champs */
    	let nom = $("#nom").val();
	let prenom = $("#prenom").val();
	let cp = $("#codepostale").val();
	let tel =  $("#tel").val();
	let email = $("#email").val();
	let login = $("#login").val();
	let mdp = $("#mdp").val();
	let mdpconfirm = $("#mdpconfirm").val();

	/* configuration des RegExp */
    	let nomRE = new RegExp('^[A-Z][a-z]*+([- ]*[A-Z][a-z]*)*$');
	let cpRE =  new RegExp('^[0-9]{5}$');
	let tel =  new RegExp('^[0-9]10$');
	let emailRE =  new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+');
	let loginRE =  new RegExp('^[0-9a-zA-Z]{3,20}$');
	let mdpRE = new RegExp('^[0-9a-zA-Z]{8,20}$');

	/* test du nom*/
    	if (nomRE.test(nom)) {
            	alert("Le nom est valide");
        	}
        else{
            	alert("Le nom n'est pas valide (une majuscule puis des minuscules)");
		e.preventDefault();
        	return false;
        }

	//test du prénom
	if (!nomRE.test(prenom)) {
            	alert("Le prénom n'est pas valide (une majuscule puis des minuscules)");
        	e.preventDefault();
        	return false;
	}
	
	//test du code postal
	else if (!cpRE.test(cp)) {
            	alert("Le code postal n'est pas valide (5 chiffres)");
		e.preventDefault();
        	return false;
        }

	//test du numero de telephone 
	else if (!telRE.test(tel)) {
            	alert("Le numéro de téléphone n'est pas valide (10 chiffres)");
		e.preventDefault();
        	return false;
        }

	//test du mail
	else if (!emailRE.test(email)) {
            	alert("Le mail n'est pas valide");
		e.preventDefault();
        	return false;
        }

	//test du login
	else if (!loginRE.test(login)) {
            	alert("Le login n'est pas valide (entre 3 et 20 lettres minuscules, majuscules ou chiffres");
        	e.preventDefault();
        	return false;
	}

	// test du mot de passe 
    	else if (!mdpRE.test(mdp)) {
            	alert("Le mot de passe n'est pas valide (entre 8 et 20 charactères attendus, minuscules, majuscules ou chiffre)");
        	e.preventDefault();
        	return false;
	}

	// test de confirmation du mot de passe 
    	else if (!mdpRE.test(mdpconfirm)) {
            	alert("La confirmation du mot de passe n'est pas valide (entre 8 et 20 charactères attendus, minuscules, majuscules ou chiffre)");
		e.preventDefault();
        	return false;        
	}

	// test de cohérence entre le mot de passe et sa confirmation 
    	else if (mdp!=mdpconfirm) {
            	alert("Le mot de passe et la confirmation sont différents");
		e.preventDefault();
        	return false;
        }
});


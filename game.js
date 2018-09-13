var method1 = prompt("Welke methode kies jij 1 koolhydraten vrij 2 spartaans of 3 eet de helft?");

if (method1 == 1){
	alert("je heb de koolhydraten vrije methode gekozen");
		var eat1 = prompt("je hebt 3 dagen getraint je hebt wel een pizza verdient hoor");
		if (eat1.toLowerCase() == "ja"){
			alert("jij gaat het niet halen jongen");
		}
		else if (eat1.toLowerCase() == "nee"){
			alert("goed zo geen junk food");
			var answer = prompt("probeer je de nieuwe energybar die wordt uitgedeeld bij de sportschool voor Ja(1) of Nee(2)");
			if (answer == 1){
				alert("Hoe kan je ook vallen voor zo een duidelijke val");
			}
			else if (answer == 2){
				alert("Goed zo hou deze instelling aan");
			}
			else{
				alert("kom op maak een keuze");
			}
		}
		else{
			alert("vul ja of nee in");
		}
}

else if (method1 == 2){
	alert("je hebt de spartaanse methode gekozen");
		var eat2 = prompt("je hebt zojuist 5 dagen achter elkaar getraint je verdient wel een cheatday hoor?");
		if (eat2.toLowerCase() == "ja"){
			alert("je heb een heftige maaltijd achter de rug met teveel calorieën dat moet je aanpakken");
			var answer = prompt("ga je nu twee uur fietsen(1) of de marathon(2) lopen");
			if (answer == 1){
				answer = prompt("je heb een lekke band waardoor je kan kiezen voor zelfreparatie(1) of fietsenmaker(2)");
				if (answer == 1){
					alert("je binnenband heeft 5 gaatjes en je hebt maar twee plakkertjes bij je dus kan je niet aan genoeg beweging komen");
				}
				else if(answer == 2){
					alert("de fietsenmaker duurde te lang waardoor je je motivatie bent kwijtgeraakt");
				}
				else{
					alert("hou maar op je instelling is niet goed ingesteld");
				}
			}
			else if (answer == 2){
					alert("je heb de marathon behaald en daarmee 65% van je doel behaald ga zo door");
					answer = prompt("we swappen de dieet in de laatste periode kies voor sapdieet(1) of soepdiet(2)");
				if (answer == 1){
					alert("helaas heb je maar 95% van je doel behaald dus je bent maar 28.5 kilo af ");
				}
				else if (answer == 2){
					alert("helaas door de soepdieet ben je meer brood gaan eten om te vullen en dus heb je niet je doel behaald");
				}
				else{
					alert("ik neem aan dat dit toch niks voor jou is kap er maar mee");
				}
			}
			else{
					alert("kom op maak nou een keuze en verspeel mijn tijd niet");
			}
		}
		else if (eat2.toLowerCase() == "nee"){
			alert("goed zo hou deze instelling en probeer de mobicep fatburner aan");
			var answer = prompt("Gaat u beginnen met de fatburner kies voor Ja(1) of nee(2)");
				if (answer == 1){
					alert("goed zo");
				}
				else if (answer ==2){
					alert("jdjd");
				}
				else{
					alert("kom op");
				}
			var answer = prompt("ben je bereid om veganist te worden");
				if (answer == 1){
					alert("goeie zet van je nu zal je zeker je doel behalen");
				}
				else if (answer ==2){
					alert("jammer dit zal je terug pakken aan het einde");
				}
				else{
					alert("kom op");
				}	
			alert("nog even doorzetten je doel is bijna behaald");
			alert("kom op nog een paar dagen te gaan");
			alert("GEFELICITEERD je heb je doel behaald");
		}
		else{
			alert("vul ja of nee in");
		}
}
else if (method1 == 3){
	alert("je hebt de eet de helft methode gekozen");
		var eat3 = prompt("je gaat er goed tegen aan je heb wel een hele broodje verdiendt");
		if (eat3.toLowerCase() == "ja"){
			alert("geef maar op");
		}
		else if (eat3.toLowerCase() == "nee"){
			alert("misschien is er nog hoop voor jou");
		}
		else{
			alert("vul ja of nee in");
		}
}
else if (method1.toLowerCase()== "stop"){
	alert("ABC ik kap ermee");
}
else{
	alert("je bent lui ik snap het");	
}
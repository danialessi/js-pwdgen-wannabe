// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21 

// Nome 
var userName = prompt("Ciao, dimmi il tuo nome");
console.log(userName);

// Cognome 
var surname = prompt("Ora il tuo cognome");
console.log(surname);

// Colore preferito 
var color = prompt("Il tuo colore preferito?");
console.log(color);

// Risultato 
document.getElementById("password").innerHTML = userName + surname + color + "21";
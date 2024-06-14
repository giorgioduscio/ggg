export const mainArray =[]
function Persona(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;

    this.pushToTheList = function() { 
		mainArray.push(this);
	}
	this.pushToTheList();
}

new Persona("Mario", "Rossi");
new Persona("Anna", "Bianchi");

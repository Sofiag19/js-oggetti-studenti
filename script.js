// Oggetti
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// oggetto con nome, cognome ed età e stampare a schermo le proprietà
// metodo 1 - creao l'oggetto con già le proprietà
var studente = {
  "nome" : "Matteo",
  "cognome" : "Rossi",
  "età" : 30
};

for (var dati in studente) {
  console.log(studente[dati]);
}

// metodo 2 - creo l'oggetto vuoto e lo riempio con le proprietà successivamente
var studente1 = {};

studente1.nome = "Lucia";
studente1.cognome = "Magnini";
studente1.età = 24;

for (var dati1 in studente1) {
  console.log(studente1[dati1]);
}

// creare array di studenti e stampare per ognuno nome e cognome
elencoStudenti = [];

var alunno1 = {};
var alunno2 = {};
var alunno3 = {};
var alunno4 = {};
var alunno5 = {};

elencoStudenti.push(alunno1);
elencoStudenti.push(alunno2);
elencoStudenti.push(alunno3);
elencoStudenti.push(alunno4);
elencoStudenti.push(alunno5);

alunno1.nome = "Pietro";
alunno1.cognome = "Lazzaro";
alunno1.eta = 20;

alunno2.nome = "Francesca";
alunno2.cognome = "Merli";
alunno2.eta = 21;

alunno3.nome = "Vittoria";
alunno3.cognome = "Usigni";
alunno3.eta = 19;

alunno4.nome = "Stefano";
alunno4.cognome = "Visconti";
alunno4.eta = 26;

alunno5.nome = "Giorgio";
alunno5.cognome = "Ugolinelli";
alunno5.eta = 24;

console.log(elencoStudenti);

for (var i = 0; i < elencoStudenti.length; i++) {
    console.log(elencoStudenti[i].nome, elencoStudenti[i].cognome);
}

// creare attraverso 3 prompt (nome, cognome, età) l'inserimento di un nuovo alunno
var alunno6 = {};

elencoStudenti.push(alunno6);

nomAlunno = prompt("Inserisci il nome del nuovo alunno");
alunno6.nome = nomAlunno;

cognomAlunno = prompt("Inserisci il cognome del nuovo alunno");
alunno6.cognome = cognomAlunno;

etaAlunno = parseInt(prompt("Inserisci l'età del nuovo alunno"));
alunno6.età = etaAlunno;

console.log(alunno6);

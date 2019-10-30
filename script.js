// Oggetti
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// oggetto con nome, cognome ed età e stampare a schermo le proprietà
// metodo 1
var studente = {
  "nome" : "Matteo",
  "cognome" : "Rossi",
  "eta" : 30
};

for (var dati in studente) {
  console.log(studente[dati]);
}

// metodo 2
var studente1 = {};

studente1.nome = "Lucia";
studente1.cognome = "Magnini";
studente1.eta = 24;

for (var dati1 in studente1) {
  console.log(studente1[dati1]);
}

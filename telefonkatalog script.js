const prompt = require("prompt-sync")(); 

var telefonkatalog = [];

function printMeny() {
    console.log("-------------------- Telefonkatalog --------------------");
    console.log("| 1. Legg til ny person                                |");
    console.log("| 2. Søk opp person eller telefonnummer                |");
    console.log("| 3. Vis alle personer                                 |");
    console.log("| 4. Avslutt                                           |");
    console.log("--------------------------------------------------------");

    const tallFraMeny = prompt("Velg et tall fra menyen: ");
    utfoerManyvalg(tallFraMeny);
}

printMeny();

function utfoerManyvalg(tallFraMeny) {
    if (tallFraMeny == 1) {
        leggTilPerson();
    } else if (tallFraMeny == 2) {
        sokPerson();
    } else if (tallFraMeny == 3) {
        visAlle();
    } else if (tallFraMeny == 4) {
        avslutt();
    } else {
        console.log("Du må velge et gyldig tall (1-4)");
        printMeny();
    }
}

function leggTilPerson() {
    var inputFornavn = prompt("Skriv inn fornavn: ");
    var inputEtternavn = prompt("Skriv inn etternavn: ");
    var inputTelefonnummer = prompt("Skriv inn telefonnummer: ");

    var nyPerson = { fornavn: inputFornavn, etternavn: inputEtternavn, telefon: inputTelefonnummer };
    telefonkatalog.push(nyPerson);

    console.log(nyPerson.fornavn + " " + nyPerson.etternavn + " er registrert med telefonummer " + nyPerson.telefon);
    prompt("Trykk en tast for å gå tilbake til menyen")
    printMeny()
}

function sokPerson() {
    if (telefonkatalog.length == 0) {
        console.log("Det er ingen personer regristert i katalogen.");
        prompt("Trykk en tast for å gå tilbake til menyen")
        printMeny();
    } else {
        console.log("1. Søk på fornavn")
        console.log("2. Søk på etternavn")
        console.log("3. Søk på telefonnummer")
        console.log("4. Tilbake til hovedmeny")
        var sokefelt = prompt("Skriv inn ønsket søk 1-3, eller 4 for å gå tilbake:")
        if (sokefelt == "1") {
            navn = prompt("Fornavn")
            finnPerson("fornavn", navn)
        } else if (sokefelt == "2") {
            navn = prompt("Etternavn")
            finnPerson("etternavn", navn)
        } else if (sokefelt == "3") {
            tlfnummer = prompt("Telefonnummer")
            finnPerson("telefon", tlfnummer)
        } else if (sokefelt == "4") {
            printMeny()
        } else {
            prompt("Ugyldig valg. Velg et tall mellom 1-4.")
            sokPerson()
        }
    }
}

function finnPerson(typeSok, sokeTekst) {
    var funnet = false;
    for (var i = 0; i < telefonkatalog.length; i++) {
        if (telefonkatalog[i][typeSok] === sokeTekst) {
            funnet = true;
            (telefonkatalog[i].fornavn + " " + telefonkatalog[i].etternavn + " er registrert med telefonnummer "+ telefonkatalog[i].telefon);
        }
    }
    if (funnet === false) {
        console.log("Beklager, søket ga ingen treff.")
    }
    prompt("Trykk en tart for å gå tilbake til menyen")
    printMeny()
}

function visAlle() {
    if (telefonkatalog.length == 0) {
        console.log("Det er ingen personer registret i katalogen.");
        prompt("Trykk en tart for å gå tilbake til menyen")
        printMeny();
    } else {
        console.log("--------------------");
        for (var i = 0; i < telefonkatalog.length; i++) {
            console.log(" Fornavn: " + telefonkatalog[i].fornavn + " Etternavn: " + telefonkatalog[i].etternavn + " Telefonnummer: " + telefonkatalog[i].telefon);            
        }
        console.log("--------------------")
        prompt("Trykk en tart for å gå tilbake til menyen")
        printMeny();
    }
}

function avslutt() {
    console.log ("Fuck off");
    process.exit();
}
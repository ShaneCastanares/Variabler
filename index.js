
//Oppgave 1
// Functions er bygge blokker i Javascript, Function forteller JavaScript om at det som kommer nå er en funksjon, og at JavaScript skal behandle det som en funksjon. Etter vi har skrevet function gir vi funksjonen ett navn ved å skrive dette.
function navn(){

}

//Oppgave 2

function HelloWorld(){  //Her lager jeg funkjsonen og gir den ett navn
    console.log("Hello World!");  // Har gir jeg den oppgaven inne i scopen, og scope er det som er innafor { }
 }
 HelloWorld(); // Og her kaller jeg på funskjonen ved å skrive navnet på funskjonen, og dette funker siden jeg har gitt den en verdi og en oppgave.



 //oppgave 3
// I Parameter området som er() innenfor en funskjon, kan man ha ting fra 0 til mange parametere i hver funksjon. Og alle parametere må adskilles med komma.
//Forskejllen på Parameter og argument, er når vi skriver i funksjonen bruker vi parameter, også når vi skal kalle på den så bruker vi argument
//for eksempel

// Tatt eksempel fra nettside
parameter
function fortellEnVits(navn){
   console.log('Alle barna hadde jobb unntatt ' + navn + ', ' + navn           + ' gikk i barnehagen.')
};
///Så kan vi kalle på funksjonen og gi den input/ett navn å bruke

              argument
fortellEnVits('Espen')
///funksjonen vil da returnere:


//Oppgave 4
function test(Okey){
    console.log("Min parameter er", Okey);
}
test("Jesus");

// Oppgave 5

function Yallah(Ve, De) {
    console.log("Jeg er to parametere ", Ve, "og ", De)
}
Yallah("123", "abc");

// Oppgave 6
// Skjøtnte ikke helt hvordan jeg skulle forkalre, men fant denne som jeg skjønner meningen med
// The return statement ends function execution and specifies a value to be returned to the function caller.


// Oppgave 7
let x = return1(4, 5);
function return1 (tall1, tall2) {
    return tall1 * tall2;
}
return1();

// Oppgave 8
// Du sa jeg bare kan hoppe over


// Retteskjema for elev

// Oppgave 1  	Besvarelsen er forankret i minst to hovedpoenger				/2

// Oppgave 2  	Besvarelsen ‘dissekerer’ funksjonen i sine hoveddeler og forklarer hva

// som er hensikten med dem.							/5

// Oppgave 3  	Det er tydelig forklart hva som er skille mellom parametere og

// agumenter Besvarelsen viser tydelig at du har forstått forskjellen		/4

// Oppgave 4  	Løsningen er i henhold til oppgaven og testingen viser at den fungerer	/4

// Oppgave 5	Løsningen er i henhold til oppgaven og testingen viser at den fungerer	/4

// Oppgave 6	Besvarelsen kan redegjøre for hvordan koden vil oppføre seg ved return;

// -hvordan påvirker det et scope?

// -hvordan påvirker det koden rundt?						/6

// Oppgave 7	Løsningen har kun én utgang

// Testen demonsterer bruk av retur enten via variabel, eller via en

// Utskrift										/6

// Oppgave 8

// -den tekstlige forklaringen viser at du har en teoretisk forståelse av

// Hvordan du kan løse oppgaven, og hvilke begreper som er relevante	/4

// -den praktiske løsningen og testingen viser at du kan løse problemet

// med relevant funksjonalitet.							/4



// Total poengsum										/29

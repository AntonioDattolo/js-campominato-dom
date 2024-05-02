L'utente clicca su un bottone che genererà una griglia di gioco quadrata 10x10 (con 100 celle).
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


:roccia: MILESTONE #1
Create la vostra griglia in HTML e CSS, in maniera grossolana. Vi servirà solo per testare le classi, come visto in mattinata con la griglia 3x3.


:roccia: MILESTONE #2
Commentate l'HTML e iniettatelo tramite un ciclo in JS, senza pensare al click o alle funzioni.


:roccia: MILESTONE #3
Aggiungete la gestione dell'evento di click, che stampi il numero e cambi il colore della cella.

:roccia: MILESTONE #4
Spostate alcuni elementi in funzioni, ad esempio la creazione del quadrato e/o l'event listener.

:regalo: BONUS #1: CAPIRE LO SCOPE
In milestone #3 stampate il numero, prendendolo dal contenuto della cella. Provate adesso a modificare il ciclo che crea le celle facendo in modo che le celle siano vuote. Come fate adesso a stampare qualcosa al click? Riesco a leggere qualcosa da scope superiori?

:regalo: BONUS #2: CAPIRE EVENTI E FUNZIONI
Provate a eseguire quanto fatto fin qui NON al caricamento della pagina, ma al click su un pulsante "Avvia gioco".

:regalo: BONUS #3: QUANDO IL GIOCO SI FA DURO
Aggiungere una select accanto al bottone di start. La select presenterà tre difficoltà di gioco tra cui scegliere (easy, medium, hard).
Quando generate la griglia userete un numero di celle che dipende dalla difficoltà.
Easy: 100 celle (10x10)
Medium: 81 celle (9x9)
Hard: 49 (7x7)
Ragionate bene su quando vi serve conoscere la selezione dell'utente: è in quel momento che dovrete recuperare il dato.


*****************************
MILESTONE 2
SELEZIONATO L'ELEMENTO CON LA COSTANTE "GRID" IN CUI INIETTARE SUCCESSIVAMENTE CON IL CICLO "FOR" GLI ELEMENTI HTML CHE ANDRANNO A FORMARE LA GRIGLIA 10X10. SEMPRE ALL'INTERNO DEL CICLO ASSEGNO LA CLASSE "BASE-SQUARE" A OGNI ELEMENTO CHE ANDRò A CREARE.

MILESTONE 3
SELEZIONATO L'ELEMENTO BUTTON CON ID "PLAY" TRAMITE VARIABILE, PER POI COLLEGARE LA FUNZIONE DI CREAZIONE DELLA GRIGLIA AL SUO CLICK TRAMITE "ADDEVENTLISTENER".

MILESTONE 4
CREATA FUNZIONE CHE CREA I QUADRATI "createSquare".
CREATA FUNZIONE CHE CREA LA GRIGLIA TRAMITE CICLO FOR, CHIAMATA "start".
SUCCESSIVAMENTE COLLEGATE INSIEME LE DUE FUNZIONI ATTRAVERSO LA CREAZIONE DELLA VARIABILE "gridCreations" ALL'INTERNO DEL CICLO FOR.
INFINE CREATO E COLLEGATO AL BUTTON CON ID "play" L'EVENTO(click) CHE DA INIZIO ALLE FUNZIONI.

BONUS 2
E' STATO SVILUPPATO DURANTE LE MILESTONE, TRAMITE PULSANTE "PLAY".
BONUS 1
AGGIUNTA FUNZIONE PER CUI AL CLICK SULLA CELLA VIENE STAMPATO IL NUMERO DELLA CELLA E VIENI CAMBIATO IL COLORE DI ESSA IN MODO CHE SIA EVIDENZIATA.
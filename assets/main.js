
// Mail

// Chiedi all’utente la sua email,

// controlla che sia nella lista di chi può accedere,

// stampa un messaggio appropriato sull’esito del controllo.

function conferma(){

    
    let Registrate = [ 'mail@test.com', 'test@mail.com', 'mail@mail.com', 'test@test.com' ];
    
    let email = document.getElementById('contMail').value;
    
    let sold = false;
    
    for ( i = 0; i < Registrate.length; i ++ ){
        
        if( Registrate[i] == email ){
            sold = true;
        }
        
    }
    
    if ( sold ){
        document.writeln('sei già iscritto')
    }
    else {
        document.writeln('non sei iscritto al sito');
    }

}


function randomNumber(max, min){
    return Math.floor( Math.random() * max ) + min
}

function rand(){
    let pc = randomNumber(6 , 1)
    let giocatore = randomNumber(6, 1 )

    if( giocatore > pc ){
        document.writeln('il giocatore ha vinto')
    }
    else if( pc > giocatore ){
        document.writeln('il computer ha vinto')
    }
    else{
        document.writeln('pareggio')
    }
}               
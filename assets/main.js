
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
        console.log('sei già iscritto')
    }
    else {
        console.log('non sei iscritto al sito');
    }

}
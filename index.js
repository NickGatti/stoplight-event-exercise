( function () {
    'use strict';
    let stopBut = document.querySelector( '#stopButton' )
    let slowBut = document.querySelector( '#slowButton' )
    let goBut = document.querySelector( '#goButton' )

    let changeLights = ( ( e ) => {
        for ( let key in lightMap ) {
            if ( e.target.id === 'stopButton' ) {
                lightMap[ key ].style.backgroundColor = 'red'
            } else if ( e.target.id === 'slowButton' ) {
                lightMap[ key ].style.backgroundColor = 'yellow'
            } else if ( e.target.id === 'goButton' ) {
                lightMap[ key ].style.backgroundColor = 'green'
            }
        }
    } )

    let lightMap = {
        'red': document.querySelectorAll( '.bulb' )[ 0 ],
        'yellow': document.querySelectorAll( '.bulb' )[ 1 ],
        'green': document.querySelectorAll( '.bulb' )[ 2 ]
    }

    stopBut.addEventListener( 'click', changeLights )
    slowBut.addEventListener( 'click', changeLights )
    goBut.addEventListener( 'click', changeLights )

    // YOUR CODE HERE
} )();
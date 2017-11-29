( function () {
    'use strict';
    let stopBut = document.querySelector( '#stopButton' )
    let slowBut = document.querySelector( '#slowButton' )
    let goBut = document.querySelector( '#goButton' )

    let logging = {
        flag: false
    }

    let loggingFlag = false

    let changeLights = ( ( e ) => {
        let loggingFlag = false
        for ( let key in lightMap ) {
            if ( e.target.id === 'stopButton' ) {
                lightMap[ key ].style.backgroundColor = 'black'
                if ( loggingFlag === false && key === 'red' ) {
                    if ( lightMap[ key ].style.backgroundColor === 'red' ) {
                        lightMap[ key ].style.backgroundColor = 'black'
                    } else {
                        lightMap[ key ].style.backgroundColor = 'red'
                    }
                    if ( logging.flag === false ) {
                        console.log( document.querySelector( '#stopLight' ).id, 'On' )
                        logging.flag = document.querySelector( '#stopLight' ).id
                    } else if ( logging.flag !== false ) {
                        console.log( logging.flag, 'Off' )
                        console.log( document.querySelector( '#stopLight' ).id, 'On' )
                        logging.flag = document.querySelector( '#stopLight' ).id
                    }
                    loggingFlag = true
                }
            } else if ( e.target.id === 'slowButton' ) {
                lightMap[ key ].style.backgroundColor = 'black'
                if ( loggingFlag === false && key === 'yellow' ) {
                    if ( lightMap[ key ].style.backgroundColor === 'yellow' ) {
                        lightMap[ key ].style.backgroundColor = 'black'
                    } else {
                        lightMap[ key ].style.backgroundColor = 'yellow'
                        document.querySelector( '#sound' ).play()
                    }
                    if ( logging.flag === false ) {
                        console.log( document.querySelector( '#slowLight' ).id, 'On' )
                        logging.flag = document.querySelector( '#slowLight' ).id
                    } else if ( logging.flag !== false ) {
                        console.log( logging.flag, 'Off' )
                        console.log( document.querySelector( '#slowLight' ).id, 'On' )
                        logging.flag = document.querySelector( '#slowLight' ).id
                    }
                    loggingFlag = true
                }
            } else if ( e.target.id === 'goButton' ) {
                lightMap[ key ].style.backgroundColor = 'black'
                if ( loggingFlag === false && key === 'green' ) {
                    if ( lightMap[ key ].style.backgroundColor === 'green' ) {
                        lightMap[ key ].style.backgroundColor = 'black'
                    } else {
                        lightMap[ key ].style.backgroundColor = 'green'
                    }
                    if ( logging.flag === false ) {
                        console.log( document.querySelector( '#goLight' ).id, 'On' )
                        logging.flag = document.querySelector( '#goLight' ).id
                    } else if ( logging.flag !== false ) {
                        console.log( logging.flag, 'Off' )
                        console.log( document.querySelector( '#goLight' ).id, 'On' )
                        logging.flag = document.querySelector( '#goLight' ).id
                    }
                    loggingFlag = true
                }
            }
        }
    } )

    let lightMap = {
        'red': document.querySelector( '#stopLight' ),
        'yellow': document.querySelector( '#slowLight' ),
        'green': document.querySelector( '#goLight' )
    }

    let logLight = ( ( e ) => {
        console.log( e.target.innerHTML )
    } )

    let assignEvent = ( ( eventListener, fun ) => {
        stopBut.addEventListener( eventListener, fun )
        slowBut.addEventListener( eventListener, fun )
        goBut.addEventListener( eventListener, fun )
    } )

    assignEvent( 'click', changeLights )
    assignEvent( 'mouseenter', logLight )
    // YOUR CODE HERE
} )();
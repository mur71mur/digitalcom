var erfc = require( 'math-erfc' );

function main(){

    var N0 = 1.0;

    for(var k = 0; k <= 30; k++ ){
        var EsN0dB = k;
        var EsN0 = Math.pow( 10.0, EsN0dB/10.0 );
        var SER = 2 * 0.5 * erfc( Math.sqrt( EsN0/21 ) );
        console.log(SER);
    }
}

main();

function gauss(){
    var x,
        _y,
        _z;
    x = Math.random();

    while (x<=0) {
        x = Math.random();
    }
    _y = Math.random();

    r = Math.sqrt(-2*Math.log(x));
    var z = r * Math.cos( 2 * Math.PI * _y);
    var w = r * Math.sin( 2 * Math.PI * _y);
    return [z,w];
}

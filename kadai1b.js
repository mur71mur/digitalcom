function main(){

    var N0 = 1.0;

    var s = 1/Math.sqrt(2);
    var pam8 = [-7,-5,-3,-1,1,3,5,7];
    var Ndata = 100000;

    for(var i = 0 ; i <= 30 ; i++){
        var EsN0dB = i;
        var EsN0 = Math.pow(10.0, EsN0dB/10);
        var Es = EsN0 * N0;
        var A = Math.sqrt(Es/21);
        var error = 0;
        for(var j = 0 ; j <= Ndata ; j++){
            var p = Math.random();

            if( p > 0.875) {
                var d = -7;
                var X = d*A;
            }else if(0.75<p&&p<=0.875){
                var d = -5;
                var X = d*A;
            }else if(0.625<p&&p<=0.75){
                var d = -3;
                var X = d*A;
            }else if(0.5<p&&p<=0.625){
                var d = -1;
                var X = d*A;
            }else if(0.375<p&&p<=0.5){
                var d = 1;
                var X = d*A;
            }else if(0.25<p&&p<=0.375){
                var d = 3;
                var X = d*A;
            }else if(0.125<p&&p<=0.25){
                var d = 5;
                var X = d*A;
            }else if(p<=0.125){
                var d = 7;
                var X = d*A;
            }
            var [z,w] = gauss();
            var y = X+s*z;
            if((d==-7&&(y>-6*A)) || (d==-5&&(y>-4*A||y<-6*A)) || (d==-3&&(y>-2*A||y<-4*A)) || (d==-1&&(y>0||y<-2*A)) || (d==1&&(y>2*A||y<0)) || (d==3&&(y>4*A||y<2*A)) || (d==5&&(y>6*A||y<4*A)) || (d==7&&(y<6*A)) ){
                error++;
            }
        }
        var SER = error/Ndata;
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

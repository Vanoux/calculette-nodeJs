//  Multiplication (me suis aidé de learnyounode surtout pour process.argv[])

var nb1 = process.argv[2];
var nb2 = process.argv[3];


console.log(nb1);
console.log("*");
console.log(nb2);
console.log("=");


function multiplier (nb1, nb2) {
    var resultat = Number(nb1) * Number(nb2);
    
    console.log(resultat);
}
return multiplier (nb1, nb2);




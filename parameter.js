function bringSingara(take) {
    console.log('singara er jonno dise:',take);
    console.log('mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = take / singaraPrice;
    return singaraQuantity;
}

var money = 250;
var singara = bringSingara(money);
console.log('Ai nen singara: ', singara);
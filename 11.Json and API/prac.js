let jsonRes='{"fact":"pets are good"}';

let validRes= JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

console.log(JSON.stringify(validRes)); //back to json
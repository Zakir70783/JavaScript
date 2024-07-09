const accountId = 144553
let accountEmail = "zakirhussain 1234@gmail.com"
var accountPassword ="12345"
accountCity ="Patna" 

let accountState;
// accountId = 2 // not allowed

accountEmail = "zakspartan1234@gmail.com"
accountPassword = "21212121"
accountCity = "Bangalore"

/*
prefer not to use var 
because of scope issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
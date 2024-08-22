const accountId = 144553
let accountEmail = "alokmishra@gmail.com"
var accountPassword = "12345"
accountCity = "bihar"

//accountId = 2 // not allowed
accountEmail = "alokmishra63749@gmail.com"
accountPassword = "85426"
accountCity = "samastipur"
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])



//Import MySQL connection
var connection = require("../Config/connection.js");

function printQMarks(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}
function objToSql(ob){
    var arr = [];

    
}
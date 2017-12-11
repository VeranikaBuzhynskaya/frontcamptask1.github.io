module.exports = function(source){
    let json = JSON.parse(source);
    console.log("Json", json);
    for (var key in json ){
        if(isNumeric(key)){
            delete json[key];
         }
    }
    console.log("Json", json);
    return `module.exports = ${JSON.stringify(json)}`;
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
//-----------------------------ACTIVITY-----------------------------

//--------------------------Day-3 Question-3------------------------

//Print all countrie names,regions,sun regionsand populations from Api

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    for(let i =0;i<result.length;i++){

        console.log(result[i].name.official);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population)
        console.log("")
    }
}
/*var nUm =[33, 44, 56, 78, 98]
var sTr =[Gold, Plane, Adrian, heaven, Sulivan]
var cTy =[Daly city, San Bruno, Oakland, San Mateo, San Jose]
var sTe =[CA, UT, AZ, ID, NY]
var zCd =[94402, 04943, 95867,09403,90210]
 console.log(nUm, sTr, cTy, sTe, zCd);

function getRan(){
     var geTAdrs = '';
     var ranDn = '';
     for (var i = 0; i < 6; i++) {
        ranDn += geTAdrs.charAt(Math.round(Math.random() * 15));
        ranDn += geTAdrs.charAt(Math.round(Math.random() * 15));
        if (i != 5) ranDn += ":";
     }
     return ranDn;

}*/



var num = Array(523,3452,334,31,5346);
var street = Array("Gold", "Plane", "Adrian", "Heaven", "Sullivan");
var city = Array("Daily City", "San Bruno", "Oakland", "San Mateo", "San Jose");
var state = Array("CA", "UT", "AZ", "ID", "NY");
var zip = Array(94402, 04943, 95867, 9403,90210);


function randomAddress () {

    var itemNum = randomNum(0, num.length);
    var itemStreet = randomNum(0, street.length);
    var itemState = randomNum(0, city.length);
    var itemZip = randomNum(0, zip.length);

    var a = (itemNum + " " + itemStreet + " " + itemState +  " " + itemZip);
    return a;

}
//resultado = randomAddress();
//console.log(resultado);
//document.write(resultado); to print in the browser//


function randomNum(min, max) {
  var num = (Math.random() * (max - min) + min).toFixed();
  return num;
}



function addAddress(address) {
    var li = document.createElement('li');
    li.innerHTML = address;
    addresses.appendChild(li);
}


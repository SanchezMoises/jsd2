var nUm =[33, 44, 56, 78, 98]
var sTr =[Gold, Plane, Adrian, heaven, Sulivan]
var cTy =[Daly city, San Bruno, Oakland, San Mateo, San Jose]
var sTe =[CA, UT, AZ, ID, NY]
var zCd =[94402, 04943, 95867,09403,90210]
 console.log(nUm + sTr + cTy + sTe + zCd );


 

function getRan(x,y){
     var geTAdrs = '';
     var ranDn = '';
     for (var i = 0; i < 6; i++) {
        ranDn += geTAdrs.charAt(Math.round(Math.random() * 15));
        ranDn += geTAdrs.charAt(Math.round(Math.random() * 15));
        if (i != 5) ranDn += ":";
     }
     return ranDn;

}


/*


function randomString() {
 var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
 var string_length = 8;
 var randomstring = '';
 for (var i=0; i<string_length; i++) {
  var rnum = Math.floor(Math.random() * chars.length);
  randomstring += chars.substring(rnum,rnum+1);
 }
 document.randform.randomfield.value = randomstring;
}



function genMAC(){
    var hexDigits = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }

    return macAddress;
}
*/
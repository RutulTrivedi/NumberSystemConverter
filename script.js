dec = document.getElementById('idDecimal');
bin = document.getElementById('idBinary');
oct = document.getElementById('idOctal');
hex = document.getElementById('idHex');

function decimalToBinary(num){
    tempStr = "";
    finalAns = "";
    while(num > 0){
        var r = num%2;
        tempStr = tempStr + r;
        num = parseInt(num / 2);
    }

    for(i=tempStr.length;i>=0;i--){
        finalAns += tempStr.charAt(i);
    }

    return finalAns;
}

function decimalToOctal(num){
    tempStr = "";
    finalAns = "";
    while(num > 0){
        var r = num%8;
        tempStr = tempStr + r;
        num = parseInt(num / 8);
    }

    for(i=tempStr.length;i>=0;i--){
        finalAns += tempStr.charAt(i);
    }

    return finalAns;
}

function decimalToHexadecimal(num){
    return num.toString(16);
}

function hexadecimalToDecimal(num){
    decNum = 0;
    num = num.toLowerCase();
    temp = '0123456789abcdef'
    for (let i = 0; i < num.length; i++) {
        var char = num.charAt(i);
        var value = temp.indexOf(char);
        decNum = decNum * 16 + value;
    }

    return decNum;
}

function convertNumber(){
    if(bin.value == "" && oct.value == "" && hex.value == "" && dec.value != ""){
        valToCalc = parseInt(dec.value);
        //For decimal to binary
        bin.value = decimalToBinary(valToCalc);

        //For decimal to octal
        oct.value = decimalToOctal(valToCalc);

        //For decimal to hexadecimal
        hex.value = decimalToHexadecimal(valToCalc);
    }

    else if(bin.value != "" && oct.value == "" && hex.value == "" && dec.value == ""){
        valToCalc = parseInt(bin.value);
        //Binary to decimal
        dec.value = parseInt(valToCalc,2);

        //Binary to octal
        temp = parseInt(valToCalc,2);
        oct.value = decimalToOctal(temp);

        //Binary to hexadecimal
        temp = parseInt(valToCalc,2);
        hex.value = decimalToHexadecimal(temp);
    }

    else if(bin.value == "" && oct.value != "" && hex.value == "" && dec.value == ""){
        valToCalc = parseInt(oct.value);
        //Octal to decimal
        dec.value = parseInt(valToCalc,8);

        //Octal to binary
        temp = parseInt(valToCalc,8);
        bin.value = decimalToBinary(temp);

        //Octal to hexadecimal
        temp = parseInt(valToCalc,8);
        hex.value = decimalToHexadecimal(temp);
    }

    else if(bin.value == "" && oct.value == "" && hex.value != "" && dec.value == ""){
        valToCalc = hex.value;
        //Hexadecimal to decimal
        dec.value = hexadecimalToDecimal(valToCalc);

        //Hexadecimal to binary
        temp = hexadecimalToDecimal(valToCalc);
        bin.value = decimalToBinary(temp);

        //Hexadecimal to octal;
        temp = hexadecimalToDecimal(valToCalc);
        oct.value = decimalToOctal(temp);
    }
}

function checkNumForDec(evt) {
    try {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 8
            && (charCode < 48 || charCode > 57))
            return false;

        return true;
    }
    catch (err) {
        alert(err.Description);
    }
}

function checkNumForBin(evt){
    try {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 8
            && (charCode < 48 || charCode > 49))
            return false;

        return true;
    }
    catch (err) {
        alert(err.Description);
    }   
}

function checkNumForOct(evt){
    try {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 8
            && (charCode < 48 || charCode > 55))
            return false;

        return true;
    }
    catch (err) {
        alert(err.Description);
    }   
}

function checkNumForHex(evt){
    try {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 8 && ((charCode < 48 || charCode > 57) && (charCode < 97 || charCode > 102)))
            return false;

        return true;
    }
    catch (err) {
        alert(err.Description);
    }   
}
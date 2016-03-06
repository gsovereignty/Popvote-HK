Meteor.methods({
    checkHKID: function (hkid) {
        var hkidPat = /^([A-Z]{1,2})([0-9]{6})([A0-9])$/; // HKID format = 1 or 2 letters followed by 6 numbers and 1 checksum digit.
        var matchArray = hkid.match(hkidPat);
        if(matchArray == null){idError()}
        var checkSum = 0;
        var charPart = matchArray[1];
        var numPart = matchArray[2];
        var checkDigit = matchArray[3];
        if (charPart.length == 2) {
            checkSum += 9 * (charPart.charAt(0).charCodeAt(0) - 55);
            checkSum += 8 * (charPart.charAt(1).charCodeAt(0) - 55);
            }
            else {
                checkSum += 8 * (charPart.charCodeAt(0)-55);
                checkSum += 324;
                }
        for (var i = 0, j = 7; i < numPart.length; i++, j--){
                checkSum += j * numPart.charAt(i);
            }
        var remaining = checkSum % 11;
        var checkNumber = 11 - remaining;
        if(checkDigit == checkNumber) {return("valid")}
        function idError () {
            throw new Meteor.Error('invalid', 'The HKID entered is invalid')
        }

    }

});
Template.checkHkid.events({
    'blur .hkid': function(e) {
        e.preventDefault();
        var hkid = $('#hkid').val();
        var idcode = hkid.toString().toUpperCase().trim().replace(/\(|\)/g, "");

Meteor.call('checkHKID', idcode, function(error, result) { // display the error to the user and abort
    if (error) {sAlert.error(error.reason);
    } else {
        // sAlert.info('Your HKID is valid', {});
    }
})

},

    'blur .building': function() { Meteor.call("checkAddress", function(error, results) {
         console.log(results.content); //results.data should be a JSON object
       // console.log(results.AddressLookupResult.RequestAddress[0].AddressLine[0]);
    })}

});

Template.checkHkid.helpers({
    ipaddress: function(){
        Meteor.call('getConnectionInfo', function(error, result) {
            Session.set('IPaddr', result[1]);
        });
        return(Session.get('IPaddr'));
    }});




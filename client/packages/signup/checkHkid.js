Template.checkHkid.events({
    'blur .hkid': function(e) {
        e.preventDefault();
        var hkid = $('#hkid').val();
        var idcode = hkid.toString().toUpperCase().trim().replace(/\(|\)/g, "");

Meteor.call('checkHKID', idcode, function(error, result) { // display the error to the user and abort
    if (error) {sAlert.error(error.reason);
    } else {
        sAlert.info('Your HKID is valid', {});
    }
})

}});

Template.checkHkid.helpers({
    ipaddress: function(){
        Meteor.call('getConnectionInfo', function(error, result) {
            Session.set('IPaddr', result[1]);
        });
        return(Session.get('IPaddr'));
},

    jsontest: HTTP.call( 'GET', 'http://jsonplaceholder.typicode.com/posts', {}, function( error, response ) {
        if ( error ) {
            return( error );
        } else {
            return(response.data)
            alert( response.data() );
            /*
             This will return the HTTP response object that looks something like this:
             {
             content: "String of content...",
             data: Array[100], <-- Our actual data lives here.
             headers: {  Object containing HTTP response headers }
             statusCode: 200
             }
             */
        }
    })
    });

Template.checkHkid.events({
    'submit form': function(e) {
        e.preventDefault();
        var hkid = $(e.target).find('[name=hkid]').val();
        var idcode = hkid.toString().toUpperCase().trim().replace(/\(|\)/g, "");

Meteor.call('checkHKID', idcode, function(error, result) { // display the error to the user and abort
    if (error) {sAlert.error(error.reason);
    } else {
        sAlert.info('Your HKID is valid', {});
    }
})

}});

/**
 * Created by gareth on 31/3/16.
 */
Template.homeComments.helpers({
    comments: function() {
        return Comments.find({voteId: this._id}, {sort: {commentLikes: -1}, limit: 3});
    }
});

Template.homeComments.events({
    'click .like': function() {
        Meteor.call('likeComment', this._id, function (error, liked) {
            if (error) {sAlert.error(error.reason);}
        });
    }

});
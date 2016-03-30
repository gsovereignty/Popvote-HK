/**
 * Created by gareth on 29/3/16.
 */
Template.frontPage.helpers({
    vote: function() {
        return VotesCollection.find({}, {sort: {totalVotes: -1}})
    }
});

Template.frontPage.events({
});

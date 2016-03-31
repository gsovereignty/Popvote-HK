/**
 * Created by gareth on 29/3/16.
 */
Template.frontPage.helpers({
    vote: function() {
        return VotesCollection.find({}, {sort: {totalVotes: -1}, limit: 1})
    },
    allVotes: function() {
        return VotesCollection.find({}, {sort: {totalVotes: -1}, skip: 1, limit: 10})
    }
});

Template.frontPage.events({
});

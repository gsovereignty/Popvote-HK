/**
 * Created by gareth on 31/3/16.
 */
Template.homeSubvoteItem.helpers({
    novotes: function () {

        var novotes = this.noVotes;
        var yesvotes = this.yesVotes;
        var total = novotes + yesvotes;
        var pc = novotes / total * 100;
        return Math.floor(pc);
    },
    yesvotes: function () {

        var novotes = this.noVotes;
        var yesvotes = this.yesVotes;
        var total = novotes + yesvotes;
        var pc = yesvotes / total * 100;
        return Math.ceil(pc);
    }

});

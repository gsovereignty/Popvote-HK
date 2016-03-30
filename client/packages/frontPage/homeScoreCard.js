/**
 * Created by gareth on 31/3/16.
 */
Template.homeScoreCard.helpers ({
    politicians: function () {
        return Polivote.find({voteId: this._id}, {});
    },
    actualtext: function () {
        var max = Math.max(this.votedFor, this.votedAgainst, this.abstained);
        var total = this.votedFor + this.votedAgainst + this.abstained;
        var average = total / 3;
        if (this.votedFor === max && this.votedFor > average) {
            return "YES";
        } else if (this.votedAgainst === max && this.votedAgainst > average) {
            return "NO";
        } else if (this.abstained === max && this.abstained > average) {
            return "ABSTAINED";
        } else {
            return "UNKNOWN";
        }
    },
    indicatedtext: function () {
        var max = Math.max(this.indicatedFor, this.indicatedAgainst, this.indicatedUnsure);
        var total = this.indicatedFor + this.indicatedAgainst + this.indicatedUnsure;
        var average = total / 3;
        if (this.indicatedFor === max && this.indicatedFor > average) {
            return "YES";
        } else if (this.indicatedAgainst === max && this.indicatedAgainst > average) {
            return "NO";
        } else if (this.indicatedUnsure === max && this.indicatedUnsure > average) {
            return "UNDECIDED";
        } else {
            return "NOT INDICATED";
        }},

    indicatedlabel: function () {
        var max = Math.max(this.indicatedFor, this.indicatedAgainst, this.indicatedUnsure);
        var total = this.indicatedFor + this.indicatedAgainst + this.indicatedUnsure;
        var average = total / 3;
        if (this.indicatedFor === max && this.indicatedFor > average) {
            return "label label-success";
        } else if (this.indicatedAgainst === max && this.indicatedAgainst > average) {
            return "label label-danger";
        } else if (this.indicatedUnsure === max && this.indicatedUnsure > average) {
            return "label label-warning";
        } else {
            return "label label-warning";
        }},

    actuallabel: function () {
        var max = Math.max(this.votedFor, this.votedAgainst, this.abstained);
        var total = this.votedFor + this.votedAgainst + this.abstained;
        var average = total / 3;
        if (this.votedFor === max && this.votedFor > average) {
            return "label label-success";
        } else if (this.votedAgainst === max && this.votedAgainst > average) {
            return "label label-danger";
        } else if (this.abstained === max && this.abstained > average) {
            return "label label-warning";
        } else {
            return "label label-warning";
        }
    },
    display: function(){
        var max = Math.max(this.votedFor, this.votedAgainst, this.abstained, this.indicatedFor, this.indicatedAgainst, this.indicatedUnsure);
        if (this.flags > 3 && this.flags > max) {
            return "none";
        } else if (_.include(this.flaggers, Meteor.userId())) {
            return "none";
        } else {}
    }
});

Template.homeScoreCard.events ({
    'submit form': function(e, template) {
        e.preventDefault();
        var polivote = {
            name: $(e.target).find('[name=name]').val(),
            voteId: this._id
        };

        Meteor.call('polivoteInsert', polivote, function(error, result) { // display the error to the user and abort
            if (error)
                sAlert.error(error.reason, {});
        });

        event.target.name.value = "";
    },
    'click .indFor': function () {
        Meteor.call('indFor', this._id, function(error, result) {if (error) {sAlert.error(error.reason)} else {sAlert.info('Your feedback has been recorded', {})}});
    },
    'click .indAgainst': function () {
        Meteor.call('indAgainst', this._id, function(error, result) {if (error) {sAlert.error(error.reason)} else {sAlert.info('Your feedback has been recorded', {})}});
    },
    'click .indUnsure': function () {
        Meteor.call('indUnsure', this._id, function(error, result) {if (error) {sAlert.error(error.reason)} else {sAlert.info('Your feedback has been recorded', {})}});
    },
    'click .actFor': function () {
        Meteor.call('actualFor', this._id, function(error, result) {if (error) {sAlert.error(error.reason)} else {sAlert.info('Your feedback has been recorded', {})}});
    },
    'click .actAgainst': function () {
        Meteor.call('actualAgainst', this._id, function(error, result) {if (error) {sAlert.error(error.reason)} else {sAlert.info('Your feedback has been recorded', {})}});
    },
    'click .abstained': function () {
        Meteor.call('abstained', this._id, function(error, result) {if (error) {sAlert.error(error.reason)} else {sAlert.info('Your feedback has been recorded', {})}});
    },
    'click .flag': function () {
        Meteor.call('flag', this._id, function(error, result) {if (error) {sAlert.error(error.reason)} else {sAlert.info('Your feedback has been recorded', {})}});
    }

});
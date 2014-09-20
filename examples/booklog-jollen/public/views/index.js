/**
 * SETUP
 **/
  var app = app || {};

/**
 * MODELS
 **/
app.Post = Backbone.Model.extend({  
  url: 'http://localhost:3000/1/post',
  defaults: {
    success: false,
    errors: [],
    errfor: {},
    
	posts: [{
	       "content": "hello",
	       "_id": "5402de2f559097cdf139fff9",
	       "subject": "abc123"
	   }]
  }
});

/**
 * VIEWS
 **/
  app.PostView = Backbone.View.extend({
  	el: '#blog-post',
    events: {
    },
    initialize: function() {
        this.model = new app.Post();
        this.template = _.template($('#tmpl-post').html());

        this.model.bind('change', this.render, this);
        
        this.model.fetch();
    },
    render: function() {
        var data = this.template(this.model.attributes);

        this.$el.html(data);
        return this;
    }
  });

/**
 * BOOTUP
 **/
  $(document).ready(function() {
    app.postView = new app.PostView();
  });
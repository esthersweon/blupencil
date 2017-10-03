const Essay = require('../models/Essay');

exports.index = (req, res) => {
  if (req.user) {
    const isUserWriter = req.user.roles.indexOf('writer') > -1;

    if (req.user.hasRole('writer')) {
      res.render('home', {
        title: 'Home'
      });
    } else {
      Essay.find({_editor: { '$ne': req.user.id }}, function(err, essays) {
        res.render('home', {
          title  : 'Home',
          essays : essays
        });
      });
    }
  } else {
    res.render('home', {
      title: 'Home'
    });
  }
};

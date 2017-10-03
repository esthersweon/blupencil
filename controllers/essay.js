const Essay = require('../models/Essay');

exports.index = (req, res) => {
  const isUserWriter = req.user.roles.indexOf('writer') > -1,
        params       = isUserWriter ? { _author: req.user.id } : { _editor: req.user.id };

  Essay.find(params, (err, essays) => {
    res.render('essay/index', {
      title  : 'Essays',
      essays : essays
    });
  });
}

exports.getNew = (req, res) => {
  res.render('essay/new', {
    title: 'New Essay',
  });
}

exports.postNew = (req, res) => {
  req.assert('title', 'Title required').notEmpty();
  req.assert('link', 'Link cannot be blank').notEmpty();
  // req.sanitize('link').normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/essays/new');
  }

  const essay = new Essay({
    _author : req.user.id,
    title   : req.body.title,
    link    : req.body.link,
  });

  essay.save(err => {
    if (err) { return next(err); }
    res.redirect('/essays');
  });
}

exports.updateEssay = (req, res) => {
  const essayId = req.params.essayId,
        updatePayload = {
          _editor: req.user.id,
          revised: req.body.revised || false
        };
  console.log(req.body);
  console.log('***', req.params)

  Essay.update({ _id: essayId }, updatePayload, (err, essay) => {
    if (err) { return next(err); }
    res.redirect('/essays');
  });
}
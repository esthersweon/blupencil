module.exports = function(app) {
  const passportConfig = require('../../config/passport');
  const essayController = require('../../controllers/essay');

  app.get('/essays', essayController.index);
  app.get('/essays/new', essayController.getNew);
  app.post('/essays/new', essayController.postNew);
  app.patch('/essays/:essayId', essayController.updateEssay);
  app.delete('/essays/:essayId', essayController.deleteEssay);
}
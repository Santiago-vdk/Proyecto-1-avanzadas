var dummy = require('./dummy.js');


module.exports.set = function(app) {


  dummy.set(app)



  app.all(/^\/(?!api).*/, function(req, res) {
    res.sendFile(mainDir + '/public/index.html'); // load our public/index.html file
  });
};

module.exports.set = function(app) {
  //route to handle all angular requests
  app.all(/^\/(?!api).*/, function(req, res) {
    res.sendFile(mainDir + '/public/index.html'); // load our public/index.html file
  });
};

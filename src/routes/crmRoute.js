const routes = (app) => {
  app.route('/contact')
    .get((req,res,next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, (req, res, next) => {
      res.send('GET request successful');
    })

    .post((req, res) => {
      res.send('POST request was successful');
    });
  
  app.route('/contact/:contactId')
    .get((req,res) => {
      let contactId = req.params.contactId;
      res.send('GET ${contactId} request successful');
    })
    .put((req, res) => {
      res.send('PUT request successful');
    })
    .delete((req, res) => {
      res.send('DELETE request successful');
    });

};

module.exports = routes;
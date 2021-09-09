const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes); //admin routes now have a common path of /admin
app.use(shopRoutes);
app.use('/', (req, res, next) => {
  res.status(404).send('Page not found'); //sending status, setHeaders can be used like status
});
app.listen(3000);

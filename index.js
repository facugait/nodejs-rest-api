const express = require('express');

const app = express();
require('./database');
app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.use('/', require('./src/application/routes'));

app.listen(app.get('port'), () => {
  console.log('App on port', app.get('port'));
});
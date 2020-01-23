require('appmetrics-dash').attach();

const express = require('express');
const app = express();

// Add your code here

const port = 3000
app.listen(port, function(){
  console.log(`listening on http://localhost:${port}/appmetrics-dash`);

  console.log(`listening on http://localhost:${port}`);
});

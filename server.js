const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/fibonacci/:n', (req, res) => {
  const n = parseInt(req.params.n);
  const sequence = fibonacci(n);
  res.send(sequence);
});

function fibonacci(n) {
  var arr = [];
  var i = 0;
  for (i; i < n; i++) {
    arr[i] = i;
    if (i >= 2) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr;
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

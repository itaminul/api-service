import express from 'express'
const app = express();
const port = 8002;
app.get('/check', (req, res) => {
  res.send('check 55555555');
});

app.get("/helo", (req, res) => {
  res.json({
    username: "Helo Aminul",
  });
});

app.get('/', (req, res) => {
   res.json({
     username: "Aminul",
   });
});

app.listen(port, () => {
  console.log('Server is running');
})
const express = require('express')
const {db,task} = require('./db')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/html'))

app.get('/task', async (req, res) => {
  const asks = await task.findAll();
  res.json(asks);
});

app.post('/task', async (req, res) => {
  const newTask = await task.create({
    name: req.body.name,
    description: req.body.desc,
    done: false,
  })
  console.log("task Added");
  res.json({ success: true });
});


db.sync().then(() => {
    app.listen(4567, () => {
        console.log('server started at http://localhost:4567')
    })
})
.catch((err) => {
    throw err
})


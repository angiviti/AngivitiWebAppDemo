var express = require('express')
var app = express();
app.use('/', express.static(__dirname))

app.get('/', (req,res) => {
    res.render('index.html')
})

app.listen(8081, () => console.log(`Server is listening on port 8081`))
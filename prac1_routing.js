var exp = require("express");
var path = require("path");
var app = exp();
var port = 3200;

var ho = (req, res, next) => {
    console.log("Home page connected.");
    next();
}
var ab = (req, res, next) => {
    console.log("About Page is connected.");
    next();
}
var co = (req, res, next) => {
    console.log("Contact Page is connected.");
    next();
}
var th = (req, res, next) => {
    console.log("Feedback Page is connected.");
    next();
}

// app.use(ho)
// app.use(ab)
// app.use(co)
// app.use(th)

app.get("/", ho, (req, res) => {
    res.sendFile(path.join(__dirname, 'hom.html'));
})
app.get("/aboutt", ab, (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
})
app.get("/contactt", co, (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
})
app.get("/thank", th, (req, res) => {
    res.sendFile(path.join(__dirname, 'thank.html'));
})

app.listen(port,
    () => {
        console.log('Listening port no. {$port}');
    }
)
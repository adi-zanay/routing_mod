var express = require("express");
var app = express();
var port = 4500;
var mod = require("./module_ca3.js");
var path = require("path");

var wel = (req, res, next) => {
    console.log("WELCOME");
    next();
}
app.use(wel);

app.get("/", (req, res) => {
    res.send(mod.Home_Page());
});
app.get("/Tra_des", (req, res) => {
    res.send(mod.Travel_Destination());
});
app.get("/Tra_insu", (req, res) => {
    res.sendFile(path.join(__dirname, 'Travel_insurance.html'));
});
app.get("/Tra_pack", (req, res) => {
    res.sendFile(path.join(__dirname, 'Travel_package.html'));
});
app.get("/Cont", (req, res) => {
    res.sendFile(path.join(__dirname, 'Contact_us.html'));
});

app.listen(port, () => {
    console.log("Listening at port number : 4500");
})
var mod = require("./module");
var expres = require("express");
var app = expres();
var port = 3500;

app.get("/", function(req, res) {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Home Page</title>
    </head>
    <body>
    <nav>
    <table align="center">
    <td>
        <th>
            <a href="/">HOME</a> |
        </th>
        <th>
            <a href="/about">ABOUT</a> |
        </th>
        <th>
            <a href="/contact">CONTACT</a> |
        </th>
        <th>
            <a href="/tutorial">TUTORIAL</a>
        </th>
    </td>
    </table>
    </nav>
    <p>This is the home page.</p>
    </body>
    </html>
    `;
    res.send(html);
});
app.get("/about", function(req, res) {
    res.send(mod.about());
})
app.get("/contact", function(req, res) {
    res.send(mod.contact());
})
app.get("/tutorial", function(req, res) {
    res.send(mod.tutorial());
})
app.listen(port, () => {
    console.log("LISTENING PORT ON 3500.");
})
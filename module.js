var home = function() {
    var obj = "<a href="
    "> HiiiiII </a>";
    return obj;
}
var about = function() {
    var obj2 = "THIS IS THE ABOUT SECTION.";
    return obj2;
}
var contact = function() {
    var obj3 = "THIS IS THE CONTACT SECTION.";
    return obj3;
}
var tutorial = function() {
    var obj4 = "THIS PAGE WILL GIVE THE TUTORIAL OF EXPRESS.";
    return obj4;
}

module.exports = {
    home: home,
    about: about,
    contact: contact,
    tutorial: tutorial
}
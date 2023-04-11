var Home_Page = function() {
    var html1 = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <title>HOME PAGE</title>
</head>

<body background="https://wallpapersmug.com/download/1920x1080/0199fb/cityscape-evening-buildings-new-york.jpg">
    <br>
    <center>
        <div style="background-color: darkcyan; border-radius: 25px; font-family: rockwell;">
            <br><br>
            <h2>Welcome to our Travel Agency!</h2>
            <table>
                <tr>
                    <td>
                        <h1 style="font-family: forte; color:oldlace;">No matter where you’re going from, we take you there</h1>
                    </td>
                </tr>
                <tr>
                    <th>
                        <nav>
                            <table align="center">
                                <tr>
                                    <th>
                                        <a href="/" style="color: azure;">HOME</a> |
                                        <a href="/Tra_des" style="color: azure;">DESTINATION</a> |
                                        <a href="/Tra_insu" style="color: azure;">INSURANCE</a> |
                                        <a href="/Tra_pack" style="color: azure;">PACKAGES</a> |
                                        <a href="/Cont" style="color: azure;">CONTACT US</a>
                                    </th>
                                </tr>
                            </table>
                        </nav><br>
                    </th>
                </tr>
            </table>
        </div><br>
        <hr>
        <div style="background-color: darkcyan; border-radius: 25px; font-family: rockwell;">
            <table>
                <tr>
                    <td align="center">
                        <h3>Low cost holiday deals</h3>
                        <b>If you are searching for great prices on cheap weekend breaks in the UK or worldwide, then take a look on Opodo for your ideal flight and hotel. Everyone loves a bargain!</b>
                    </td>
                    <td align="center ">
                        <h3>Book in a click</h3>
                        <b>The Opodo fast and powerful search engine makes searching and comparing for the cheapest flight and hotels a breeze. Simply click and compare!</b>
                    </td>
                    <td align="center ">
                        <h3>Savings</h3>
                        <b>Book both products in the same process and save up to 40% on your trip! Find cheap weekend breaks and save time, it's a fact!</b>
                    </td>
                </tr>
            </table><br>
        </div>
    </center>
</body>

</html>
    `;
    return html1;
}
var Travel_Destination = function() {
    var html2 = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <title>DESTINATION</title>
</head>

<body background="https://wallpapersmug.com/download/1920x1080/0199fb/cityscape-evening-buildings-new-york.jpg">
    <br>
    <center>
        <div style="background-color: darkcyan; border-radius: 25px; font-family: rockwell;">
            <br><br>
            <table>
                <tr>
                    <th>
                        <nav>
                            <table align="center">
                                <tr>
                                    <th>
                                        <a href="/" style="color: azure;">HOME</a> |
                                        <a href="/Tra_des" style="color: azure;">DESTINATION</a> |
                                        <a href="/Tra_insu" style="color: azure;">INSURANCE</a> |
                                        <a href="/Tra_pack" style="color: azure;">PACKAGES</a> |
                                        <a href="/Cont" style="color: azure;">CONTACT US</a>
                                    </th>
                                </tr>
                            </table>
                        </nav><br>
                    </th>
                </tr>
            </table>
        </div><br>
        <hr>
        <div style="background-color: darkcyan; border-radius: 25px; font-family: rockwell;">
            <br>
            <h1><select>
                <option value="">CHOOSE YOUR DESTINATION </option>
                <option value="DUBAI">DUBAI</option>
                <option value="PARIS">PARIS</option>
                <option value="ROMANIA">ROMANIA</option>
                <option value="NEW JERSY">NEW JERSY</option>
                <option value="NEW YORK">NEW YORK</option>
                <option value="GERMANY">GERMANY</option>
            </select>
            </h1>
            <hr>
            <table>
                <tr>
                    <th>
                        <img src="https://th.bing.com/th/id/OIP.wAVAkHPTzu4snb7A2MIETgHaFB?pid=ImgDet&rs=1" height="250" width="350"><br>
                        <h3>DUBAI</h3>
                    </th>
                    <th>
                        <img src="https://images6.alphacoders.com/798/thumb-1920-798016.jpg" height="250" width="350"><br>
                        <h3>PARIS</h3>
                    </th>
                    <th>
                        <img src="https://nomadparadise.com/wp-content/uploads/2020/01/romaniancity4.jpg" height="250" width="350"><br>
                        <h3>ROMANIA</h3>
                    </th>
                </tr>
                <tr>
                    <th>
                        <img src="https://th.bing.com/th/id/OIP.45b_1b8D1owdxSsUG6ycQAHaEK?pid=ImgDet&rs=1" height="250" width="350"><br>
                        <h3>NEW JERSY</h3>
                    </th>
                    <th>
                        <img src="https://th.bing.com/th/id/OIP.QHzHXmso9AMrPYaaxvST8gHaEo?pid=ImgDet&rs=1" height="250" width="350"><br>
                        <h3>NEW YORK</h3>
                    </th>
                    <th>
                        <img src="https://th.bing.com/th/id/OIP.2jQX2g4W6dq-YyTMAP6o2AHaE8?pid=ImgDet&rs=1" height="250" width="350"><br>
                        <h3>GERMANY</h3>
                    </th>
                </tr>
                <tr></tr>
            </table><br>
        </div>
    </center>
</body>

</html>
    `;
    return html2;
}

module.exports = {
    Home_Page: Home_Page,
    Travel_Destination: Travel_Destination
}
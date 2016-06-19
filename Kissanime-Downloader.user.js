// ==UserScript==
// @name         Kissanime Downloader with Jdownloader
// @namespace    https://github.com/Meisterlala/Kissanime-Downloader
// @version      v1
// @description  Adds Download Button
// @author       Meisterlala
// @include      */kissanime.*/Anime/*
// @exclude      */kissanime.*/Anime/*/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @grant        GM_log
// @grant        GM_addStyle
// @noframes
// ==/UserScript==



var setClipboard = " --ERROR-- "



function main() {

    //alert(window.location.href)
    var urlnamelong = window.location.href.search("Anime");
    var urlname = window.location.href.substr(urlnamelong + 6);
    var clipboard = $("a[href*=\"" + urlname + "/Episode-" + "\"]").attr('href');
    var epilist = [];
    $("a[href*=\"" + urlname + "/Episode-" + "\"]").each( function() {

        epilist.push("http://kissanime.com" + $(this).attr('href'));

    });
    epilist.pop();
    epilist = epilist.sort();

    setClipboard = epilist.toString()
    GM_setClipboard(setClipboard);
    
     
}






var appendedHTML = `          
    
    <div id="myButtonContainer">
    <button id="myButton" type="button">
    Download with JDownloader
    </button>           
    </div>
    
`;

$("div.bigBarContainer:nth-child(1) > div:nth-child(2) > div:nth-child(2)").append(appendedHTML);

var maincolor = $("div.bigBarContainer:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(2) > a:nth-child(2)").css("color")
var cssstyle = `


    #myButton {
        z-index:                222;
        cursor:                 pointer;
        position:               relative;
        margin-right:           15px;
        font-size:              18px;
        background-color:       transparent;
        outline:                none;
        border:                 none;
        display:                inline-block;
        text-decoration:        none;
        font:                   normal 27px "Tahoma" , Arial, Helvetica, sans-serif;
        transition-duration:    0.4s;
        border-radius:          4px;
		` + "color:                  " + maincolor +`
    }
    #myButton:hover {
        color:                  black;
        ` + "background-color:       " + maincolor +`       
    }
    #myButtonContainer {
        
        text-align:             center;
        
    }
	`
	
GM_addStyle(cssstyle);




// $("#myButton").css("color", maincolor)
// $("#myButton:hover").css("background-color:", maincolor)


// Activate the added button
document.getElementById("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    main();    
}




//jQ('a[href^="\\/Anime\\/" + name + "\\/Episode\\-*"]')
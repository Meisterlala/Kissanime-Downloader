// ==UserScript==
// @name         Kissanime Jdownloader?
// @namespace    http://kissanime.com/
// @version      0.1
// @description  Adds Download Button
// @author       You
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

    <div id="newbody"><div id="myContainer">           
                      
    <button id="myButton" type="button">
    Download with JDownloader
    </button>    
                                                     
    </div></div>   

`;
$("body").append(appendedHTML);
GM_addStyle(`

	#newbody {
	   position: 				absolute;	
	   top: 					240PX;
	   text-align: 			    center;	
       width:                   100%;

	}
    #myContainer {
		position: 				relative;
        margin-left:            auto;
        margin-right:           auto;
        opacity:                1;
        width: 					970px; 
        text-align:             right;
    }
    #myButton {
        z-index:                222;
        color:                  #72D572;
        cursor:                 pointer;
        position: 				relative;
        margin-right:           15px;
        font-size:              18px;
        background-color:       transparent;
        outline:                none;
        border:                 none;
		display: 				inline-block;
		text-decoration: 		none;
        font:                   normal 27px "Tahoma" , Arial, Helvetica, sans-serif;
		transition-duration: 	0.4s;
		border-radius: 			4px;
    }
	#myButton:hover {
		background-color: 		#72D572; 
		color: 					black;
		
	}
	
`);



//--- Activate the newly added button.
document.getElementById("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    main();    
}




// load jQuery and execute the main function

//Anime/Kaze-no-Stigma-Sub/Episode-023?id=88558




//jQ('a[href^="\\/Anime\\/" + name + "\\/Episode\\-*"]')
# Kissanime Downloader
Download an entire anime series with just a few button presses. Supports many different custom css styles.

![Project: ABE/n](https://cloud.githubusercontent.com/assets/6453306/16174767/e187cce8-35d2-11e6-81eb-0eb7dc8281ad.gif)
# Installation
###### 1. Download [JDownloader 2][JDownloader] and install it
###### 2. Install [Greasemonkey][Greasemonkey] for Firefox or [Tampermonkey][Tampermonkey] for Chrome
###### 3. Install the userscript from [GitHub][main.js] or [Greasyfork][Greasyfork]
###### 4. Download and import JDownloader [packagizer][.packagizer] (right-click -> Save Link As...) and change the download directory
4.0. Step 4 is optional, but highly recommended   
4.1. Open the settings  
4.2. Select and enable the **Packagizer** in the left menu  
4.3. Click on **Import**  
4.4. Select the file **Kissanime-Downloader.packagizer** and click **OK**  
4.5. Double click the rule named **Kissanime Downloader**  
4.6. Change the Download Directory. You can use the dynamic values below in the path
```
<jd:orgfilename:1> = Anime name             e.g.: One Punch Man
<jd:orgfilename:2> = Episode number         e.g.: 8
<jd:orgfilename:3> = Video quality          e.g.: 720
```

<p align="center" >
  <img src="https://cloud.githubusercontent.com/assets/6453306/16174413/3c57d666-35c1-11e6-9a14-718e16d31630.png" width=425px>
  <img src="https://cloud.githubusercontent.com/assets/6453306/16174442/607bca6a-35c2-11e6-8b46-b1ab25869076.png" width=425px>
</p>
![packagizer](https://cloud.githubusercontent.com/assets/6453306/16174827/24d95554-35d6-11e6-9929-9aba4f89a37b.gif)
# Usage
###### 1. Visit [KissAnime.to][kissanime]
###### 2. Click on **Download with JDownloader**
###### 3. Start JDownloader 2 and enable the [Clipboard Observer](http://jdownloader.org/knowledge/wiki/gui/mainpanel#enabledisable-clipboard-observer)
###### 4. Wait about 7s for each episode that has to be loaded
###### 5. Right-click on your chosen quality and start the downloads

[JDownloader]: http://jdownloader.org/download/index
[Greasemonkey]: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
[Tampermonkey]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
[main.js]: ../../raw/master/Kissanime-Downloader.user.js
[.packagizer]: ../../raw/master/Kissanime-Downloader.packagizer
[kissanime]: http://kissanime.to/
[greasyfork]: https://greasyfork.org/scripts/20724-kissanime-downloader-with-jdownloader/code/Kissanime%20Downloader%20with%20Jdownloader.user.js

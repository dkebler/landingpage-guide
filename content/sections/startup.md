+++
weight = 21
title = "Getting Started"
link_text = "Startup"
+++

**YEA!** If you completed successfully the installation section you are ready to start editing **YOUR** own landing page.  You'll going find easy to edit an existing landing page then to start your own from scratch.  That's why you'll be using the starter site's files.

### What's Important

In the folder you just made containing the starter site's files you need to concentrate on just three places.  The first is the `config.toml` file in the root of the folder.  The second is the `content/sections` subfolder and the .md files inside.  md is short for Markdown the textual editing format you'll be using.  The third is the `assets/images` folder. That's the only places you'll need to put your attention to create your own personalized landing page.  The rest of the directory's folders can be safely ignored until you are ready for more advanced topics like tweaking the styling.

### Make Hugo Render Your Landing Page

To begin you need to bring up Atom with your working folder open.  Then right click on the root of the folder in the folder tree on the left.  Choose the *Open Terminal Here* or *Open Terminal at Root* from the menu.  In the terminal window that opens type `hugo server`.  Hugo will be now render your site and serve it so you can see the changes every time you save.  Open your favorite browser and type `localhost:1313` into the address line and you be viewing the starter site landing page that Hugo just rendered. But...Hugo is still working!  If you make changes and save Hugo will re-render your landing page automatically and you'll see those changes immediately in the browser.  You can see this process in the video below

{{< youtube id="puNKieFtJ3s" start="73" title="Hugo Renders the Landing Page" caption="you will be rendering the starter site" >}}

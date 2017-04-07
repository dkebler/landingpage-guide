+++
weight = 21
title = "Getting Started"
link_text = "Startup"
+++

**YEA!** If you completed successfully the installation section you are finally ready to start editing **YOUR** own landing page.  You'll going find easy to edit an existing landing page than to start your own from scratch.  That's why you'll be using this guide's source files.

### What's Important

In the folder you just made containing this guide's source files you need to concentrate on just three places.  The first is the ```config.toml``` file in the root of the folder.  The second is the ```sections/``` subfolder and the .md files inside.  md is short for Markdown the textual editing format you'll be using.  The third is the ```assets/images/``` folder. That's the only places you'll need to put your attention to create your own personalized landing page.  The rest of the directory's folders can be safely ignored until you are ready for more advanced topics like tweaking the styling.

### Make Hugo Render Your Landing Page

To begin you need to bring up Atom with your working folder open.  Then click on the + sign at the bottom for the terminal-panel and in that panel type ```hugo server```.  Hugo will be now render your site and serve it so you can see the changes every time you save.  Open your favorite browser and type ```localhost:1313``` into the address line and you be viewing the landing page that Hugo just rendered. But...Hugo is still working!  If you make changes and save Hugo will re-render your landing page automatically and you'll see those changes immediately in the browser

{{< bookmark "edit-video" "browser" "hide" >}}

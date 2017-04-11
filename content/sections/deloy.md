+++
weight = 50
title = "Deploy"
# link_text = ""
+++

SOME CHANGES 

After all that work getting **your** new landing page site looking the way you want it it's time to "Deploy" your landing page out somewhere on the Internet where everyone can see it.

### Generate the site folder

During page development using the ```hugo server``` command Hugo has been generating your site's files and placing them in memory and serving them from there via ```localhost:1313```.

Now you are just going to run just the command ```hugo``` and it will generate an actual folder of your site's files that can then be uploaded to a server out on the Internet.  BUT.. Before you run the ```hugo``` command you need to look at two different settings in ```config.toml```.  These are ```baseurl = ""``` and ```publishDir = ""```.   The ```baseurl``` must be set to the url of the folder on the Internet you intend to serve from.  For example from a cloud service that supports static pages it might look like this. ```baseurl = "https://mycloud.com/username/landingpage"```  where ```/landingpage``` was a subdirectory you made in you cloud account.  ```publishDir``` tells Hugo where to put the files it generates for your site.  ```publishDir="dist"``` would output locally your generated site in the ```dist``` subfolder of your landing page project.  Ok with those set now try ```hugo``` from a terminal you started in the root (see the video).  With output in your publish directory you are ready to move a copy of that publish directory out to the Internet.  It is possible to write scripts to set these settings at the terminal but that is beyond the scope of this guide.   For now this will work unless you know how to script in your operating system.

### Where to host

Because of the numerous choices you'll have this guide can't cover all the options and how to do the deployments.  The one thing to keep in mind about your options is that your site you **generate** only requires the simpliest of servers. It does **not** require any *server-side* processing and as such is not "hackable".

Some simple options are

* An amazon S3 bucket
* A web hosting service (if you already have and account at one use it)
* In a folder from a cloud service such as Dropbox that supports static page serving.
* A Github Account

One good option is an Amazon Web Services (AWS) S3 bucket.  It's way cheap to store your site and images and they can be served right from there with their built in simple "static" page server.  Unlike A cloud hosting service you can point any domain or subdomain to a bucket so it's easy to use your custom domain.  Further AWS has a free tier for your first year which includes plenty of storage on S3.    

### How to get it there

As you how you move your generated site from your ```publishDir``` directory to where it will be served is again beyond the scope of this guide.  But the basic ideas is you just copy this ```publishDir``` directory to the folder from will be served. That involves getting them from your local machine out to the location. This could be done manually with some "file manager" program or could be automated (set your cloud service to sync the ```publishDir``` directory).  The following video shows some options.  You can ask in the comments below for help.  In the future the landing page generator will include some automated options for getting your site out on the Internet easier.

{{< youtube 2xd_fdx5IyI >}}

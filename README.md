connectwithcontractors.github.com
=================================
Nuuton Backend-As-A-Service API


name-of-atom.atom.nuuton.com   for atoms.

nuuton.com - index page with link to login.

/login - flask app for login
/user-profile (homepage)  - flask app
/twitter-clone  - flask app


and so on. Every app is a subdirectory with its own flask application.
Everything is held together by the atoms. This is loosely coupled for
flexibility and ease of development. That way we can develop one or two
file apps with ease. When the time comes to scale, we can then use better
stuff or just replicate the app in another server and split the work
between the two with something like rabbitmq.



In terms of the dropbox clone.

Flink flings file links. I know, cute. :)

The way it works is that every Nuutonian will use the same user syntax
that twitter uses. FOr example, if I want to send you a message, I would
just type @Allison and the system would know its you.

We would use the @name syntax to ease the transfer of files from place to
place. If I had to send you a document I would just upload it, and write
in your Nuuton handle next to it and click send. This opens up a lot of
commercial uses. Imagine if you could send your photos over to Walgreens
or wherever it is that you have them printed by just writing @Walgreens
and hitting on a button.
All of this plus a simple app that would keep all of the data
synchronized. 


Open Source Stack Powering ConnectWithContractors.com
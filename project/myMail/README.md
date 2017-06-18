###Notes ###
In order to use this script,need to build a smtp server.
I write down how I used it:
####Step 1 ####
Use docker to build a smtp server,the command like this:<br />
\#docker run -d -p 2525:25 namshi/smtp

####Step 2 ####
Edit SendMail.py ,then run it<br />
\#pyton SendMail.py
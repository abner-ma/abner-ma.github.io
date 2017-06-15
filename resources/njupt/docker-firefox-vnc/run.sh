#!/bin/bash
#/set.sh
#vncserver
#sed -i s/xterm/firefox/ /.vnc/xstartup
vncserver &
/usr/sbin/sshd -D

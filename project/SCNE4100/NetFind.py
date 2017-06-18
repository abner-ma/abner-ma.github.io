#-*- coding:utf-8 -*-

import socket
import binascii

host = '255.255.255.255'
port = 4800
addr = (host,port)
s = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
s.setsockopt(socket.SOL_SOCKET,socket.SO_BROADCAST,1)
s.setsockopt(socket.SOL_SOCKET,socket.SO_REUSEADDR,1)
s.bind(('0.0.0.0',11316))
data = "\x01\x00\x00\x08\x00\x00\x00\x00"
s.sendto(data,addr)  #发出广播包，查询设备

data, addr = s.recvfrom(24) #获得一个设备发出的信息
macstr = binascii.b2a_hex(data[14:20])  #分解出MAC地址
print "the target mac is :"+macstr[0:2]+":"+macstr[2:4]+":"+macstr[4:6]+":"+macstr[6:8]+":"+macstr[8:10]+":"+macstr[10:12]

ipaddr = binascii.b2a_hex(data[20:24])  #从反馈的信息中分解出ip地址

print "the ip address is:%d.%d.%d.%d" % (int(ipaddr[0:2],16),int(ipaddr[2:4],16),int(ipaddr[4:6],16),int(ipaddr[6:8],16))

s.close()
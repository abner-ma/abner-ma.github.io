#-*- coding:utf-8 -*-
import socket

address = ('192.168.0.254', 4900)
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(address)

data = '\x00\x01\x00\x00'
s.send(data)

s.recv(8)
data = '\x01\x01\x00\x10\x94\x69\xea\x18\xa9\xdf\x1a\x32\x7c\xa5\x09\x1b\xce\xdb\x2e\x24'
s.send(data)
s.recv(4)
data = '\x21\x01\x00\x06\xc0\xa8\x00\xfd\x00\x00'
s.send(data)
s.recv(4)

data = '\x02\x01\x00\x02\x00\x00'
s.send(data)

s.recv(4)


'''
while True:
	data = raw_input('>')
	if data == 'stop':
		break
	s.send(data)
'''

s.close()

#-*- coding:utf-8 -*-
import urllib2
import math
from DateFile import *

outfile = DateFile().DateFileName()

output = open(outfile,"w")
finput = open('AllStockCode')

strStockCode = 'sz'
while True:
    line=finput.readline()
    if not line:
        break
    strStockCode = line
    url = 'http://qt.gtimg.cn/q='+strStockCode
    req = urllib2.Request(url)
    resp = urllib2.urlopen(req)
    response = resp.read()
    name = response.split('\"')[1].split('~')[1]
    change=response.split('\"')[1].split('~')[38]
    stockStr = strStockCode + ":" +name+' :'+change+'<br />'
    output.write(stockStr)
finput.close()
output.close()

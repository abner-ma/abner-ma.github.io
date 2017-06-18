#-*- coding:utf-8 -*-

import datetime

class DateFile(object):
    filePath = ''
    fileName = ''
    fileType = ''
    def __init__(self, filePath = './',fileType = '.html'):
        self.filePath = filePath
        self.fileType = fileType
        self.fileName = datetime.datetime.now().strftime('%Y%m%d')

    def DateFileName(self):
        return self.filePath + self.fileName + self.fileType

#print DateFile('/root/').DateFileName()
#print file name.('path/yyyymmdd.xxx)        

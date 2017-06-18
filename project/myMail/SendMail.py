#coding:utf-8
import smtplib
import email.MIMEMultipart
import email.MIMEText
import email.MIMEBase
import os.path
from email.Header import Header

From = "xxx@xxx.net"
To = ["XXX"��"xxxx"]
file_name = "filename"

server = smtplib.SMTP("localhost",'2525')

#����MIMEMultipart������Ϊ������
main_msg = email.MIMEMultipart.MIMEMultipart()

# ����MIMEText������Ϊ�ʼ���ʾ���ݲ����ӵ�������
text_msg = email.MIMEText.MIMEText("�������Ĳ���",_charset='utf-8')
main_msg.attach(text_msg)

#����MIMEBase������Ϊ�ļ��������ݲ����ӵ�������
contype = 'application/octet-stream'
maintype, subtype = contype.split('/', 1)

## �����ļ����ݲ���ʽ��
data = open(file_name, 'rb')
file_msg = email.MIMEBase.MIMEBase(maintype, subtype)
file_msg.set_payload(data.read( ))
data.close( )
email.Encoders.encode_base64(file_msg)

## ���ø���ͷ
basename = os.path.basename(file_name)
file_msg.add_header('Content-Disposition',
 'attachment', filename = basename)
main_msg.attach(file_msg)

# ���ø���������
main_msg['From'] = From
main_msg['To'] = ",".join(To)
main_msg['Subject'] = Header('���Ǳ��ⲿ��','utf-8')
main_msg['Date'] = email.Utils.formatdate( )

# �õ���ʽ����������ı�
fullText = main_msg.as_string( )
# ��smtp�����ʼ�
try:
    server.sendmail(From, To, fullText)
finally:
    server.quit()
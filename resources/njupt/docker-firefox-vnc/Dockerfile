FROM centos6
MAINTAINER gggzs

USER root

RUN yum install -y tigervnc-server firefox openssh-server #expect
RUN mkdir -p /var/run/sshd
RUN ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key
RUN ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key

RUN echo "root:111111"|chpasswd
RUN sed -i 's/without-password/yes/' /etc/ssh/sshd_config

#ADD set.sh /set.sh
#ADD vnc.sh /vnc.sh
#RUN chmod 755 /set.sh
#RUN /set.sh
#RUN chmod 755 /vnc.sh

#RUN echo "/vnc.sh" >> /etc/rc.local
ADD run.sh /run.sh
RUN chmod 755 /run.sh
#ADD xstartup /.vnc/xstartup

EXPOSE 5901 22

CMD /run.sh

import pickle
import base64

x = base64.b64decode(open("sessions/0fe08fc145b181459c7a05788aa1210557e39408").read())
print x
print "\n"

print pickle.loads(x)


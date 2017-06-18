import web


urls = (
	"/count","count",
	"/reset","reset"
	)

app = web.application(urls,globals())

if web.config.get('_session') is None:
	store = web.session.DiskStore('sessions')
	session = web.session.Session(app,store,initializer={'count':0})
	web.config._session = session
else :
	session = web.config._session

class count:
	def GET(self):
		session.count += 1
		return str(session.count)

class reset:
	def GET(self):
		session.kill()
		return ""

if __name__ == "__main__":
	app.run()

import web

urls = (
	'/','Index'
	)

app = web.application(urls,globals())

render = web.template.render('templates/')
class Index(object):
	def GET(self):
		greeting1 = "Hello world!"
		return render.index(greeting = greeting1)

if __name__ == "__main__":
	app.run()

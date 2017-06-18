try:
	from setuptools import setup
except ImportError:
	from distutils.core import setup

config = [
	'description':'My project',
	'author':'MY',
	'url':'where to get',
	'download':'Where to download',
	'auter_email':'My email',
	'version':'0.1',
	'install_require':['nose'],
	'packages':['my1'],
	'scripts':[],
	'name':'projectname'
	]

setup(**config)

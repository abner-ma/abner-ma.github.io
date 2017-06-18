from nose.tools import *
from my1.game import Room

def test_room():
	gold = Room("GoldRoom","""This is description.""")
	assert_equal(gold.name,"GoldRoom")
	assert_equal(gold.paths,{})

def test_room_paths():
	center = Room("Center","Center description")
	north = Room("North","North description")
	south = Room("South","South description")
	center.add_paths({'north' : north , 'south' : south })
	assert_equal(center.go('north'),north)	
	assert_equal(center.go('south'),south)	


from flask import  Flask, jsonify, request
import transvtime


app=Flask(__name__)

@app.route('/', methods=['GET','POST'])
def index():
	if (request.method == 'POST'):
		some_json = request.get_json()
		return jsonify({'you sent': some_json}), 201
	else:
		return jsonify({'about': 'Hello World'})

@app.route('/multi/<string:s>/trans' , methods=['GET'])
def requestroute(s):
	print(s)
	z=transvtime.trans(s)
	return z

@app.route('/multi/<string:s>/fin/' , methods=['GET'])
def requestroute1(s):
	print(s)
	z=transvtime.fin(s)
	return z

@app.route('/multi/<string:s>/inv/' , methods=['GET'])
def requestroute2(s):
	print(s)
	z=transvtime.inv(s)
	return z

@app.route('/multi/<string:s>/typ/' , methods=['GET'])
def requestroute3(s):
	print(s)
	z=transvtime.typ(s)
	return z

@app.route('/multi/<string:s>/pro/' , methods=['GET'])
def requestroute4(s):
	print(s)
	z=transvtime.pro(s)
	return z

if __name__ == '__main__':
	app.run(debug=True)
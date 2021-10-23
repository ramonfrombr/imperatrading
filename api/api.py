import time
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/horario')
def selecionar_horario_atual():
    return jsonify({'horario': time.time()})
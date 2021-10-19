import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def selecionar_horario_atial():
    return {'horario': time.time()}
from flask import Flask, jsonify

app = Flask(__name__)

# Simula datos como si vinieran de una base de datos
fake_data = [
    {"id": 1, "name": "María"},
    {"id": 2, "name": "Juan"},
    {"id": 3, "name": "Lucía"}
]

@app.route("/data", methods=["GET"])
def get_data():
    return jsonify(fake_data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)


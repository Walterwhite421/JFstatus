import json

from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/api/relic-possess-num', methods=['GET'])
def get_relic_possess_num():
    json_file_path = '/mnt/windows_share/F242B6C4000000000000000000000000.sav.json'

    with open(json_file_path, 'r') as file:
        json_data = json.load(file)

    relic_possess_num = json_data.get('properties', {}).get('SaveData', {}).get('value', {}).get('RecordData', {}).get(
        'RelicPossessNum', {}).get('value')

    print(relic_possess_num)

    return jsonify({"relic_possess_num": relic_possess_num})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
from flask import Flask, jsonify
from flask_cors import CORS
from google.cloud import bigquery
import os 
import pandas as pd

#magicthegatheringdatabase.Green.Green_data

credentials_path = r"C:\Users\Blasi\Documents\GitHub\QueryFlaskReact\pythonbq.json"
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credentials_path

#Define the client BigQuery
bigquery_client = bigquery.Client()


project_id = "magicthegatheringdatabase"
dataset_id = "Green"
source_table = "Green_data"

dataset = bigquery_client.get_dataset(dataset_id)

#Query table
test_query = f"""
SELECT
    *
FROM
    {project_id}.{dataset_id}.{source_table}
"""

results = bigquery_client.query(test_query)
df = results.to_dataframe()
print(df)

#Turns the BigQuery table into dictionary
data = df.to_dict(orient="records")





#Flask app instance
app = Flask(__name__)
CORS(app)

#/api/home
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Willy Wonka!",
        'people': ['John', 'Lisa', 'Billy'],
        'table' : data
    }) 


if __name__ == "__main__":
    app.run(debug=True, port=8080)

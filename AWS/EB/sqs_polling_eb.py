from sqs_polling import sqs_polling
import json
import pandas as pd


def predict_days_of_stay(message_body):
	parsed_message_body = json.loads(message_body)
	
	patient_data_df = pd.json_normalize(parsed_message_body["payload"])
	
	preprocessed_patient_data_df = stay_range_pipe.transform(patient_data_df)
	patient_data_df["stay_label"] = stay_range_pipe.predict(preprocessed_patient_data_df)

	#patient_data_df.to_csv("patient_ejemplo.csv", index=False)

	return True


aws_profile = {
    "region_name": "eu-west-3",
    "aws_access_key_id": "XXX",
    "aws_secret_access_key": "XXXXX",
}

queue_url = "XXX"


sqs_polling(queue_url=queue_url, callback=predict_days_of_stay, extract_body=True, interval_seconds=5, aws_profile_dict=aws_profile)
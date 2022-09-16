# Health Twin

If there is one issue that has completely overshadowed the national and international scene during 2020 and 2021, it is undoubtedly the pandemic caused by the SARS-COV-2 virus, more commonly known as COVID-19 or coronavirus.

It is common knowledge that healthcare workers have had a titanic task in treating patients during all these months. Many sleepless nights, accumulated stress and above all a lot of work.

As a result, their estimates of the patient's future are often inaccurate due to the lack of time and rest. Because of this, patients are not able to receive the treatment that healthcare staff would like to give them due to the huge number of active coronavirus cases worldwide. This is why it was decided to launch the Health Twin project, an application that helps healthcare staff in their day-to-day work dealing with COVID-19, allowing them to free up a large part of their current workload, so that they can spend time on what they really want and what is important: the patients. A more personalised and closer treatment is possible thanks to this solution.

Health Twin is an IT solution based on a cloud and serverless architecture and artificial intelligence (AI), which uses Machine Learning algorithms such as random forest to predict the range of days remaining until a patient is discharged from hospital based on their medical data.

This solution also makes it possible to predict the patient's condition, enabling healthcare staff to take the appropriate decisions to ensure the patient has the best possible recovery.

In short, this project digitises hospital management, in this case, in relation to COVID-19.

All this information will be shown to the healthcare staff via a graphic interface through the application. With it they can:
- Consult the list with the patients, their status and the days until their medical discharge predicted thanks to our linear regression model and Machine Learning models.
- Access the information of a specific patient, where all the information related to their hospitalisation will be displayed in a much more detailed way.
In addition, there is a second application with which healthcare staff can save the status of patients when they enter the ICU, so that Health Twin predicts the range of days that the patient needs until their medical discharge and saves all this information in the database so that it can be consulted at a later date.

As can be seen, the system is not limited to receiving information, but proactively communicates between the two ends of the communication channel.

Health Twin is extremely scalable and can be adapted to a wide range of environments, however, it will initially focus on ICU patients with SARS-CoV-2. The data to train the artificial intelligence models comes from open source medical databases. These data are (initially) related to SARS-CoV-2 ICU patients.

This application only receives the medical data of the patients, i.e. there is no access to the patient's personal data, as only a patient identifier will be received, which will only be known by those working with the patient. In short, patient traceability of the patient is impossible.

## Project description ✏️ 
- This project is a computing solution based on cloud architecture and Artificial Intelligence (AI), which can, using Machine Learning algorithms such as random forest, predict the range of days remaining until a patient is discharged from hospital based on their medical data. The application also makes use of serverless computing. This solution will also predict and classify the patient's condition, allowing healthcare staff to make the right decisions to ensure the patient has the best possible recovery.
- To make all this possible, research is being carried out on the different technologies that underpin the project, with special emphasis on those related to the creation, evaluation and interpretation of Machine Learning models. The analysis and development of the system architecture is a fundamental part of the work, comprising the description of the system, its modelling and its implementation with the services offered by Amazon Web Services. Two applications are also developed, each with its own graphical interface, which are used by the healthcare personnel to make use of the different resources of the system.
- A CQRS pattern has been used for the design of the system architecture in AWS.
![alt text]("https://github.com/gon99martin/health-twin/blob/master/cqrs_pattern-CQRS with server and 2 DynamoDB.drawio.png?raw=true")

🛠 - Jupyter Notebooks have been used because of their ease of use and convenience for exploratory data analysis, along with the Python language.

🚩 - The main challenges were to achieve an acceptable Machine Learning model (78 % AUC) with so little patient data and to be able to integrate the whole system within AWS with a CQRS pattern.

## Future lines of research
- Spark cluster environment.
- Working with time series.
- Inclusion of a validation set.
- Research on techniques used to reduce overfitting in data-poor models.
- Inclusion of new use cases.
- Replacing DynamoDB with Aurora for the patient status database.

# Axis-Bank-Challenge-Signature-Recognition-System
This repository contains the code for Axis Bank AI Challenge (THEME: Signature Recognition) hosted on HackerEarth.

### Installation
Run the following commands on the root directory. Step 2 to 4 should be followed only if you are setting database from scratch. This repo already contains a database.:-
1. `pip install -r requirements.txt `
2. `flask db init`
3. `flask db migrate -m "users table"`
4. `flask db upgrade`

### Resources
1. https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-iv-database
2. http://www.iapr-tc11.org/dataset/ICDAR_SignatureVerification/SigComp2011/sigComp2011-trainingSet.zip
3. http://www.iapr-tc11.org/dataset/ICDAR_SignatureVerification/SigComp2011/sigComp2011-test.zip
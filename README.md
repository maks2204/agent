# DSTU4145 Agent with Express.Js

# Usage

## Sign file (czo.gov.ua/verify)

Post request on http://127.0.0.1:3000/sign with json (certs must in same dir as index.js)

    {"keyname":"name of private key dat or jks","certname":"name of public cert","keypass":"passwd","data": "data to sign"}
                
## Unsign file

Post request on http://127.0.0.1:3000/unsign with json

    {"data": "file in BASE64 encoding"}

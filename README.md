# HumKin Server
[Node](https://github.com/nodejs/node)/[Express.js](https://github.com/expressjs/express) server for [HumKin](https://github.com/haxzie/humkin), Open BloodBank Management System

Make sure Node.js and npm are updated

clone the repo and run
```bash
npm install
```

for development, install supervisor on your system
```bash
npm install --global supervisor
```

run the development server
```bash
supervisor index.js
```

Or run the app
```bash
node index.js
```

## Implementation

Update the dbconfig.json
```json
{
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "humkin"
}
```

Connecting to the MySql Database
`/db.js`
```js
var mysql = require('mysql');
var config = require('./dbconfig.json');
var connection;

module.exports = () => {
    if (!connection) {
        connection = mysql.createConnection(config);
        connection.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return connection;
}

```

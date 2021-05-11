'use strict';

const db = require("./lib/db")();

module.exports.getPatients = (event, context, callback) => {
  db.all(process.env.STATE_PATIENTS_TABLE, 
    res => callback(null, {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(res),
    }),
    err => callback(err)
  );
};
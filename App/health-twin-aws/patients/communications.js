'use strict';

const { compose, dissoc, pick } = require("ramda");
const db = require("./lib/db")();

const parseEvent = message => {
  const messagePayload = message.Records[0].Sns.Message;
  return compose(dissoc("default"), JSON.parse)(messagePayload);
};

module.exports.saveEventCreatePatient = (message, context, callback) => {
  console.log("saveEventCreatePatient "+JSON.stringify(message));
  const event = parseEvent(message);

  if (event.type !== "create-patient") return;

  db.save(process.env.EVENTS_PATIENTS_TABLE, event,
          entry => callback(null, entry),
          error => callback(error));
};

module.exports.saveStatePatient = (message, context, callback) => {
  console.log("saveStatePatient "+JSON.stringify(message));
  const event = parseEvent(message);

  if (event.type !== "create-patient") return;

  let patient = event.payload;

  db.save(process.env.STATE_PATIENTS_TABLE, patient, 
          entry => callback(null, entry), 
          error => callback(error));
};
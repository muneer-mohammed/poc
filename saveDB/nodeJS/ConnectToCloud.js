const stitch = require("mongodb-stitch")
const client = new stitch.StitchClient('nodedbconnector_01-hvguw');
const db = client.service('mongodb', 'mongodb-atlas').db('WDHallDB');
client.login().then(() =>
  db.collection('MyDB').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true})
).then(() =>
  db.collection('MyDB').find({owner_id: client.authedId()})
).then(docs => {
  console.log("Found docs", docs)
  console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
  console.error(err)
});
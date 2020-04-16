const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// Once done, deploy function with following command: firebase deploy --only functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase test!");
});

const createNotification = (notification) => {
    return admin
        .firestore()
        .collection("notifications")
        .add(notification)
        .then((document) => console.log("Notification added: ", document));
};

exports.projectCreated = functions.firestore
    .document("projects/{projectId}")
    .onCreate((snap, context) => {
        const project = snap.data();
        const notification = {
            content: "New project added",
            user: `${project.authorFirstName} ${project.authorLastname}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
        };
        return createNotification(notification);
    });

// https://firebase.google.com/docs/functions/firestore-events?authuser=0#event_triggers

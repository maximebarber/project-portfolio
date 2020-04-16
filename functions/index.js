const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// Once done, deploy function with following command: firebase deploy --only functions

/**
 * Once done, deploy function with following command:
 * @command firebase deploy --only functions
 */

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase test!");
});

const createNotification = async (notification) => {
    const document = await admin
        .firestore()
        .collection("notifications")
        .add(notification);
    return console.log("Notification added: ", document);
};

exports.projectCreated = functions.firestore
    .document("projects/{projectId}")
    .onCreate((snap, context) => {
        const project = snap.data();
        const notification = {
            content: "created a new project",
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
        };
        return createNotification(notification);
    });

// https://firebase.google.com/docs/functions/firestore-events?authuser=0#event_triggers

exports.userJoined = functions.auth.user().onCreate(async (user) => {
    const doc = await admin.firestore().collection("users").doc(user.uid).get();
    const newUser = doc.data();
    const notification = {
        content: "joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
});

// https://firebase.google.com/docs/functions/auth-events?authuser=0

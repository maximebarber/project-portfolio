const firebase = require('firebase/app');
require('firebase/auth');

export const signIn = (credentials) => {
    return (dispatch, getState) => {

        //const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })

    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGOUT_ERROR', err })
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS' })
            }).catch((error) => {
                dispatch({ type: 'SIGNUP_ERROR', error })
            })
        }).catch((error) => {
            dispatch({ type: 'SIGNUP_ERROR', error })
        })
    }
}

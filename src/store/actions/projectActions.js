export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Maxime',
            authorLastName: 'Barber',
            authorId: 123,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: "CREATE_PROJECT",
                project
            })
        }).catch((err) => {
            dispatch({
                type: "CREATE_PROJECT_ERR0R",
                err
            })
        })
    }
}
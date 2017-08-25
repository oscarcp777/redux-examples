const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const reducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.payload;
        case DECREMENT:
            return state - action.payload;
        default:
            return state;
    }
}
const store = createStore(reducer);

// Code to update the counter in the DOM
// Update view (this might be React or Angular2 in a real app)
const updateView = () => {
    document.querySelector('#counter').innerText = store.getState();
}


store.subscribe(updateView);
updateView(); // calling once to render the initial state (0), then the subscribe will update subsequently


// Connect click events to dispatch
// Listen to click events
document.querySelector('#inc').onclick = () => store.dispatch({
    type: INCREMENT,
    payload: 1
});
document.querySelector('#dec').onclick = () => store.dispatch({
    type: DECREMENT,
    payload: 1
});


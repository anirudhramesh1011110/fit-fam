const initialState = {
    isLoggedIn: false,
    username: '',
    password: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            console.log("Inside Reducer. Sending Login Object");
            console.log(action.username);
            return Object.assign({}, state, { 
                isLoggedIn: true,
                username: action.username,
                password: action.password
            });
            
        case 'LOGOUT':
            return Object.assign({}, state, { 
                isLoggedIn: false,
                username: '',
                password: ''
            });

        default:
            return state;
    }

}



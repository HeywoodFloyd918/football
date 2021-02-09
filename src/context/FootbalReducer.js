export default function reducer(state, action) {
    switch (action.type) {
        case 'FETCH':
            return {
                matches: action.payload
            }
    }
}
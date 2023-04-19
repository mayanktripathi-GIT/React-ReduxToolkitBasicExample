import { legacy_createStore as createStore} from 'redux'
import rootreduser from "./reducers/index";

const store = createStore (rootreduser,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;
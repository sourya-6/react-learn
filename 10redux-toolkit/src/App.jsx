import Add from './components/addTodo.jsx'
import Todos from './components/Todos.jsx';
import './App.css'

function App() {
  //first needs to create a store which contains access to every reducers present inside
  //needs to create a reducer with having an initial state
  //the reducer contains two features state and action
  //with help of state we can access the data defined in the initial state or we can say that can access any elements data
  //state also can be stated as the data is centralized and can be accessed using the state
  //action is like an event that changes the state
  //payload is the data which comes along with the action
  //Two methods there to access these state and Modify {useDispatch,useSelector}
  //useDispatch:-used to change the state of the store like it used to keep the store up to date
  //const dispatch = useDispatch()
  //useDispatch(login(email,pass))
  //useSelector:-used to access the state and its variables or methods
  // const todos = useSelector(state=>state.todos)

  
  return (
  <>
  <Add/>
  <Todos/>
  </>
    

  );
}



export default App

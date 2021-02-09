import './App.css';
import Person from './components/Person';

function App() {
     const onClick = () => {
          console.log('yaay du tryckte på knappen!')
     }
          
     return (
          <div>
               <h1>Hello World</h1>
               <button onClick={onClick}>Tryck här</button>
               <Person />
          </div>
     );
}

export default App;

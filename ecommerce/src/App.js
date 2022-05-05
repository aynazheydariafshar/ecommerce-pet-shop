import './styles/App.css';
import { Routes , Route } from 'react-router-dom';
import RoutePages from 'routes/RoutePages';

function App() {
  return (
    <div className="App">
      <Routes>
        {RoutePages.map((item , index) => {
          return <Route path={item.path} element={item.element} key={index}/>
        })}
      </Routes>
    </div>
  );
}

export default App;

import './styles/App.css';
import { Routes , Route } from 'react-router-dom';
import RoutePages from 'routes/RoutePages';
import PrivateRoute from 'routes/PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        {RoutePages.map((item , index) => {
          if(item.isPrivate){
            return <Route element={<PrivateRoute component={
              <Route path={item.path} element={item.element}/>
            }/>}>
            </Route>
          }
          else{
            return <Route path={item.path} element={item.element} key={index}/>
          }
        })}
      </Routes> */}
      <RoutePages />
    </div>
  );
  
}

export default App;

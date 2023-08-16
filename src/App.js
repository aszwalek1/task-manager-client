import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

function App() {

  const [tasks, setTasks] = useState();

  const getTasks = async () => {

    try {
      const response = await api.get("/api/v1/tasks");
      //console.log(response.data);
      setTasks(response.data);
    }
    catch(err) {
      console.log(err);
    }
    
  }

  useEffect(() => {
    getTasks();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Dashboard tasks={tasks}/>}> </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

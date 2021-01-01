import React, {useState, useEffect } from "react";
import Axios from 'axios';
import './App.css';

function App() {

  const [movieName, setMoviename] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [movieList, setMovieList] = useState([]); 

  const submitAddMovie = () => {
    Axios.post('http://localhost:3001/api/movie/add', {
      movieName: movieName, 
      movieDescription:description
    }).then(() => {
      alert("Se ha insertado correctamente.");
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/api/movie/get').then((response) => {
      setMovieList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD Application</h1>
      </header>

      <div className="form-container p-1">
        <form className="form" method="POST">
          <div className="form-section">
            <label className="text-light">Name</label>
            <input 
              type="text" 
              name="movieName" 
              onChange={(e)=> {
                setMoviename(e.target.value)
              }}
            />
          </div>
          <div className="form-section">
            <label className="text-light">Description</label>
            <input 
              type="text" 
              name="movieDescription" 
              onChange={(e)=> {
                setDescription(e.target.value)
              }}
            />
          </div>
          <button className="button-input m-1" onClick={submitAddMovie}>Submit</button>
        </form>
      </div>
      
      <div className="container p-1">
        <table>
          <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
          </thead>
          <tbody>
              {movieList.map((val) => {
                return <tr key={val.id}>
                          <td>{val.id}</td>
                          <td>{val.name}</td>
                          <td>{val.description}</td>
                        </tr>;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

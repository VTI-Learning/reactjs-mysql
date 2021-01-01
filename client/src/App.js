import React, {useState, useEffect } from "react";
import Axios from 'axios';
import './App.css';

function App() {

  const [movieName, setMoviename] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [movieList, setMovieList] = useState([]);
  const [updateMovieDescription, setUpdateMovieDescription] = useState(''); 

  const submitAddMovie = () => {
    Axios.post('http://localhost:3001/api/movie/add', {
      movieName: movieName, 
      movieDescription:description
    }).then(() => {
      setMovieList(...movieList,{movieName: movieName, movieDescription:description});
    });
  };

  const submitUpdateMovie = (movie) => {
    Axios.put('http://localhost:3001/api/movie/update', { 
      movieId: movie, 
      updateDescription:updateMovieDescription
    });
    setUpdateMovieDescription("");
  };

  const submitDeleteMovie = (movie) => {
    Axios.delete(`http://localhost:3001/api/movie/delete/${movie}`)
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
        <form className="form">
          <div className="form-section">
            <label htmlFor="movieName" className="text-light">Name</label>
            <input 
              type="text" 
              name="movieName" 
              onChange={(e)=> {
                setMoviename(e.target.value)
              }}
            />
          </div>
          <div className="form-section">
            <label htmlFor="movieDescription" className="text-light">Description</label>
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
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {movieList.map((val) => {
                return <tr key={val.id}>
                          <td>{val.id}</td>
                          <td>{val.name}</td>
                          <td>{val.description}</td>
                          <td><button onClick={() => {submitDeleteMovie(val.id)}}>Delete</button></td>
                          <td>
                            <input type="text" name="updateMovieDescription" onChange={(e)=> {
                              setUpdateMovieDescription(e.target.value)
                            }}></input>
                            <button onClick={() => {submitUpdateMovie(val.id)}}>Update</button>
                          </td>
                        </tr>;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

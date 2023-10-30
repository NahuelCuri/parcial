import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lista from './Components/lista'

function App() {
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState('');
  const [error, setError] = useState(false);
  let doctores = [
    {id: 1, nombre: 'Rick Sanchez', especialidad: 'as'},
    {id: 2, nombre: 'julius helbert', especialidad: 'bs'},
    {id: 3, nombre: 'diegio', especialidad: 'cs'}
  ]

  const handleSearch = () =>{
    const filteredDocs = doctores.filter((doctor) => doctor.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    setSearchList(filteredDocs);
    if(searchList == 0 && search.length > 0){
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <>
      <input type='text' placeholder="Busqueda" onBlur={(event) => setSearch(event.target.value)}/>
      <button onClick={handleSearch}>Buscar</button>
      {searchList.length > 0 ? null : <Lista doctores={doctores}/>}
      {searchList.length > 0 ? 
      <>
        <h1>Doctores Encontrados</h1>
        <Lista doctores={searchList}/>
      </>
      : null
      }
      {error && <h2>No se encontro el doctor</h2>}
    </>
  )
}

export default App

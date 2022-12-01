import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {Horror,Documentries,Comedy,action,Originals} from './Url'




function App() {
  return (
    <div className='App'>
      <NavBar/>
      <searchBar placeholder=''/>p
      <Banner/>
      <RowPost Url={Originals} title='NetFlix Originals'/>
      <RowPost Url={action} title='Actions' isSmall/>
      <RowPost Url={Comedy} title='Comedy' isSmall/>
      <RowPost Url={Documentries} title='Documentries' isSmall/>
      <RowPost Url={Horror} title='Horror' isSmall/>
      
      

      
    </div>
  );
}

export default App;

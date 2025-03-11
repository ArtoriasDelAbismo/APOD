import { useEffect, useState } from 'react';
import './App.css'


function App() {
  const [data, setData] = useState(null)
  const [picture, setPicture] = useState(null)

  /*async function getApodData() {
    const res = await fetch('http://localhost:3000')
    const data = await res.json()
    setData(data)
    console.log(data);
    return data;

  }
  */

  useEffect(() => {
    async function fetchPicture () {
      try {
        const res = await fetch('http://localhost:3000/')
        const data = await res.json()

        if(data.length > 0) {
          setPicture(data[data.length - 1])
        } else {
          console.log('No picture found in database.');
        }
          
      } catch (error) {
        console.error('Error fetching picture: ', error);        
      }
    }
    fetchPicture()
  }, [])


  return (
    <>
      <div>
        <h1>NASA astronomy picture of the day</h1>
        {picture ? (
          <>
            <h2>{picture.title}</h2>
            <h2>{picture.date}</h2>
            <div>
              <img src={picture.url} alt="" style={{width:'100%', maxwidth:'600px', marginTop:'50px', borderRadius:'4px'}} />
            </div>
            <p style={{marginBottom:'60px'}}>{picture.explanation}</p>
          </>
        ) : (
          <p>No data</p>
        )}

      </div>
    </>

  )
}

export default App




import { useState } from 'react'


const film = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {
  const [films, setFilms] = useState(film)

  return (
    <>
      <div>
        {films.map((film, index) => 
          <div key={index}>
            <h3>{film["title"]}</h3>
            <p>{film["genre"]}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App

import React, { useState } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models'

export function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector(state => state.github);
  const [ isFav, setIsFav ] = useState(favourites.includes(repo.html_url));
 

  const addToFavourites = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addFavourite(repo.html_url)
    setIsFav(true)
  }
  const removeFromFavourites = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    removeFavourite(repo.html_url)
    setIsFav(false)
  }


  return (
    <div className='border py-3 px-5 rounded cursor-pointer mb-4 hover:shadow-md hober:bg-gray-100 transition-all'>
        <a href={repo.html_url} target='_blank' rel="noreferrer">
            <h2 className='text-lg font-bold'> {repo.full_name} </h2>
            <p className='text-sm'>
                Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                Watchers: <span className='font-bold'>{repo.watchers}</span>
            </p>
            <p className='text-sm font-thin'>{repo?.description}</p>


            {isFav ? <button className='mt-4 py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'
            onClick={removeFromFavourites}>
              Remove from favourites
            </button> : <button className='mt-4 mr-2 py-2 px-4 bg-green-400 rounded hover:shadow-md transition-all'
            onClick={addToFavourites}>
              Add to favourites
            </button>} 
        </a>
    </div>
  )
}

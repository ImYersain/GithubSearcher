import React from 'react'
import { useAppSelector } from '../hooks/redux'

export default function FavouritesPage() {
  const { favourites } = useAppSelector(state => state.github);

    if(favourites.length === 0) return <p className='text-center'>No items</p>
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul>
          {favourites.map(fav => (
            <li className='mb-2' key={fav}>
              <a href={fav} target='_blank' rel="noreferrer">{fav}</a>
            </li>
          ))}
      </ul>
    </div>
  )
}

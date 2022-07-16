import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

export default function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery('ImYersain');

  return (
    <div>HomePage</div>
  )
}

import { useEffect, useState } from 'react'
import useFetch from './useFetch'

const useInfiniteFetch = (url) => {
  const [paginationCount, setPaginationCount] = useState(1)

  const [fetchData, { data, status, error }] = useFetch(
    `${url}?page=${paginationCount}`,
  )
  const [picturesData, setPicturesData] = useState([])

  useEffect(() => {
    // fetch 30 photos per request
    fetchData(`${url}?page=${paginationCount}`)
  }, [paginationCount])

  useEffect(() => {
    // fetch 30 photos per request
    if (status === 'fetched') setPicturesData([...picturesData, ...data])
  }, [status])

  // to fetch next batch of photos
  const nextPage = () => {
    setPaginationCount(paginationCount + 1)
  }

  const retry = () => {
    fetchData(`${url}?page=${paginationCount}`)
  }

  return [nextPage, retry, picturesData, { status, error }]
}

export default useInfiniteFetch

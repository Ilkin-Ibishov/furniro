import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../data/static-datas'

const useGetCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/Category/getAll`)
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  }

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories()
        setCategories(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    getCategories()
  }, [])

  return { categories, loading }
}

export default useGetCategories

import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

export default () => {
  useEffect(() => {
    fetch('./.netlify/functions/hello')
      .then((res, err) => {
        if (err) {
          console.log('error => ', err)
        }
        res.json()
      })
      .then(json => {
        console.log(JSON.stringify(json))
      })
  }, [])
  return (
    <>
    </>
  )
}

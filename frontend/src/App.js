import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import xmlFetcher from './utilities/xmlFetcher.jsx'
import './App.css'
import { extractLastFragments } from './utilities/extractSkus.jsx'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import BookCard from './components/BookCard.jsx'

function App() {
  // create state for the fetched XML book URLs to be added into
  const [bookUrls, setBookUrls] = useState([])
  // when 'Search' is clicked, the card object is cleared
  // if data is returned from fetch, set it in this object for BookCard
  const [returnedData, setReturnedData] = useState({})
  // for Typeahead dropdown, so the selected SKU becomes submittable
  const [singleSelection, setSingleSelection] = useState([])

  // on page load/reload, this hook gets the book URLs to choose from
  useEffect(() => {
    async function fetchData() {
      const fetchedBookUrls = await xmlFetcher()
      setBookUrls(fetchedBookUrls)
    }

    fetchData()
  }, [])

  // creates an array of SKUs so we can compare user SKU selection to URLs
  const lastFragments = extractLastFragments(bookUrls)

  // when clicked, sends user's SKU(URL) to POST endpoint to fetch details
  const handleSearch = async () => {
    // first, match selected SKU to its URL, then send as String to server
    const filteredSku = String(
      bookUrls.filter((urls) =>
        singleSelection.some((sku) => urls.includes(sku))
      )
    )

    // clear card, so if anything goes wrong, user doesn't get confused
    setReturnedData({})
    setSingleSelection([])

    // try posting URL string to Express for book details to be fetched
    try {
      const response = await axios.post('/api', { data: filteredSku })

      // if successful response, write the book details into the UI card
      // NOTE: this is the data that is parsed by cheerio in server.js
      setReturnedData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div onLoad={xmlFetcher}>
      <Header />
      <Form.Group className='d-flex'>
        <Typeahead
          id='basic-typeahead-single'
          labelKey='name'
          onChange={setSingleSelection}
          options={lastFragments}
          placeholder='Choose a SKU...'
          selected={singleSelection}
          className='form-control'
        />
        <Button
          type='submit'
          variant='info'
          className='px-3 py-1'
          onClick={handleSearch}
        >
          Search
        </Button>
      </Form.Group>
      <BookCard
        title={returnedData.Title}
        author={returnedData.Authors}
        price={returnedData.Price}
      />
    </div>
  )
}

export default App

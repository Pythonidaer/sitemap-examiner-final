import axios from 'axios'

/*

  FUNCTION SUMMARY:
  - I used a lot of references from ChatGPT on this one.
  - I had never worked with XML or a Sitemap before, so I first had to figure out what kind of data I was working with, and how to parse it.
  - Once I found the elements I needed to loop over, I cleaned up each line so that all that remained was the URL and not arbitrary data



  *** Basically, this function:
  1. fetches all the XML Sitemap URLs
  2. cleans them
  3. stores them in an books array
     - this array is used to extractSkus; an index may be fetched later



  ROOM FOR IMPROVEMENT:
  - In order for all the sitemap URLs to be written into the array,
  - I need to batch the returned urlElements,
  - And change my for loop into a decrementing while loop

  I focused more on the RESTful API Service, so didn't have time to come back to this.

*/

const xmlFetcher = async () => {
  const url = 'https://www.christianbook.com/sitemap4.xml'
  try {
    const response = await axios.get(url)
    const xmlString = response.data
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml')

    const urlElements = xmlDoc.getElementsByTagName('url')

    /* urlElements.length; */
    // above is too long to loop over (50,000)
    // Uncaught RangeError: Maximum call stack size exceeded

    // Need to consider while looping
    // Because the original batchsize is too large

    const startIndex = 0
    const endIndex = 1000

    let books = []
    for (let i = startIndex; i <= endIndex; i++) {
      const urlElement = urlElements[i]
      if (urlElement) {
        const lines = urlElement.textContent.split('\n')
        const url = lines[1].trim()
        books.push(url)
      } else {
        break // Break the loop if the desired range exceeds the available elements
      }
    }
    // console.log(books)
    return books
  } catch (error) {
    console.error('xmlFetcher error:', error)
    return []
  }
}

export default xmlFetcher

/*
  TO-DO:
  - Need to convert the above into a while loop

    const batchSize = 1000;
    const totalItems = urlElements.length
    while (startIndex < totalItems) {
      const endIndex = Math.min(startIndex + batchSize, totalItems)
      const batch = Array(urlElements.slice(startIndex, endIndex))

      for (const item of batch) {
        const urlElement = urlElements[i]
        if (urlElement) {
          const lines = urlElement.textContent.split('\n')
          const url = lines[1].trim()
          books.push(url)
        } else {
          break // Break the loop if the desired range exceeds the available elements
        }
      }
      // console.log(books)
      startIndex = endIndex
    }
    return books
  } 
*/

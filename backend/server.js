import axios from 'axios'
import * as cheerio from 'cheerio'
import express from 'express'

/*

   BACKEND SUMMARY:
   1. axios is used on the backend to avoid CORS cross-site blocks
   2. cheerio is used for parsing and manipulating HTML
   3. express is used to build the requested RESTful service

   Lastly:
   - I had actually been coding the majority of this assessment in a Vite React App (listed in README.md)
   - However, I just couldn't get the frontend localhost to POST the selected URL for fetching to the backend (likely due to Vite's different config setup and my limited experience with it).
   - As a last attempt, I tried an old-fashioned Create React App, which allowed me to achieve my final roadblock for Part 1 (RESTful API Service).

*/

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// get data
app.post('/api', (req, res) => {
  const url = req.body.data
  console.log('Received data:', req.body.data)
  axios(url, { responseType: 'text' })
    .then((response) => {
      const html = response.data
      const $ = cheerio.load(html)

      const titles = $('.CBD-ProductDetailTitle')
        .map((index, element) => $(element).text().trim())
        .get()
      const authors = $('.CBD-ProductDetailAuthor')
        .map((index, element) => $(element).text().trim())
        .get()
      const prices = $('.CBD-ProductDetailActionPrice')
        .map((index, element) => $(element).text().trim())
        .get()

      const dollarSignIndex = prices[0].indexOf('$')

      const data = {
        Title: titles[0],
        Authors: authors[0],
        Price: prices[0].slice(dollarSignIndex),
      }

      res.json(data)
    })
    .catch((err) => console.log(err))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running mode on port ${PORT}`))

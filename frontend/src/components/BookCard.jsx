import React from 'react'
import { Card, Button } from 'react-bootstrap'

/*

   CARD SUMMARY:
   - I decided to stick with a flavor of React-Bootstrap on this one, because I was sick for the majority of this coding assessment.
   - The Bootstrap Card was easy to get set up to pass data through, while having a decent appearance.

   NOTE:
   - If I were to improve the card, I would probably visit these pages:
   1. https://www.awwwards.com/inspiration_search/?text=cards
   2. https://www.christianbook.com/101-dalmatians-ebook-dodie-smith/9781101153642/pd/47060EB?product_redirect=1&Ntt=47060EB&item_code=&ps_exit=RETURN|legacy&Ntk=keywords&event=ESRCG

*/

const BookCard = ({ title, author, price }) => {
  return (
    <Card style={{ maxWidth: '18rem', margin: '5% auto 0' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{author}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button disabled={true} variant='info'>
          BUY NOW
        </Button>
      </Card.Body>
    </Card>
  )
}

export default BookCard

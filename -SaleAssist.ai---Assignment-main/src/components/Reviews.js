import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    axios
      .get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
      .then(response => {
        setReviews(response.data)
      })
      .catch(error => {
        console.error('Error fetching reviews:', error)
      })
  }, [])

  return (
    <div>
      <h2>Customer Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.content}</p>
            <p>- {review.author}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Reviews

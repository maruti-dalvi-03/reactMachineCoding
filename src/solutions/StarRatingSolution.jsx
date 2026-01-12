import React, { useState } from 'react'

const StarRatingSolution = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
     <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1 text-3xl cursor-pointer">
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            className={(hover || rating) >= star ? "text-yellow-400" : "text-gray-300"}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-600">
        Selected Rating: {rating}
      </p>
    </div>
  )
}

export default StarRatingSolution


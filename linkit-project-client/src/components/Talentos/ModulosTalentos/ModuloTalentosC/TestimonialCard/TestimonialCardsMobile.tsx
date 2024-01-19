import { FunctionComponent, useEffect, useState } from 'react';
import TestimonialCard, { TestimonialCardProps } from './TestimonialCard'; 
import { getReviews } from '../../../../Services/reviews.service';
import blackArrow from "/Vectores/arrow.png"

const TestimonialCardsMobile: FunctionComponent = () => {
  const [current, setCurrent] = useState(0);
  const [reviews, setReviews] = useState<TestimonialCardProps[]>([])

  // Display 3 testimonials at a time
  const testimonialsPerPage = 1;
  const maxPages = Math.ceil(reviews.length / testimonialsPerPage);
  const handlePrev = () => setCurrent(current === 0 ? maxPages - 1 : current - 1);
  const handleNext = () => setCurrent(current === maxPages - 1 ? 0 : current + 1);

  
  
  // This is going to be fired when the component is rendered by the first time
  useEffect(() => {
    const fetchReviews = async () => {
      // Fetch my reviews from backend api
      const fetchedReviews = await getReviews()
      // Set the reviews in the state

      const activeReviews = fetchedReviews.filter((review) => review.archived === false)
      setReviews(activeReviews);

    }

    fetchReviews()
  }, [])

  //Slice the array of testimonials to get only the ones we need to show
  const testimonialsToShow = reviews.slice(
    current * testimonialsPerPage,
    (current + 1) * testimonialsPerPage
  );
  
  return (
    <div className="my-[5%] flex space-x-2 items-center justify-center">
      <img src={blackArrow} alt="prev" onClick={handlePrev} className='rotate-90 w-[20px] h-[20px] cursor-pointer' />
      <div className="w-full h-full space-x-4">
        {testimonialsToShow.map((testimonial, _id) => (
          <div className="" key={testimonial._id}>
            <TestimonialCard key={`card-${_id}`} {...testimonial} />
          </div>
        ))}
      </div>
        <img src={blackArrow} alt="next" onClick={handleNext} className='-rotate-90 w-[20px] h-[20px] cursor-pointer' />
      
    </div>
  );
};

export default TestimonialCardsMobile;

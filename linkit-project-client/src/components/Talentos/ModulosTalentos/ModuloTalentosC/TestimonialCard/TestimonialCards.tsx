import { FunctionComponent, useEffect, useState } from 'react';
import TestimonialCard, { TestimonialCardProps } from './TestimonialCard'; 
import { getReviews } from '../../../Services/reviews.service';

const TestimonialCards: FunctionComponent = () => {
  const [current, setCurrent] = useState(0);
  const [reviews, setReviews] = useState<TestimonialCardProps[]>([])

  // Display 3 testimonials at a time
  const testimonialsPerPage = 3;
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
    <div className="w-[1050px] h-[340px] flex overflow-hidden space-x-6 items-center justify-center">
      <button onClick={handlePrev} className="text-3xl ">{'<'}</button>
      <div className="w-full flex space-x-4">
        {testimonialsToShow.map((testimonial, _id) => (
          <div className="w-1/3 h-[270px]" key={testimonial._id}>
            <TestimonialCard key={`card-${_id}`} {...testimonial} />
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="text-3xl">{'>'}</button>
    </div>
  );
};

export default TestimonialCards;

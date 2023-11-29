import axios from 'axios';
import { TestimonialCardProps } from '../Talentos/ModulosTalentos/ModuloTalentosC/TestimonialCard/TestimonialCard';

export const URL = `https://linkit-server.onrender.com`

export const getReviews = async (): Promise<TestimonialCardProps[]> => {
	const response = await axios.get<TestimonialCardProps[]>(`${URL}/reviews/find`, {
        headers: { Authorization: `Bearer 6564e8c0e53b0475ffe277f2` },
      })
	return response.data
}


import axios from 'axios';
import { TestimonialCardProps } from '../Talentos/ModulosTalentos/ModuloTalentosC/TestimonialCard/TestimonialCard';

export const URL = `https://linkit-server.onrender.com`

export const getReviews = async (): Promise<TestimonialCardProps[]> => {
	const response = await axios.get<TestimonialCardProps[]>(`${URL}/reviews/find`, {
        headers: { Authorization: `Bearer 65566e201b4939c1cef34a54` },
      })
	return response.data
}


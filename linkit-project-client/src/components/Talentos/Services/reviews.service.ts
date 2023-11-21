import axios from 'axios';
import { TestimonialCardProps } from '../ModulosTalentos/ModuloTalentosC/TestimonialCard/TestimonialCard';

export const URL = `https://linkit-server.onrender.com`

export const getReviews = async (): Promise<TestimonialCardProps[]> => {
	const response = await axios.get<TestimonialCardProps[]>(`${URL}/reviews/find`)
	return response.data
}


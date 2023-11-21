import axios from 'axios';
import { JobCardProps } from '../ModulosTalentos/ModuloTalentosG/JobCard/JobCard';
import { URL } from './reviews.service';


export const getJobOffers = async (): Promise<JobCardProps[]> => {
	const response = await axios.get<JobCardProps[]>(`${URL}/jds/find`)
	return response.data
}
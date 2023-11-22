import axios from 'axios';
import { JobCardProps } from '../ModulosTalentos/ModuloTalentosG/JobCard/JobCard';
import { URL } from './reviews.service';
import { SUPERADMN_ID } from '../../../env';


export const getJobOffers = async (): Promise<JobCardProps[]> => {
	const response = await axios.get<JobCardProps[]>(`${URL}/jds/find`, {
        headers: { Authorization: `Bearer ${SUPERADMN_ID}` },
      })
	return response.data
}
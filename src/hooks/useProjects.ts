import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../services/api';

export const useProjects = () => {
  return useQuery({ queryKey: ['projects'], queryFn: getProjects });
};

import { useQuery } from '@tanstack/react-query';
import { exampleService } from '../services/exampleService';

// Hook naming: use[Feature]Query or use[Feature]Mutation
export const useExampleQuery = () => {
  return useQuery(['example'], exampleService);
};

import useSwr from 'swr';

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
  const { data:user, error, isLoading, mutate } = useSwr('/api/current', fetcher);
  return {
    user,
    error,
    isLoading,
    mutate,
  }
};

export default useCurrentUser;

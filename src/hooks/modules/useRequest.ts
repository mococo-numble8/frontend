// // react-query에 의존성 역전 원칙을 적용하기 위해 hook으로 따로 분리
import { useQuery, useMutation } from 'react-query';
import type { QueryKey, UseQueryOptions } from 'react-query';
import { queryClient } from 'api/query/query-client';

/**
 * GET
 * @param key 캐싱에 사용할 유니크한 키 값
 * @param request 데이터 통신을 하는 함수
 * @param options useQuery options
 * @returns
 */
export const useQueryData = <TResult>(
  key: QueryKey,
  request: () => Promise<TResult>,
  options?: UseQueryOptions<TResult>,
) => {
  const { data } = useQuery<TResult>(key, request, options);
  return data;
};

/**
 * POST, DELETE
 * @param request
 * @param key
 * @returns
 */
export const useMutate = <TValue, TResult>(request: (value: TValue) => Promise<TResult>, key: QueryKey) => {
  const { mutate } = useMutation(request, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
  });

  return mutate;
};

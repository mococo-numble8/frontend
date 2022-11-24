// // react-query에 의존성 역전 원칙을 적용하기 위해 hook으로 따로 분리
import { useQuery, useMutation } from 'react-query';
import type {
  QueryKey,
  QueryFunction,
  UseQueryResult,
  UseQueryOptions,
  MutationFunction,
  UseMutationOptions,
} from 'react-query';

/**
 * GET
 * @param key 캐싱에 사용할 유니크한 키 값
 * @param request 데이터 통신을 하는 함수
 * @param options useQuery options
 * @returns
 */
export const useQueryData = (key: QueryKey, request: QueryFunction, options?: UseQueryOptions): UseQueryResult => {
  return useQuery(key, request, { ...options });
};

/**
 * POST, DELETE
 * @param request 데이터 통신하는 함수
 * @param options useMutation options
 * @returns
 */
export const useMutate = (request: MutationFunction, options?: UseMutationOptions) => {
  const { mutate } = useMutation(request, { ...options });
  return mutate;
};

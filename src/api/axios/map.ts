// 위치, 지도 관련 통신
import { testInstance } from './instance';

// userList 가져오는 테스트 코드
export const testFetch = async () => {
  const { data } = await testInstance.get('/users?page=2');
  return data;
};

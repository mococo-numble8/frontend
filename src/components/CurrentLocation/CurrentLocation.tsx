import useCurrentLocation from 'hooks/modules/useCurrentLocation';
import KakaoAddress from 'components/common/Kakao/KakaoAddress';

const CurrentLocation = () => {
  const { coords, error } = useCurrentLocation(); // 현재 좌표 조회
  console.log(coords, error);
  // 현재 좌표가 있을 경우 kakaomap api로 주소 조회
  return coords ? <KakaoAddress coords={coords} /> : <div>{error}</div>;
};

export default CurrentLocation;

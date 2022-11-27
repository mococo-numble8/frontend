import KakaoMap from 'components/common/Kakao/KakaoMap';
import CurrentLocation from 'components/main/CurrentLocation';

const KakaoMapPage = () => {
  return (
    <>
      <CurrentLocation />
      <KakaoMap mapSize={{ width: '100%', height: '500px' }} />
    </>
  );
};
export default KakaoMapPage;

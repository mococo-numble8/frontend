// html Geolocation을 이용해 현재 위치 좌표 리턴
import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [coords, setCoords] = useState<MapType.Coords>(); // 좌표 정보
  const [error, setError] = useState<string>(''); // 에러일 경우 메시지

  const onSuccess = (location: GeolocationPosition) => {
    setCoords({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const onError = (e: GeolocationPositionError) => {
    setError(e.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    // 사용된 브라우저에서 Geolocation이 정의되지 않은 경우
    if (!geolocation) {
      setError('위치 정보를 가져올 수 없습니다.');
      return;
    }

    // Geolocation API 호출
    geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { coords, error };
};

export default useCurrentLocation;

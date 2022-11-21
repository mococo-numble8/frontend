// 좌표를 받아 주소로 변경하여 리턴하는 컴포넌트
import React, { useEffect, useState } from 'react';

interface PropsType {
  coords: MapType.Coords;
}

const KakaoAddress = ({ coords }: PropsType) => {
  const [address, setAddress] = useState<string>();

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체

    const coord = new kakao.maps.LatLng(coords.latitude, coords.longitude);
    const callback = (result: MapType.AddressList, status: kakao.maps.services.Status) => {
      if (status === kakao.maps.services.Status.OK) {
        const resultAddress = result[0].address;
        // region_2depth_name: 구, region_3depth_name: 동
        setAddress(`${resultAddress.region_2depth_name} ${resultAddress.region_3depth_name}`);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }, [coords]);

  return <div>{address}</div>;
};

export default KakaoAddress;

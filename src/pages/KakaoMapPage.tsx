import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface Marker {
  content: string;
  position: {
    lat: number;
    lng: number;
  };
}
const KakaoMapPage = () => {
  const [info, setInfo] = useState<Marker>();
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [map, setMap] = useState<kakao.maps.Map>();

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();
    console.log(map);
    ps.keywordSearch('신논현 맛집', (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        const markerList = [];

        for (let i = 0; i < data.length; i++) {
          markerList.push({
            position: {
              lat: Number(data[i].y),
              lng: Number(data[i].x),
            },
            content: data[i].place_name,
          });
          bounds.extend(new kakao.maps.LatLng(Number(data[i].y), Number(data[i].x)));
        }
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
        setMarkers(markerList);

        console.log(bounds);
        console.log(_pagination);
      }
    });
  }, [map]);

  return (
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        width: '100%',
        height: '800px',
      }}
      level={3}
      onCreate={setMap}
    >
      {markers &&
        markers.map(marker => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && <div style={{ color: '#000' }}>{marker.content}</div>}
          </MapMarker>
        ))}
    </Map>
  );
};
export default KakaoMapPage;

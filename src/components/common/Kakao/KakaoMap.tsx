import React, { useEffect, useState, useRef, useCallback } from 'react';
import useCurrentLocation from 'hooks/modules/useCurrentLocation';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface PropsType {
  mapSize: {
    width: string;
    height: string;
  };
}

interface Marker {
  content: string; // 장소명
  position: MapType.Coords;
}

const KakaoMap = ({ mapSize }: PropsType) => {
  const { coords } = useCurrentLocation(); // 현재 좌표 조회
  const inputRef = useRef<HTMLInputElement>(null);

  const [map, setMap] = useState<kakao.maps.Map>(); // 지도 객체
  const [keyword, setKeyword] = useState<string>(''); // 지도 검색 키워드
  const [activeMarkerInfo, setActiveMarkerInfo] = useState<Marker>(); // 클릭된 마커
  const [markers, setMarkers] = useState<Marker[]>([]); // 마커 리스트

  useEffect(() => {
    // 지도와 검색 키워드가 있을때 마커 생성
    if (!map || !keyword) return;

    const places = new kakao.maps.services.Places();
    places.keywordSearch(keyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정 하기위해 LatLngBounds 객체에 좌표를 추가
        const bounds = new kakao.maps.LatLngBounds();
        const markerList = [];
        for (let i = 0; i < data.length; i++) {
          markerList.push({
            position: {
              latitude: Number(data[i].y),
              longitude: Number(data[i].x),
            },
            content: data[i].place_name,
          });
          bounds.extend(new kakao.maps.LatLng(Number(data[i].y), Number(data[i].x)));
        }
        map.setBounds(bounds); // 검색된 장소 위치를 기준으로 화면에 노출할 지도 범위를 재설정
        setMarkers(markerList); // 검색된 마커 리스트 저장
      }
    });
  }, [map, keyword]);

  const onSubmitSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputRef.current) return;
      setKeyword(inputRef.current.value);
    },
    [inputRef],
  );

  return (
    <>
      <form onSubmit={onSubmitSearch}>
        <input type="text" name="keyword" ref={inputRef} />
        <button type="submit">검색</button>
      </form>
      <Map
        center={{
          lat: coords?.latitude || 37.5546788388674,
          lng: coords?.longitude || 126.970606917394,
        }}
        style={{
          width: mapSize.width,
          height: mapSize.height,
        }}
        level={3}
        onCreate={setMap}
      >
        {markers &&
          markers.map(marker => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.latitude},${marker.position.longitude}`}
              position={{ lat: marker.position.latitude, lng: marker.position.longitude }}
              onClick={() => {
                setActiveMarkerInfo(marker);
              }}
            >
              {activeMarkerInfo && activeMarkerInfo.content === marker.content && <div>{marker.content}</div>}
            </MapMarker>
          ))}
      </Map>
    </>
  );
};

export default KakaoMap;

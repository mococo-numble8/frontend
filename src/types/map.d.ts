namespace MapType {
  // 주소 좌표
  type Coords = {
    latitude: number;
    longitude: number;
  };

  // 주소 결과
  type AddressList = {
    address: Address; //지번 주소 상세 정보
    road_address: RoadAaddress | null; // 도로명 주소 상세 정보
  }[];
}

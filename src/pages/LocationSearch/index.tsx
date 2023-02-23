import React from "react";
import * as Styled from "./index.styles";

import Title from "./Title";
import LocationList from "./LocationList";
import SearchInput from "./SearchInput";
import Header from "@/@components/Molecule/Header";

const LocationSearch = () => {
  const locations = [
    "서울 마포구 공덕동",
    "서울 마포구 아현동",
    "서울 마포구 서교동",
    "서울 마포구 연남동",
    "서울 마포구 합정동",
  ];
  return (
    <div>
      <Header title="활동지역 설정" />
      <Styled.Content>
        <Title />
        <SearchInput />
        <LocationList locations={locations} />
      </Styled.Content>
    </div>
  );
};

export default LocationSearch;

/**
 * ?
 * 1. 굳이 Header에서 밝히고 있는데 TitleBar를 통해서 따로 알려줄 필요가 있을까?
 * 2. Error 처리를 어떻게 하면 좋을까?
 * 3. Layout을 줄 떄 어떤 방식이 편할까. Root 레벨에서 nth-child를 사용해서 처리하기?
 * 아니면 각 컴포넌트로 나눠서 Wrapping을 한뒤에 책임을 맡기기 -> 책임을 넘기자
 */

import React from "react";
import FormInput from "@/@components/Molecule/FormInput";

const SearchInput = () => {
  return (
    <div>
      <FormInput>
        <FormInput.InputWithButton>
          <FormInput.InputWithButton.Input placeholder="내 지역 (동/읍/면)으로 검색" />
          <FormInput.InputWithButton.Button text="검색하기" />
        </FormInput.InputWithButton>
      </FormInput>
    </div>
  );
};

export default SearchInput;

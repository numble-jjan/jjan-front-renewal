import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 3.75rem;
`;

export const IconWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
  & > svg {
    margin-bottom: 0.5rem;
  }
`;

export const SpecialIconWrapper = styled(IconWrapper)`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 120%;
  background: linear-gradient(135deg, #683ced 0%, #925ce9 100%);
  box-shadow: -9px 4px 20px rgba(146, 92, 233, 0.3);
  & > svg {
    margin-bottom: 0.625rem;
  }
`;

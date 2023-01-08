import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 16px 0;
  margin-bottom: 16px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  & .disable {
    font-size: 16px !important;
    font-weight: 300 !important;
  }
`;

export const ReadButton = styled.div`
  margin-left: 90%;
  padding: 4px 6px;
  color: white;
  border-radius: 16px;
  background-color: gray;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 8px;
  text-align: center;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Date = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 24px;
  color: gray;
`;
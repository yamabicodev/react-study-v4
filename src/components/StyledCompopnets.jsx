// styled jsxを使うにはstyled-componentsを追加する必要がある。
// package.jsonにdepandencyを追加し、npm/yarnインストールする。 例:"styled-components": "5.3.1",
// styleを指定したcomponentsを作成する
import styles from "styled-components";

export const StyledCompopnets = () => {
  return (
    <SContainer>
      <STitle>-- StyledCompopnets --</STitle>
      <SButton>CLICK ME!</SButton>
    </SContainer>
  );
};

const SContainer = styles.div`
  border: solid 2px #5e5ca1;
  border-radius: 20px;
  padding: 20px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styles.p`
  padding: 0;
  margin: 0;
  color: #5e835a;
  font-weight: bolder;
`;

const SButton = styles.button`
  padding: 10px;
  margin: 0;
  border-radius: 20px;
  background-color: #d39908;
  color: #ffffff;
  &:hover {
    opacity: 0.5;
  }
`;

// [atmark]jsx jsxでエラーが出る場合は以下を書く。
/** @jsxRuntime classic */
// [重要]reactでmotionを利用する場合は以下を記述する。
/** @jsx jsx */

// styled jsxを使うには以下を追加する必要がある。
// emotion/react
// emotion/styled
// package.jsonにdepandencyを追加し、npm/yarnインストールする。 例:"@emotion/react": "11.4.1", "@emotion/styled": "11.3.0",

import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
export const Emotion = () => {
  {
    /** 1. 通常のCSSの記法が使える */
  }
  const containerStyle = css`
    border: solid 2px #5e5ca1;
    border-radius: 20px;
    padding: 20px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  {
    /** 2. jsxのinline styleの記法が使える */
  }
  const titleStyle = css({
    padding: 0,
    margin: 0,
    color: "#3d84a8",
    fontWeight: "bolder"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>-- Emotion --</p>
      <SButton>CLICK ME!</SButton>
    </div>
  );
};

{
  /** 3. styled componentsライクな記法が使える*/
}
const SButton = styled.button`
  padding: 10px;
  margin: 0;
  border-radius: 20px;
  background-color: #d39908;
  color: #ffffff;
  &:hover {
    opacity: 0.5;
  }
`;

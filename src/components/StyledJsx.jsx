// styled jsxを使うにはstyled-jsxを追加する必要がある。
// package.jsonにdepandencyを追加し、npm/yarnインストールする。 例:"styled-jsx": "4.0.1",
// next.jsはデフォルトでstyled jsxが入っている。
export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">-- StyledJsx --</p>
        <button className="button">CLICK ME!</button>
      </div>
      {/* StyledJsxはデフォルトでは「:hover」等の擬似要素を利用できない。 */}
      <style jsx="true">{`
        .container {
          border: solid 2px #5e5ca1;
          border-radius: 20px;
          padding: 20px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          padding: 0;
          margin: 0;
          color: #5e835a;
          font-weight: bolder;
        }

        .button {
          padding: 10px;
          margin: 0;
          border-radius: 20px;
          background-color: #d39908;
          color: #ffffff;
        }
      `}</style>
    </>
  );
};

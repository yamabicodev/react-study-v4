export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "20px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const tileStyle = {
    padding: 0,
    margin: 0,
    color: "#3d84a8",
    fontWeight: "bolder"
  };
  const buttonStyle = {
    padding: 10,
    margin: 0,
    backgroundColor: "#ffbb11",
    borderRadius: "20px"
  };
  return (
    <div style={containerStyle}>
      <p style={tileStyle}>-- Inline Sytle --</p>
      <button style={buttonStyle}>CLICK ME!</button>
    </div>
  );
};

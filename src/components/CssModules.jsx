// css modulesを使うにはnode-sassを追加する必要がある。
// package.jsonにdepandencyを追加し、npm/yarnインストールする。 例:"node-sass": "6.0.1",
// css ファイル名はXXXX.module.sass or XXXX.module.scssになっていないといけない。
import styles from "./ClassModules.module.scss";
export const ClassModules = () => {
  const { container, title, button } = styles;
  return (
    <div className={container}>
      <p className={title}>-- ClassModules --</p>
      <button className={button}>CLICK ME!</button>
    </div>
  );
};

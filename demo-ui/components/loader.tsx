import styles from "./loader.module.css";

export default function Loader() {
  return <div className={styles["lds-dual-ring"]}></div>;
}

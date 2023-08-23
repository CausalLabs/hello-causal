import Link from "next/link";
import styles from "./Prerequisites.module.css";

const gitUrl = "https://git-scm.com/downloads";
const dockerUrl = "https://www.docker.com/products/docker-desktop/";

export function Prerequisite() {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>
            <Link href={gitUrl} target="_blank">
              <img src="/git.svg" className="h-6"></img>
            </Link>
          </td>
          <td>
            You will need a{" "}
            <Link href={gitUrl} target="_blank">
              git
            </Link>{" "}
            client
          </td>
          <td>
            <Link href={gitUrl} target="_blank">
              <img src="/arrow-right.svg" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link href={dockerUrl} target="_blank">
              <img src="/docker.svg" className="h-10"></img>
            </Link>
          </td>
          <td>
            You will need a recent version of{" "}
            <Link href={dockerUrl} target="_blank">
              Docker Desktop
            </Link>{" "}
            running on your computer and{" "}
            <span style={{ fontWeight: 700 }}>
              you will need to keep a Docker container running throughout the
              tutorial.
            </span>
          </td>
          <td>
            <Link href={dockerUrl} target="_blank">
              <img src="/arrow-right.svg" />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

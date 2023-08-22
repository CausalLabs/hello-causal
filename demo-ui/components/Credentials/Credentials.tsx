import { CopyToClipBoard } from "../CopyToClipboard/CopyToClipboard";
import styles from "./Credentials.module.css";

export default function Credentials({
  accountId,
  username,
  password,
}: {
  accountId?: string;
  username: string;
  password: string;
}) {
  return (
    <div>
      <div className="text-xs mt-2 font-medium">Your credentials are:</div>

      <table className={styles.table}>
        <tbody>
          {accountId && (
            <tr>
              <td>
                <b>Account id</b>
              </td>
              <td>{accountId}</td>
              <td>
                <CopyToClipBoard txt={accountId} />
              </td>
            </tr>
          )}
          <tr>
            <td>
              <b>Username</b>
            </td>
            <td data-testid="usernameCell">{username}</td>
            <td>
              <CopyToClipBoard txt={username} />
            </td>
          </tr>
          <tr>
            <td>
              <b>Password</b>
            </td>
            <td data-testid="passwordCell">{password}</td>
            <td>
              <CopyToClipBoard txt={password} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

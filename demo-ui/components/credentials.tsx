import { CopyToClipBoard } from "./clipboard-utils";

export default function CredentialsTable({
  accountId,
  username,
  password,
}: {
  accountId?: string;
  username: string;
  password: string;
}) {
  return (
    <table className="credentials">
      <tbody>
        {accountId && (
          <tr>
            <td>
              <b>account id</b>
            </td>
            <td>{accountId}</td>
            <td>
              <CopyToClipBoard txt={accountId} />
            </td>
          </tr>
        )}
        <tr>
          <td>
            <b>username</b>
          </td>
          <td data-testid="usernameCell">{username}</td>
          <td>
            <CopyToClipBoard txt={username} />
          </td>
        </tr>
        <tr>
          <td>
            <b>password</b>
          </td>
          <td data-testid="passwordCell">{password}</td>
          <td>
            <CopyToClipBoard txt={password} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

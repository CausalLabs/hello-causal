import { useEffect, useState } from "react";

function CopyToClipBoard({ txt }: { txt: string }) {
  const [state, setState] = useState<"copy" | "copied">("copy");
  useEffect(() => {
    if (state == "copied") {
      const id = setTimeout(() => {
        setState("copy");
      }, 1000);
      return () => {
        clearTimeout(id);
      };
    }
  });

  return (
    <a
      onClick={() => {
        navigator.clipboard.writeText(txt);
        setState("copied");
      }}
    >
      {state == "copy" ? "copy to clipboard" : "copied!"}
    </a>
  );
}

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
          <td>{username}</td>
          <td>
            <CopyToClipBoard txt={username} />
          </td>
        </tr>
        <tr>
          <td>
            <b>password</b>
          </td>
          <td>{password}</td>
          <td>
            <CopyToClipBoard txt={password} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

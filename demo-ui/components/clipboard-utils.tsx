import { useEffect, useState } from "react";

import { CheckIcon, CopyIcon } from "@chakra-ui/icons";

export function CopyToClipBoard({ txt }: { txt: string }) {
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
      style={{ cursor: "pointer" }}
      onClick={() => {
        navigator.clipboard.writeText(txt);
        setState("copied");
      }}
    >
      {state == "copy" ? <CopyIcon /> : <CheckIcon />}
    </a>
  );
}

export function CopyableCodeBlock({ txt }: { txt: string }) {
  return (
    <div style={{ display: "flex" }}>
      <code>{txt}</code>
      <span style={{ marginLeft: "-22px", marginTop: "9px" }}>
        <CopyToClipBoard txt={txt} />
      </span>
    </div>
  );
}

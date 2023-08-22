import { useEffect, useState } from "react";

import {
  DocumentDuplicateIcon as CopyIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

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
      {state == "copy" ? (
        <CopyIcon className="h-6 w-6" />
      ) : (
        <CheckIcon className="h-6 w-6" />
      )}
    </a>
  );
}

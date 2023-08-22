import React, { useEffect, useRef } from "react";
import { CopyToClipBoard } from "../CopyToClipboard/CopyToClipboard";

export function CodeBlock({
  code,
  language,
  copyControl,
  asSpan,
  className,
  ...preAttributes
}: {
  code: string;
  language:
    | "graphql"
    | "tsx"
    | "bash"
    | "typescript"
    | "javascript"
    | "sql"
    | "command"
    | "none";

  copyControl?: boolean;
  asSpan?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  const preRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  const Box = asSpan ? "span" : "div";
  const flex = asSpan ? "inline-flex " : "flex ";
  const padding = asSpan ? "p-1 " : "p-4 ";

  useEffect(() => {
    if (preRef.current != null && codeRef.current != null) {
      async function doImport() {
        const m = await import("prismjs");

        m.languages.command = {
          command: {
            pattern: /(?:^\s*)(\.\/)((\w|-|\/)+)(\s*)/,
            greedy: true,
          },
          "option-argument": {
            pattern: /(--(\w|-)+)(\s+)(?!:--)(\w(\w|-|\/|\.)*)?/,
            inside: {
              option: {
                pattern: /(--(\w|-)+)/,
                greedy: true,
              },
              argument: {
                pattern: /(\s+.*)/,
                greedy: true,
              },
            },
            greedy: true,
          },
          file: {
            pattern: /[\w/-]+\.\w+$/,
            greedy: true,
          },
        };

        await import("prismjs/components/prism-bash");
        await import("prismjs/components/prism-javascript");
        await import("prismjs/components/prism-jsx");
        await import("prismjs/components/prism-typescript");
        await import("prismjs/components/prism-tsx");
        await import("prismjs/components/prism-graphql");
        await import("prismjs/components/prism-sql");

        if (preRef.current != null && codeRef.current != null)
          m.default.highlightElement(codeRef.current);
      }
      doImport();
    }
  }, [preRef.current, codeRef.current]);

  const computedClassName = "code language-${language} ";

  const codeBlock = (
    <Box
      ref={preRef}
      className={computedClassName}
      style={{
        width: "100%",
        fontFamily: "Roboto Mono",
        fontSize: "14px",
        whiteSpace: "pre-wrap",
      }}
      {...preAttributes}
    >
      <Box ref={codeRef} className={`language-${language}`}>
        {code}
      </Box>
    </Box>
  );

  return (
    <Box
      className={
        flex +
        padding +
        "code-block items-start rounded-md border border-gray-300 bg-gray-100 " +
        (className ?? "")
      }
    >
      {codeBlock}
      {copyControl && <CopyToClipBoard txt={code} />}
    </Box>
  );
}

export function CodeSpan({
  code,
  language,
  className,
  ...preAttributes
}: {
  code: string;
  language?:
    | "graphql"
    | "tsx"
    | "bash"
    | "typescript"
    | "javascript"
    | "sql"
    | "command"
    | "none";

  copyControl?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <CodeBlock
      code={code}
      language={language ?? "none"}
      asSpan={true}
      className={className}
      {...preAttributes}
    />
  );
}

import { ReactNode, useEffect, useState } from "react";

/**
 * A component that only renders child components on the client side
 */
export function ClientOnly({ children }: { children?: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}

"use client";

/* Lazy boundary for the chat assistant: a floating widget that is not part
   of first paint, so its code leaves the homepage's initial JS and loads
   after hydration instead. Rendered output is unchanged once loaded. */

import dynamic from "next/dynamic";

const Assistant = dynamic(() => import("./Assistant"), { ssr: false });

export default function AssistantLazy() {
  return <Assistant />;
}

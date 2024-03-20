import React from "react";

import TopBar from "@/components/TopBar";
import NewVisitorForm from "@/components/NewVisitorForm";

export default function Home() {
  return (
    <main>
      <TopBar />
      <div>
        <NewVisitorForm />
      </div>
    </main>
  );
}

import React from "react";

import TopBar from "@/components/TopBar";
import NewVisitorForm from "@/components/NewVisitorForm";
import VisitorList from "@/components/VisitorList";

export default function Home() {
  return (
    <div>
      <TopBar />
      <main className="flex flex-row flex-wrap p-6 gap-6 justify-center">
        <NewVisitorForm />
        <div>
          <h1>Visitor list</h1>
          <VisitorList />
        </div>
      </main>
    </div>
  );
}

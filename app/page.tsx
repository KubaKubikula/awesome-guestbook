import React from "react";

import TopBar from "@/components/TopBar";
import NewVisitorForm from "@/components/NewVisitorForm";
import VisitorList from "@/components/VisitorList";
import NoticeBar from "@/components/NoticeBar";

export default function Home() {
  return (
    <div>
      <NoticeBar />
      <TopBar />
      <main className="flex flex-col lg:flex-row p-6 gap-6 justify-center">
        <NewVisitorForm />
        <VisitorList />
      </main>
    </div>
  );
}

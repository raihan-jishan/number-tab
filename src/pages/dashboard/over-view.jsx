import React, { useContext, useEffect } from "react";
import { OverViewCard } from "../../components/ui/card";
import { DashHeading } from "../../components/ui/heading";
import { Context } from "../../utils/index";

const OverView = () => {
  const context = useContext(Context);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
  }, []);

  const totalContacts = notes.length;

  const businessCount = notes.filter(
    (note) => note.tag?.toLowerCase() === "business"
  ).length;

  const personalCount = notes.filter(
    (note) => note.tag?.toLowerCase() === "personal"
  ).length;

  return (
    <div>
      <DashHeading label="Overview" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <OverViewCard
          Icon={"https://cdn-icons-png.flaticon.com/128/647/647857.png"}
          status=""
          label={` Total ${totalContacts} ${totalContacts !== 1 ? "" : ""}`}
        />
        <OverViewCard
          Icon={"https://cdn-icons-png.flaticon.com/128/12617/12617999.png"}
          status=""
          label={`Personal ${personalCount} ${personalCount !== 1 ? "s" : ""}`}
        />
        <OverViewCard
          Icon={"https://cdn-icons-png.flaticon.com/128/1478/1478927.png"}
          status=""
          label={`Business ${businessCount} ${businessCount !== 1 ? "s" : ""}`}
        />
      </div>
    </div>
  );
};

export default OverView;

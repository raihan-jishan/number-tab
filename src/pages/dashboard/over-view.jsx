import React, { useEffect, useContext } from "react";
import { AddContact, Chart } from "../../components/ui/chart";
import noteContext from "../../context/noteContext";
import { User } from "lucide-react";
import { Heart } from "lucide-react";
import { HeartHandshake } from "lucide-react";
import { useState } from "react";

const OverView = () => {
  const [favContacts, setFavContacts] = useState(0);
  const { notes, getNotes } = useContext(noteContext);

  useEffect(() => {
    getNotes(); 
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavContacts(storedFavourites.length);  
  }, [getNotes]);

  const all_contact = notes.length;  ((item)  => item.favourite === true).length;

  return (
    <div className="grid grid-cols-3">
      <Chart
        label="All Contacts: "
        value={all_contact}
        icon={<User size={60} strokeWidth={2} className="text-green-200" />}
      />
      <Chart
        label="Favourite: "
        value={favContacts}
        icon={<HeartHandshake size={60} strokeWidth={2} className="text-green-200" />}
      />
      <AddContact />
    </div>
  );
};

export default OverView;

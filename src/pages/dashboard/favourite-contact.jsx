import React, { useContext, useEffect, useState } from "react";
import GroupImage from "../../assets/undraw_group-selfie_145x.svg";
import Dashboard_Layout from "../../components/dash-layout";
import { DashHero } from "../../components/Hero";
import { NumberCard } from "../../components/ui/card";
import { DashHeading } from "../../components/ui/heading";
import { Context } from "../../utils/index";

function FavouriteContact() {
  const { notes, getNotes } = useContext(Context);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getNotes(); // Fetch contacts from backend
  }, []);

  useEffect(() => {
    const savedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites); // Load favourite IDs
  }, []);

  if (!notes) {
    return <p className="text-center mt-10">Loading contacts...</p>;
  }

  if (notes.length === 0) {
    return <p className="text-center mt-10">No contacts available.</p>;
  }

  const favouriteContacts = notes.filter((note) =>
    favourites.includes(note._id)
  );

  return (
    <Dashboard_Layout>
      {/* ✅ Show DashHero only if no favourite contacts exist */}
      {favouriteContacts.length === 0 && (
        <DashHero
          label={"Your Favourite Contacts"}
          btnText={"Add favourite contact"}
          image={GroupImage}
        />
      )}
      {favouriteContacts.length > 0 ? (
        <DashHeading label={"Your favourite contact  "} textLeftMedium />
      ) : null}
      <div className="m-4 grid gap-6 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {favouriteContacts.length > 0 ? (
          favouriteContacts.map((contact) => (
            <NumberCard
              key={contact._id}
              label={contact.title}
              number={contact.description}
              type={contact.tag}
              location={new Date(contact.date).toLocaleDateString()}
              isFavourite={true}
              onToggleFavourite={() => {}}
            />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600 dark:text-gray-300 mt-6">
            No favourite contacts yet. ⭐ Add some from the main contacts page.
          </p>
        )}
      </div>
    </Dashboard_Layout>
  );
}

export default FavouriteContact;

import React, { useContext, useEffect, useState } from "react";
import GroupImage from "../../assets/undraw_group-selfie_145x.svg";
import Dashboard_Layout from "../../components/dash-layout";
import { DashHero } from "../../components/Hero";
import { Context } from "../../utils/index";
import { ContactCard } from "../../components/ui/card";
import BottomNav from "../../components/shared/bottomNav";

function FavouriteContact() {
  const { notes, getNotes } = useContext(Context);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getNotes(); // Fetch contacts from backend
  }, []);

  useEffect(() => {
    const savedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
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
  const deleteFavourite = (id) => {
    const updatedFavourites = favourites.filter((favId) => favId !== id);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <Dashboard_Layout>
      {favouriteContacts.length === 0 && (
        <DashHero 
          label={"Not Saved"}
          path={"/add-contact"}
          image={GroupImage}
        />
      )}
      {favouriteContacts.length > 0 ? (
        <h1 className="capitalize text-3xl font-semibold ml-10 ">Favourite</h1>
      ) : null}
      <div className="grid grid-cols-3 max-lg:grid-cols-1 mt-5">
        {favouriteContacts.length > 0 ? (
          favouriteContacts.map((contact) => (
            // show table
            <>
              <ContactCard
                key={contact._id}
                label={contact.title}
                phone={contact.description}
                desciption={contact.tag}
                favourites={favourites}
                note={contact}
                deleteFavourite={deleteFavourite}
                hideEditOptions
              />
            </>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600 dark:text-gray-300 mt-6">
            No favourite contacts yet. ⭐ Add some from the main contacts page.
          </p>
        )}
        <BottomNav />
      </div>
    </Dashboard_Layout>
  );
}

export default FavouriteContact;

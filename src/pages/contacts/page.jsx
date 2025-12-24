import React, { useState, useEffect, useContext } from "react";
import { SearchBar } from "../../components/ui/search";
import { FilePlusIcon, SearchIcon, X, Archive, Phone, Book } from "lucide-react";
import NoteContext from "../../context/noteContext";
import { Input } from "../../components/ui/input.jsx";
import { FaUserEdit } from "react-icons/fa";
import { AddBtn } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { ContactCard } from "../../components/ui/card.jsx";
import BottomNav from "../../components/shared/bottomNav.jsx";
import bgDesign from "../../assets/bg-design.jpeg";

const Savednotess = () => {
  const { notes, getNotes, deleteNote, editNote } = useContext(NoteContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [favourites, setFavourites] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes(
        notes.filter(
          (note) =>
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, notes]);

  const toggleFavourite = (id) => {
    const newFavourites = favourites.includes(id)
      ? favourites.filter((favId) => favId !== id)
      : [...favourites, id];

    setFavourites(newFavourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  };

  const startEditing = (note) => {
    setIsEditing(true);
    setCurrentNote(note);
  };

  const handleEditNote = (e) => {
    e.preventDefault();
    const { title, description, tag } = e.target.elements;
    editNote(currentNote._id, title.value, description.value, tag.value);
    setIsEditing(false);
    setCurrentNote(null);
  };

  const handleDeleteClick = (note) => {
    setNoteToDelete(note);
    setShowDeleteModal(true);
  };

  const handleDeleteNote = () => {
    deleteNote(noteToDelete._id);
    setShowDeleteModal(false);
    setNoteToDelete(null);
  };

  const openSearch = () => setSearch(true);
  const closeSearch = () => setSearch(false);

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${bgDesign})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
      }}
    >
   
      <div className="absolute inset-0 bg-Primary/80 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div
          className={`${
            search ? "flex-col" : "flex"
          } items-center justify-between mb-6 sticky top-0 bg-Primary/90 backdrop-blur`}
        >
          <h1 className="text-3xl font-semibold text-gray-200">
            {!search && "All Notes"}
          </h1>

          <div className="flex items-center gap-4 relative">
            {search ? (
              <div className="flex items-center w-full max-w-[300px] relative">
                <SearchBar
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-10"
                />
                <X
                  size={28}
                  onClick={closeSearch}
                  className="absolute right-2 top-2 cursor-pointer text-gray-300 hover:text-white"
                />
              </div>
            ) : (
              <SearchIcon
                size={28}
                onClick={openSearch}
                className="cursor-pointer text-gray-400 hover:text-white"
              />
            )}

            {!search && (
              <Link
                to="/add-contact"
                className="bg-green-50 text-black p-2 rounded-lg hover:bg-green-50/90"
              >
                <FilePlusIcon size={22} />
              </Link>
            )}
          </div>
        </div>

        {/* Edit Modal */}
        {isEditing && currentNote && (
          <form
            onSubmit={handleEditNote}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <div className="bg-Primary p-8 rounded-lg w-full max-w-lg">
              <h2 className="text-2xl text-white mb-6">Edit Note</h2>

              <Input
                name="title"
                label="Name"
                icon={<FaUserEdit />}
                defaultValue={currentNote.title}
              />
              <Input
                name="description"
                label="Number"
                icon={<Phone size={18} />}
                defaultValue={currentNote.description}
              />
              <Input
                name="tag"
                label="Description"
                icon={<Book size={18} />}
                defaultValue={currentNote.tag}
              />

              <div className="mt-6 flex justify-center">
                <AddBtn
                  label="Save Changes"
                  iconLeft={<Archive size={18} />}
                  roundedMedium
                />
              </div>
            </div>
          </form>
        )}

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-Primary p-6 rounded-lg max-w-md w-full">
              <h2 className="text-xl text-green-100 mb-4">Delete Contact</h2>
              <p className="text-gray-400 mb-6">
                Are you sure you want to delete this contact?
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-green-50 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteNote}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notes Grid */}
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-1">
          {filteredNotes.length ? (
            filteredNotes.map((item) => (
              <ContactCard
                key={item._id}
                label={item.title}
                phone={item.description}
                desciption={item.tag}
                note={item}
                handleDeleteClick={handleDeleteClick}
                favourites={favourites}
                toggleFavourite={toggleFavourite}
                startEditing={startEditing}
              />
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-4">
              No notes found
            </p>
          )}
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default Savednotess;

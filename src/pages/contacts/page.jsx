import React, { useState, useEffect, useContext } from "react";
import { SearchBar } from "../../components/ui/search";
import { FilePlusIcon, Trash2, Pencil } from "lucide-react";
import { Heart, ListPlus } from "lucide-react";
import NoteContext from "../../context/noteContext";
import {Input} from '../../components/ui/input.jsx';
import { FaUserEdit } from "react-icons/fa";
import { Phone } from "lucide-react";
import { Book } from "lucide-react";
import { AddBtn } from "../../components/ui/button";
import { Archive } from "lucide-react";
import { Link } from "react-router-dom";

const Savednotess = () => {
  // Use context to get the notes and functions
  const { notes, getNotes, deleteNote, editNote } = useContext(NoteContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [favourites, setFavourites] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // To track editing state
  const [currentNote, setCurrentNote] = useState(null); // To store the note currently being edited
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for delete confirmation modal
  const [noteToDelete, setNoteToDelete] = useState(null); // Store the note to be deleted

  useEffect(() => {
    // Fetch the notes when the component mounts
    getNotes();
  }, [getNotes]);

  useEffect(() => {
    // Filter notes based on search term
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

  // Toggle favourite for a note
  const toggleFavourite = (id) => {
    const newFavourites = favourites.includes(id)
      ? favourites.filter((favId) => favId !== id)
      : [...favourites, id];

    setFavourites(newFavourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites)); // Persist in localStorage
  };

  // Start editing a note
  const startEditing = (note) => {
    setIsEditing(true);
    setCurrentNote(note);
  };

  // Handle saving the edited note
  const handleEditNote = (e) => {
    e.preventDefault();
    const { title, description, tag } = e.target.elements;
    editNote(currentNote._id, title.value, description.value, tag.value);
    setIsEditing(false);
    setCurrentNote(null);
  };

  // Open delete confirmation modal
  const handleDeleteClick = (note) => {
    setNoteToDelete(note);
    setShowDeleteModal(true); // Show the modal
  };

  // Handle the delete action
  const handleDeleteNote = () => {
    deleteNote(noteToDelete._id); // Delete the note from context
    setShowDeleteModal(false); // Close the modal
    setNoteToDelete(null); // Reset the noteToDelete state
  };

  // Cancel the delete action
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setNoteToDelete(null);
  };

  return (
    <div className="p-6 bg-Primary min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="capitalize text-3xl font-semibold text-gray-200">
          All Notes
        </h1>

        <div className="flex items-center gap-4">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link
            to={"/add-contact"}
            className="bg-green-50 hover:bg-green-50/90 text-black p-2 rounded-lg transition   "
          >
            <FilePlusIcon size={22} />
          </Link>
        </div>
      </div>

      {/* Edit Form */}
      {isEditing && currentNote && (
        <form
          onSubmit={handleEditNote}
          className="bg-Primary p-8 rounded-lg shadow-lg max-w-lg mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full sm:w-auto"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Edit Note</h2>
          <div className="mb-6">
            <Input
              type="text"
              label={"Name"}
              icon={<FaUserEdit />}
              name="title"
              defaultValue={currentNote.title}
              className="w-full p-4 rounded-lg bg-gray-800 text-white mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-6">
            <Input
              type="text"
              label={"Number"}
              icon={<Phone size={20} />}
              name="description"
              defaultValue={currentNote.description}
              className="w-full p-4 rounded-lg bg-gray-800 text-white mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter description"
            />
          </div>
          <div className="mb-6">
            <Input
              type="text"
              name="tag"
              label={"description"}
              icon={<Book size={20} />}
              defaultValue={currentNote.tag}
              className="w-full p-4 rounded-lg bg-gray-800 text-white mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter description"
            />
          </div>
          <div className="flex items-center justify-center">
            <AddBtn
              label={"Save Changes"}
              iconLeft={<Archive size={20} className="text-gray-900" />}
              roundedMedium
            />
          </div>
        </form>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-60">
          <div className="bg-Primary p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-semibold text-green-100 mb-4">
              Delete Note
            </h2>
            <p className="text-gray-400 mb-6">
              Are you sure you want to delete this contact? This action cannot
              be undone.
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-green-50 text-gray-800 rounded-lg hover:bg-green-50/90 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteNote}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-600/90 font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto bg-Primary rounded-xl shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-green-400 text-black text-sm uppercase">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Details</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note) => (
                <tr
                  key={note._id}
                  className="border-b hover:bg-Primary/20 transition"
                >
                  <td className="px-6 py-4 font-medium font-Manrope tracking-wide text-gray-100 text-lg">
                    {note.title}
                  </td>
                  <td className="px-6 py-4 text-gray-300 font-Inter">
                    {note.description}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{note.tag}</td>
                  <td className="px-6 py-4 flex items-center justify-center gap-4">
                    {/* Edit Button */}
                    <button
                      onClick={() => startEditing(note)}
                      className="text-green-100 hover:scale-[0.9]"
                    >
                      <Pencil size={18} />
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteClick(note)} // Open modal
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>

                    {/* Favourite Button */}
                    <button
                      onClick={() => toggleFavourite(note._id)}
                      className={`${
                        favourites.includes(note._id)
                          ? "text-red-600"
                          : "text-green-100"
                      } hover:scale-[0.9]`}
                    >
                      <Heart strokeWidth={2} />
                    </button>

                    {/* Add to List Button */}
                    <button className="text-green-100 hover:scale-[0.9]">
                      <ListPlus strokeWidth={2} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-10 text-gray-500">
                  No notes found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Savednotess;

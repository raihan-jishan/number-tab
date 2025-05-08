import React, { useContext, useEffect, useState } from "react";
import Illustation from '../assets/undraw_not-found_6bgl.svg';
import { DashHero } from "../components/Hero.jsx";
import { NumberCard } from "../components/ui/card.jsx";
import GridOptions from "../components/ui/grid-options.jsx";
import TopBar from "../components/ui/top-bars.jsx";
import { AppLayout, Context, Login } from "../utils/index.jsx";
import { useScrollDetection } from "../utils/utils.jsx";
const Numbers = () => {
  const scrolled = useScrollDetection();
  const [searchTerm, setSearchTerm] = useState("");
  const [showGridOptions, setShowGridOptions] = useState(false);
  const [gridLayout, setGridLayout] = useState("row");
  const [activePanel, setActivePanel] = useState(null);

  const { notes, getNotes } = useContext(Context);

  // New state for Favourites
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  // Load favourites from localStorage
  useEffect(() => {
    const savedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  // Save favourites to localStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((favId) => favId !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };

  if (!notes) return <p className="text-center mt-10">Loading...</p>;

  const filteredData =
    !searchTerm || searchTerm.trim() === ""
      ? notes
      : notes.filter(
          (note) =>
            note.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.description
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            note.tag?.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handlePanelOpen = (type) => {
    setActivePanel(type);
    setShowGridOptions(type === "grid");
  };

  const handlePanelClose = () => {
    setActivePanel(null);
    setShowGridOptions(false);
    setSearchTerm("");
  };

  const handleGridLayout = (layout) => setGridLayout(layout);

  const gridClass =
    gridLayout === "double"
      ? "grid-cols-2"
      : gridLayout === "row"
      ? "grid-cols-3"
      : "grid-cols-4";

  return (
    <>
      {notes.length === 0 ? (
        <div>
          <DashHero 
          label={'No Contact Was  Saved'}
          btnText={'Save contact now'}
          image={Illustation}
          path={'/addnumbers'}
          />
        </div>
      ) : (
        <div>
          {localStorage.getItem("token") ? (
            <AppLayout className="bg-gray-50 dark:bg-bgColor">
              <TopBar
                label={"Saved contacts"}
                scrolled={scrolled}
                activePanel={activePanel}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handlePanelOpen={handlePanelOpen}
              />

              <GridOptions
                show={activePanel === "grid"}
                showGridOptions={showGridOptions}
                handleGridLayout={handleGridLayout}
                handleClose={handlePanelClose}
              />
              {/* grid card  data  */}
              <div
                className={`m-4 grid gap-10 mb-4 mt-[7rem] ${
                  gridClass || "grid-cols-3"
                } max-lg:grid-cols-1 max-sm:flex-col max-sm:gap-3`}
              >
                {filteredData.length > 0
                  ? filteredData.map((data) => (
                      <NumberCard
                        key={data._id}
                        label={data.title}
                        number={data.description}
                        type={data.tag}
                        location={new Date(data.date).toLocaleDateString()}
                        isFavourite={favourites.includes(data._id)} // 🔥 pass favourite state
                        onToggleFavourite={() => toggleFavourite(data._id)} // 🔥 handle click
                      />
                    ))
                  : 'No matching contact found!'}
              </div>
            </AppLayout>
          ) : (
            <>
              <Login />
               
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Numbers;

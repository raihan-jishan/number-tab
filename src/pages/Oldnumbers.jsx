import { useState } from "react";
import { NumberCard } from "../components/ui/card.jsx";
import GridOptions from "../components/ui/grid-options.jsx";
import TopBar from "../components/ui/top-bars.jsx";
import { AppLayout, NumberData } from "../utils/index.jsx";
import { filterNumberData, useScrollDetection } from "../utils/utils.jsx";

const Oldnumbers = () => {
  const scrolled = useScrollDetection();
  const [searchTerm, setSearchTerm] = useState("");
  const [showGridOptions, setShowGridOptions] = useState(false);
  const [gridLayout, setGridLayout] = useState("row");
  const [activePanel, setActivePanel] = useState(null); // 'grid' | 'filter' | null

  const filteredData = filterNumberData(NumberData, searchTerm);

  const handlePanelOpen = (type) => {
    if (type === null) {
      setActivePanel(null);
      setShowGridOptions(false);
    } else {
      setActivePanel(type);
      setShowGridOptions(true);
    }
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
    <AppLayout className={"bg-gray-50 dark:bg-bgColor"}>
      <TopBar
        scrolled={scrolled}
        activePanel={activePanel}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handlePanelOpen={handlePanelOpen}
        label={'Old contacts'}
      />

      <GridOptions
        show={activePanel === "grid"}
        showGridOptions={showGridOptions}
        handleGridLayout={handleGridLayout}
        handleClose={handlePanelClose}
      />

      <div
        className={`m-4 grid gap-10 mb-4 mt-24 ${
          gridClass || "grid-cols-3"
        } max-lg:grid-cols-1 max-sm:flex-col max-sm:gap-3`}
      >
        {filteredData.map((data, index) => (
          <NumberCard
            key={index}
            label={data.name}
            number={data.number}
            type={data.type}
            location={data.location}
          />
        ))}
        {filteredData.length === 0 && (
          <p className="text-center col-span-3 text-gray-600 dark:text-gray-300">
            No matching contacts found.
          </p>
        )}
      </div>
    </AppLayout>
  );
};

export default Oldnumbers;

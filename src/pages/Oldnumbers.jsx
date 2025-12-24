import { useEffect, useState } from "react";
import bgDesign from "../assets/bg-design.jpeg";
import { SearchBar } from "../components/ui/search";
import { oldContacts } from "../Data/Data";
import { ContactCard } from "../components/ui/card";
import BottomNav from "../components/shared/bottomNav";

const Oldnumbers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(oldContacts);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredContacts(oldContacts);
    } else {
      const lower = searchTerm.toLowerCase();

      setFilteredContacts(
        oldContacts.filter(
          (item) =>
            item.name.toLowerCase().includes(lower) ||
            item.number.includes(lower) ||
            item.type?.toLowerCase().includes(lower) ||
            item.location?.toLowerCase().includes(lower)
        )
      );
    }
  }, [searchTerm]);

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
        <div className="flex items-center justify-between mb-6 sticky top-0 bg-Primary/90 backdrop-blur">
          <h1 className="text-2xl font-semibold text-gray-200">
            Old Contact
          </h1>

          <div className="w-full max-w-[300px]">
            <SearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search contact..."
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-1">
          {filteredContacts.length ? (
            filteredContacts.map((item) => (
              <ContactCard
                key={item.id}
                label={item.name}
                phone={item.number}
                desciption={`${item.type || ""} ${item.location || ""}`}
              />
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-400">
              No contacts found
            </p>
          )}
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default Oldnumbers;

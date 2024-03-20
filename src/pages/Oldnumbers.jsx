import { MdOutlineLibraryBooks } from "react-icons/md";
import { AppLayout, Card, NumberData, Typography } from "../modules/index.jsx";
const Oldnumbers = () => {
  return (
    <AppLayout>
      <Typography
        name={"All Oldnumbers"}
        icon={<MdOutlineLibraryBooks size={40} />}
      />
      <div
        className="m-4   grid grid-cols-3 gap-10 mb-4 mt-5 max-lg:grid-cols-1
        max-sm:flex-col max-sm:gap-3 "
      >
        {NumberData.map((data) => {
          return (
            <Card
              key={data.id}
              name={data.name}
              number={data.number}
              type={data.type ? data.type : "not found!"}
            />
          );
        })}
      </div>
    </AppLayout>
  );
};
export default Oldnumbers;

import { AppLayout, Card, NumberData, Typography } from "../utils/index.jsx";

const Oldnumbers = () => {
  return (
    <AppLayout>
      <Typography name={"  Old Numbers"} fontSize={"text-[2.2rem]"} />

      <div
        className="m-4   grid grid-cols-3 gap-10 mb-4 mt-7 max-lg:grid-cols-1
        max-sm:flex-col max-sm:gap-3 "
      >
        {NumberData.map((data) => {
          return (
            <Card
              key={data.id}
              name={data.name}
              number={data.number}
              type={data.type ? data.type : null}
            />
          );
        })}
      </div>
    </AppLayout>
  );
};
export default Oldnumbers;

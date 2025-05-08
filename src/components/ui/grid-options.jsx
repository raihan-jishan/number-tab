import { BsGrid1X2 } from "react-icons/bs";
import { CiGrid31 } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { TagQuery } from "./query-options";

const GridOptions = ({
  show,
  showGridOptions,
  handleGridLayout,
  handleClose,
}) => {
  return (
    show && (
      <div
        className={`
          fixed top-0 left-0 w-full z-50 p-4 shadow-lg transition-all duration-300 ease-in-out
          ${
            showGridOptions
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }
          bg-white dark:bg-gray-900
        `}
      >
        <h4 className="font-bold text-lg mb-2">Choose Grid Layout</h4>
        <div className="flex gap-4">
          <TagQuery
            label={"compact"}
            handelClick={() => {
              handleGridLayout("fouth");
              handleClose();
            }}
            icon={<IoGridOutline size={25} />}
            varient={"grid-options"}
          />

          <TagQuery
            label={"Default"}
            handelClick={() => {
              handleGridLayout("row");
              handleClose();
            }}
            icon={<CiGrid31 size={25} />}
            varient={"grid-options"}
          />

          <TagQuery
            label={"spacious"}
            handelClick={() => {
              handleGridLayout("double");
              handleClose();
            }}
            icon={<BsGrid1X2 size={25} />}
            varient={"grid-options"}
          />
        </div>
      </div>
    )
  );
};

export default GridOptions;

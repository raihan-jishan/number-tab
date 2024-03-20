import { GoHash } from "react-icons/go";
const Brand = () => {
  return (
    <div>
        <a
            href=""
            className="flex items-center space-x-0 rtl:space-x-reverse text-gray-700 dark:text-gray-300 "
          >
             <GoHash size={35}/>
            <span className="self-center text-[1.3rem] font-bold whitespace-nowrap ">
              NumberTab  
            </span>
          </a>
    </div>
  )
}

export default Brand;
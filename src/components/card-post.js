import { CiMenuKebab } from "react-icons/ci";

const CardPost = ({
  title,
  body,
  isDropdownOpen,
  toggleDropdown,
  onDelete,
  onEdit,
  onViewDetails,
  onViewQuickDetails,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl uppercase font-bold text-pretty">{title}</h3>
        <button
          onClick={toggleDropdown}
          className="text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <CiMenuKebab size={20} />
        </button>
      </div>
      {isDropdownOpen && (
        <div className="absolute right-4 w-48 bg-white border rounded shadow-lg z-10">
          <ul>
            <button
              onClick={onEdit}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left"
            >
              Delete
            </button>
            <button
              onClick={onViewQuickDetails}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left"
            >
              Quick View
            </button>
            <button
              onClick={onViewDetails}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left"
            >
              View Details
            </button>
          </ul>
        </div>
      )}
      <p className="text-gray-700 text-justify capitalize leading-relaxed">
        {body}
      </p>
    </div>
  );
};

export default CardPost;

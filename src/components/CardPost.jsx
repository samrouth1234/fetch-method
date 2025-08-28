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
    <div className="relative rounded-lg border bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-pretty text-xl font-bold uppercase">{title}</h3>
        <button
          onClick={toggleDropdown}
          className="cursor-pointer text-gray-500 hover:text-gray-800"
        >
          <CiMenuKebab size={20} />
        </button>
      </div>
      {isDropdownOpen && (
        <div className="absolute right-4 z-10 w-48 rounded border bg-white shadow-lg">
          <ul>
            <button
              onClick={onEdit}
              className="w-full cursor-pointer px-4 py-2 text-left hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="w-full cursor-pointer px-4 py-2 text-left hover:bg-gray-100"
            >
              Delete
            </button>
            <button
              onClick={onViewQuickDetails}
              className="w-full cursor-pointer px-4 py-2 text-left hover:bg-gray-100"
            >
              Quick View
            </button>
            <button
              onClick={onViewDetails}
              className="w-full cursor-pointer px-4 py-2 text-left hover:bg-gray-100"
            >
              View Details
            </button>
          </ul>
        </div>
      )}
      <p className="text-justify capitalize leading-relaxed text-gray-700">
        {body}
      </p>
    </div>
  );
};

export default CardPost;

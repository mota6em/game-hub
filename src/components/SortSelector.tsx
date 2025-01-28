function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
interface Props {
  onSelectSort: (order: string) => void;
  selectedSort: string;
}
const SortSelector = ({ onSelectSort, selectedSort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-added", label: "Date added" },
    { value: "-updated", label: "Updated" },
    { value: "-rating", label: "Average rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  const currentSortOrders = sortOrders.find(
    (order) => order.value === selectedSort
  )?.label;
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Order by: {currentSortOrders}
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {sortOrders.map((order) => (
          <li
            key={order.value}
            onClick={() => onSelectSort(order.value)}
            className=" dropdown-item btn"
          >
            {capitalizeFirstLetter(order.label)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortSelector;

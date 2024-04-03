const Dropdown = ({ id, label, options, placeholder, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1">
        {label}
      </label>
      <select
        id={id}
        className="w-full border rounded-md px-3 py-2"
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

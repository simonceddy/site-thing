function PartSelectInput({
  value, options = [], onChange, className
}) {
  return (
    <select
      value={value || ''}
      onChange={onChange}
      className={`${className} bg-black text-lime-400 italic font-mono p-1 border-2 rounded border-green-600 focus:border-blue-400 text-sm`}
    >
      {options.map(({ key, name }) => (
        <option
          key={`neck-pickup-selector-${key}-option`}
          value={key}
          label={name}
        />
      ))}
    </select>
  );
}

export default PartSelectInput;

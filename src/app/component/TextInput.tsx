type InputProps = {
	type: string;
	name: string;
	placeholder?: string;
	label?: string;
	value?: string | number;
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	reference?: React.RefObject<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({
	label,
	type,
	name,
	placeholder,
	value,
	onChange,
	reference,
	className,
}) => (
	<div className={"relative mb-6 mt-4 max-w-md" + " " + className}>
		<label
			className="block bg-indigo-700-100 text-black-800 text-md font-medium mb-1 items-center justify-center rounded-lg px-3"
			htmlFor={name}
		>
			{label}
		</label>
		<input
			ref={reference}
			name={name}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={`form-input w-full text-gray-900 placeholder-gray-300 border rounded-xl border-gray-400 bg-gray-50 text-lg p-2.5`}
		/>
	</div>
);

export default Input;

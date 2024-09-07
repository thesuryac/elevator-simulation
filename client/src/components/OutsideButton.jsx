import { useState } from "react";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
const OutsideButton = ({ currentFloor }) => {
	const [is1Selected, setIs1Selected] = useState(false);
	const [is2Selected, setIs2Selected] = useState(false);
	return (
		<div className="text-white  flex flex-col gap-10 justify-center items-center">
			<button
				disabled={currentFloor == 4}
				className={`text-9xl ${
					is2Selected
						? "text-yellow-300 cursor-default border-yellow-300"
						: ""
				} border-4  rounded-full `}
				onClick={() => setIs2Selected(true)}
			>
				<FaCaretUp className="-translate-y-1" />
			</button>

			<button
				disabled={currentFloor == 0}
				className={`text-9xl ${
					is1Selected
						? "text-yellow-300 cursor-default border-yellow-300 "
						: ""
				} border-4  rounded-full `}
				onClick={() => setIs1Selected(true)}
			>
				<FaCaretDown className="-translate-y-1" />
			</button>
		</div>
	);
};

export default OutsideButton;

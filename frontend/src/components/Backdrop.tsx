interface Props {
	show: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Backdrop = ({ show, setIsOpen }: Props) => {
	const closeSidebar = () => {
		setIsOpen(false);
	};
	return show ? (
		<div
			className='fixed top-0 left-0 z-20 h-screen w-full bg-black/50 '
			onClick={closeSidebar}
		></div>
	) : null;
};

export default Backdrop;

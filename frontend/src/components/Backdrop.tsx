import { ISideDrawer } from './SideDrawer';

const Backdrop = ({ show }: ISideDrawer) => {
	return show ? <div className='fixed top-0 left-0 z-20 h-screen w-full bg-black/50 '></div> : null;
};

export default Backdrop;

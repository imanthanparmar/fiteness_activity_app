import { PropsWithChildren } from 'react';
import Sidenav from 'shared/components/navigation/sidenav';

const Layout: React.FC<PropsWithChildren> = (props) => {
	return (
		<div id='wrapper'>
			<div id='page-wrapper' className='full--width'>
			<Sidenav/>
				{props.children}
			</div>
		</div>
	);
};

export default Layout;

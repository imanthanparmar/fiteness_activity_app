import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';
import DashboardContainer from 'features/dashboard/container/dashboardContainer';

const App: React.FC = () => {
		return (
			<Layout>
				<Routes>
					<Route path='/dashboard' element={<DashboardContainer/>} />
				</Routes>
			</Layout>
		);
};

export default App;

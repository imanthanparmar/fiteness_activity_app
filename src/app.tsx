import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';
import DashboardContainer from 'features/dashboard/container/dashboardContainer';
import ActivityContainer from 'features/activity/container/activityContainer';

const App: React.FC = () => {
		return (
			<Layout>
				<Routes>
					<Route path='/dashboard' element={<DashboardContainer/>} />
					<Route path='/activities/:id' element={<ActivityContainer/>} />
				</Routes>
			</Layout>
		);
};

export default App;

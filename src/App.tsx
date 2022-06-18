import { lazy } from 'solid-js';
import type { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

const Home = lazy(() => import('./pages/Home'));

const App: Component = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export default App;

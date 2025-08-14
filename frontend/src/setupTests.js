import '@testing-library/jest-dom';

// Mock global do TextEncoder para Jest
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

// Mock global do fetch
global.fetch = jest.fn(() =>
	Promise.resolve({
		ok: true,
		json: () => Promise.resolve([]),
	})
);

// Mock do react-router-dom com Link/NavLink compatíveis
jest.mock('react-router-dom', () => {
	const React = require('react');
	const toHref = (to) => (typeof to === 'string' ? to : (to && to.pathname) || '#');
	const evalClassName = (className, isActive) =>
		typeof className === 'function' ? className({ isActive }) : className;

	return {
		useNavigate: () => jest.fn(),
		useLocation: () => ({ pathname: '/', search: '', hash: '', state: null }),
		Link: ({ children, to, className, ...rest }) => (
			<a href={toHref(to)} className={evalClassName(className, false)} {...rest}>
				{children}
			</a>
		),
		NavLink: ({ children, to, end, className, ...rest }) => (
			<a href={toHref(to)} className={evalClassName(className, false)} {...rest}>
				{children}
			</a>
		),
		BrowserRouter: ({ children }) => <div>{children}</div>,
		Routes: ({ children }) => <div>{children}</div>,
		Route: ({ children }) => <div>{children}</div>,
	};
});

// Mock do axios
jest.mock('axios', () => ({
	get: jest.fn(),
	post: jest.fn(),
	put: jest.fn(),
	delete: jest.fn(),
	create: jest.fn(() => ({
		get: jest.fn(),
		post: jest.fn(),
		put: jest.fn(),
		delete: jest.fn(),
		defaults: { baseURL: 'http://localhost:3000', timeout: 10000 },
		interceptors: {
			request: { use: jest.fn() },
			response: { use: jest.fn() },
		},
	})),
}));

// Mock do OngList
jest.mock('./Components/OngList', () => {
	return function MockOngList() {
		return <div data-testid="ong-list">ONG List Mock</div>;
	};
});

// Mock do OngDetailModal
jest.mock('./Components/OngDetailModal', () => {
	return function MockOngDetailModal() {
		return <div data-testid="ong-detail-modal">ONG Detail Modal Mock</div>;
	};
});

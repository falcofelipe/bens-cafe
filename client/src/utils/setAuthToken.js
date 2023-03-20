import axios from 'axios';

const setAuthToken = (token) => {
	if (token) {
		console.log('Setting token...', token);
		axios.defaults.headers.common['x-auth-token'] = token;
		localStorage.setItem('token', token);
	} else {
		console.log('Deleting token...', token);
		delete axios.defaults.headers.common['x-auth-token'];
		localStorage.removeItem('token');
	}
};

export default setAuthToken;

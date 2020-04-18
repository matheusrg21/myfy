import Api from './api';

const AlbumsService = {
	index: () =>
		Api.get('/dashboard', {
			headers: {
				'Content-Type': 'application/json',
				'Accept-Header': 'application/json'
			}
		})
};

export default AlbumsService;

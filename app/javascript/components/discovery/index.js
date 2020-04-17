import React, { Fragment } from 'react';
import Album from '../album';
import styled from 'styled-components';
import { Columns, Heading } from 'react-bulma-components';

const DivSpaced = styled.div`
	margin-top: 50px;
	margin-bottom: 20px;
`;

const Discovery = () => {
	const albums_mock = [
		{
			id: 1,
			title: 'Rave Pump it',
			artist_name: 'DJ GBR',
			cover_url:
				'/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--732ea99a50b59f6bd7db69d43078d5406ae3da84/pump_it.jpg'
		},
		{
			id: 2,
			artist_name: 'Andrew Howes',
			title: 'The Great Bear',
			cover_url:
				'/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f74e4224869091781c2060ace785d043cc0ac996/the_great_bear.jpg'
		},
		{
			id: 3,
			artist_name: 'Yellow Chair',
			title: 'Barcelona',
			cover_url:
				'/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--157ca4ca0bb18696f8b77334d4f10a0b738eabc7/barcelona.jpg'
		},
		{
			id: 4,
			artist_name: 'Andrew Howes',
			title: 'Gubernator',
			cover_url:
				'/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--66e899663883fe732ae636c1d22c4478528723f6/gubernator.jpg'
		}
	];

	const albums = albums_mock.map((album, key) => (
		<Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
			<Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id} />
		</Columns.Column>
	));
	return (
		<Fragment>
			<div>
				<Heading className="has-text-white" size={4}>
					Tocadas recentemente
				</Heading>
				<Columns className="is-mobile">{albums}</Columns>
			</div>

			<DivSpaced>
				<Heading className="has-text-white" size={4}>
					Recomendadas
				</Heading>
				<Columns className="is-mobile">{albums}</Columns>
			</DivSpaced>
		</Fragment>
	);
};
export default Discovery;

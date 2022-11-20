import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './Search.scss';
import 'instantsearch.css/themes/satellite.css';

const searchClient = algoliasearch(
	process.env.REACT_APP_ALGOLIA_APP_ID,
	process.env.REACT_APP_ALGOLIA_APP_KEY,
);

const Search = ({ onMissionSelected }) => {
	const Hit = ({ hit }) => (
		<Link
			to={`/mission/id=${hit.flight_number}`}
			onClick={() => onMissionSelected(hit.flight_number)}
		>
			<div className="hit-wrapper">
				<div>
					<img src={hit.links.mission_patch_small} alt={hit.mission_name} />
				</div>
				<div>
					<h3>{hit.mission_name}</h3>
					<p>{hit.details}</p>
				</div>
			</div>
		</Link>
	);

	return (
		<Container>
			<InstantSearch searchClient={searchClient} indexName="spacex_missions">
				<h1 className="mt-3 mb-3">SpaceX Missions Search</h1>
				<SearchBox className="mb-3" />
				<Hits hitComponent={Hit} />
			</InstantSearch>
		</Container>
	);
};

export default Search;

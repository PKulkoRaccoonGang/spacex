import { useSelector, useDispatch } from 'react-redux';
import { useAuthenticate } from '../../../../hooks/useAuthenticate';
import { onChange } from '../../../../store/slices/userBarSlice';

import { Button } from 'react-bootstrap';
import ImageUploading from 'react-images-uploading';

import './UserBar.scss';

const UserBar = () => {
	const { email } = useAuthenticate();
	const images = useSelector((state) => state.userBar.images);
	const dispatch = useDispatch();

	const addPhoto = (imageList) => dispatch(onChange(imageList));

	return (
		<div className="user-bar">
			<ImageUploading onChange={addPhoto} dataURLKey="data_url" value={null}>
				{({ onImageUpload, imageList }) => (
					<>
						{imageList && (
							<img
								className="user-bar__image mb-3"
								src={images[0]?.data_url}
								alt="User avatar"
							/>
						)}
						<h3 className="user-bar__user-name mb-2">Peter Kulko</h3>
						<div className="user-bar__email mb-3">
							Email:
							<a href={'mailto:' + email}> {email}</a>
						</div>
						<Button onClick={onImageUpload} variant="primary">
							Upload profile image
						</Button>
					</>
				)}
			</ImageUploading>
		</div>
	);
};

export default UserBar;

import React, { useState } from 'react';
import './Astronaut.scss';
import { Button } from 'react-bootstrap';

export interface IUploadAndDisplayImage {
	stateLinksArray: [
		astronaut: {
			name: string;
			position: string;
			photo: string;
		},
	];
	handleInputChange: Function;
	index: number;
}

const UploadAndDisplayImage = ({
	handleInputChange,
	index,
	stateLinksArray,
}: IUploadAndDisplayImage) => {
	const [selectedImage, setSelectedImage] = useState<null>(null);

	return (
		<div>
			{selectedImage && (
				<div className="text-center">
					<img
						className="custom__mission-img mb-2"
						alt="astronaut"
						src={URL.createObjectURL(selectedImage)}
					/>
					<Button
						className="w-100 mb-2"
						variant="primary"
						onClick={() => setSelectedImage(null)}
					>
						Remove
					</Button>
				</div>
			)}
			<input
				type="file"
				name="photo"
				onChange={(e) => {
					// @ts-ignore
					setSelectedImage(e.target.files[0]);
					handleInputChange(e, index, stateLinksArray);
				}}
			/>
		</div>
	);
};

export default UploadAndDisplayImage;

import { Container } from 'react-bootstrap';

import { FaCheckCircle } from 'react-icons/fa';
import mainImg from '../../../../images/main.jpeg';
import './Main.scss';

const Main = () => (
	<section className="main__section">
		<Container>
			<div className="main__section-items">
				<div className="main__section-item">
					<h1 className="main__section-item--title animate__animated animate__fadeInLeft">
						SPACE-X MISSIONS
					</h1>
					<p className="main__section-item--text animate__animated animate__fadeInUp">
						SpaceX is an American aerospace manufacturer, a provider of space
						space transportation services, and a communications corporation
						headquartered in Hawthorne, California.
					</p>
					<ul className="main__section-item--benefits animate__animated animate__fadeInUp">
						<li className="main__section-item--benefit">
							<div className="main__section-item--benefit-icon">
								<FaCheckCircle />
							</div>
							<span className="main__section-item--benefit-description">
								Starlink space mission
							</span>
						</li>
						<li className="main__section-item--benefit">
							<div className="main__section-item--benefit-icon">
								<FaCheckCircle />
							</div>
							<span className="main__section-item--benefit-description">
								NROL-87 mission
							</span>
						</li>
						<li className="main__section-item--benefit">
							<div className="main__section-item--benefit-icon">
								<FaCheckCircle />
							</div>
							<span className="main__section-item--benefit-description">
								Falcon heavy rocket
							</span>
						</li>
					</ul>
				</div>
				<div className="main__section-item">
					<div className="main__section-item--image animate__animated animate__fadeInRight">
						<img src={mainImg} alt="Space X" />
					</div>
				</div>
			</div>
		</Container>
	</section>
);

export default Main;

import React from 'react';
import PropTypes from 'prop-types';
import {
	Document,
	Page,
	Text,
	Image,
	StyleSheet,
	View,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizonal: 35,
		backgroundColor: '#eff5fe',
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 20,
		color: '#0d6efd',
		textDecoration: 'underline',
	},
	text: {
		fontSize: 14,
		textAlign: 'justify',
		fontFamily: 'Times-Roman',
	},
	image: {
		marginHorizontal: 100,
		width: 50,
		height: 50,
	},
	astronaut: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	pageNumber: {
		position: 'absolute',
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey',
	},
});

export interface IPDFReport {
	astronautsList: [
		astronaut: {
			name: string;
			position: string;
			photo: string;
		},
	];
}

const PDFReport = ({ astronautsList }: IPDFReport) => (
	<Document>
		<Page size="A4" style={styles.body}>
			<View>
				<Text style={styles.title}>Custom mission report:</Text>
			</View>
			{astronautsList?.map((astronaut, index) => (
				<View key={index} style={styles.astronaut}>
					<View>
						<Image style={styles.image} src={astronaut.photo} />
					</View>
					<View>
						<Text style={styles.text}>Name: {astronaut.name}</Text>
						<Text style={styles.text}>Position: {astronaut.position}</Text>
					</View>
				</View>
			))}
			<Text
				style={styles.pageNumber}
				render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
				fixed
			/>
		</Page>
	</Document>
);

PDFReport.propTypes = {
	astronautsList: PropTypes.array.isRequired,
};

export default PDFReport;

/**
 * External dependencies
 */
import Chart from 'react-apexcharts';

/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';

domReady( () => {
	// get all the instances of the Block on the Page
	const charts = document.querySelectorAll(
		'.wp-block-jsadvancers-data-visualisation'
	);

	// Loop over the blocks to get each one () => {

	charts.forEach( ( chart ) => {
		// get the Chart Type from the dataset
		const chartType = chart.dataset.chartType;

		// get the chartColors from the Dataset
		// make chartColors an array
		const chartColors = chart.dataset.chartColors.split( ' ' );

		const options = {
			chart: {
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			/* set Chart Colors Here */
			colors: chartColors,
			stroke: {
				curve: 'smooth',
			},

			xaxis: {
				type: 'datetime',
				categories: [
					'2018-09-19T00:00:00',
					'2018-09-19T01:30:00',
					'2018-09-19T02:30:00',
					'2018-09-19T03:30:00',
					'2018-09-19T04:30:00',
					'2018-09-19T05:30:00',
					'2018-09-19T06:30:00',
				],
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm',
				},
			},
		};

		const series = [
			{
				name: 'series1',
				data: [ 31, 40, 28, 51, 42, 109, 100 ],
			},
			{
				name: 'series2',
				data: [ 11, 32, 45, 32, 34, 52, 41 ],
			},
		];

		// Render the component on top of the block
		render(
			<Chart
				options={ options }
				series={ series }
				/* Set Chart Type here */
				type={ chartType }
				width={ 500 }
				height={ 320 }
			/>,
			chart
		);
	} );
} );

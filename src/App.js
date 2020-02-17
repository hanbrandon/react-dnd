import React, { Component } from 'react';
import './App.css';
import ImgContianer from './ImgContainer';
import { arrayMove } from 'react-sortable-hoc';
import Button from '@material-ui/core/Button';

class App extends Component {
	state = {
		images: [ 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300' ]
	};

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState({ images: arrayMove(this.state.images, oldIndex, newIndex) });
	};

	handleChange = (selectorFiles: FileList) => {
		console.log(selectorFiles);
	};

	render() {
		return (
			<div>
				<input
					accept='image/*'
					className='button'
					id='contained-button-file'
					multiple
					type='file'
					onChange={(e) => this.handleChange(e.target.files)}
				/>
				<label htmlFor='contained-button-file'>
					<Button variant='contained' color='primary' component='span'>
						Upload
					</Button>
				</label>
				<ImgContianer images={this.state.images} onSortEnd={this.onSortEnd} />
			</div>
		);
	}
}

export default App;

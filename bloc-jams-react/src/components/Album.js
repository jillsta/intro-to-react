import React, { Component } from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

=======
>>>>>>> HW-5-Album

class Album extends Component {
	constructor(props) {
		super(props);
		const album = albumData.find( album => {
			return album.slug === this.props.match.params.slug
		});

<<<<<<< HEAD
		console.log("ALBUM: ", album);

		this.state = {
			album: album
=======
		this.state = {
			album: album,
>>>>>>> HW-5-Album
		};
	}



	render() {
		return (
			<section className="album">
				<section id="album-info">
					<img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
					<div className="album-details">
						<h1 id="album-title">{this.state.album.title}</h1>
						<h2 className="artist">{this.state.album.artist}</h2>
						<div id="release-info">{this.state.album.releaseInfo}</div>
					</div>
				</section>
				<table id="song-list">
					<colgroup>
						<col id="song-number-column" />
						<col id="song-title-column" />
						<col id="song-duration-column" />
					</colgroup>
					<tbody>
<<<<<<< HEAD
					{
					this.state.album.songs.map( (song, index) => 
							<div key = { index } >
								<div>
									<tr id="song-index"> {index} </tr>
									<tr id="song-title">{song.title}</tr>
									<tr id="song-duration">{song.duration}</tr>
									<tr id="song-audioSrc">{song.audioSrc}</tr>
								</div>
							</div>							
=======
				{
					this.state.album.songs.map((song, index) =>
						<div key={index} >
							<div>
								<tr id="song-index">{index + 1}</tr>
								<tr id="song-title">{song.title}</tr>
								<tr id="song-duration">{song.duration}</tr>
								<tr id="song-audioSrc">{song.audioSrc}</tr>
							</div>	
						</div>						
>>>>>>> HW-5-Album
						)
					}
					</tbody>
				</table>
			</section>	
			);
	}
}

export default Album;
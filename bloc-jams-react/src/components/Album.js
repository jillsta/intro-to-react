import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
	constructor(props) {
		super(props);
		//<section className="album">
		const album = albumData.find( album => {
			return album.slug === this.props.match.params.slug
		});

		const songs = albumData.find( songs => {
			return album.songs == this.props.match.params.song 
		});

		this.state = {
			album: album,
			songs: songs
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
				{
					this.state.songs.map( (song, index) =>
						<Link to={`/album/${album.songs}`} key={index}/>
							<div>
								<tr key=1 id="song-title">{this.state.songs.title}</tr>
								<tr key=2 id="song-duration">{this.state.songs.duration}</tr>
								<tr key=3 id="song-audioSrc">{this.state.songs.audioSrc}</tr>
							</div>	
						</Link>						
						)
				}
					</tbody>
				</table>
			</section>	
			);
	}
}

export default Album;
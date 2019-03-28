import React from 'react';

class EditPlayer extends React.Component {
	

	constructor(props) {
		super(props);

		this.state = {
			currentPlayer: {},

		};
	}

	componentDidMount() {

        try {
            const playerJSON = localStorage.getItem('players');
            const players = JSON.parse(playerJSON);

           for (let i = 0; i < players.length; i++) {
           		if (players[i].id === this.props.match.params.userid) {
           			this.setState((prevState) => ({
           				currentPlayer: players[i]
           			}));
           		}
           }
        } catch (e) {
            // No action required.
        }
    }


	render () {
		return (
			<div>
				<h1>Edit Player: {this.state.currentPlayer.name}</h1>
				<p>
					Player Information: <br/>
					Gender: {this.state.currentPlayer.gender} <br/>
					Message: {this.state.currentPlayer.message} <br/>
				</p>
			</div>
		)
	}
}

export default EditPlayer;
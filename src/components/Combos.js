import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import itemData from '../utils/item_data';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Combos.scss';
import {
	// Item,
	ComboItem,
	ComboSpotlight,
	DetailedComboItem,
	// ToggleSwitch,
	// DetailToggle,
	// ComboInventory,
} from '../components';
import {toggleComboDetails} from '../modules/items';
// import Inventory from './Inventory';

class Combos extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleDetailToggle = () => {
		// event.preventDefault();
		this.props.toggleComboDetails();
	};

	render() {
		const {
			// combos,
			// inventory,
			unique,
			comboInventory,
		} = this.props;

		// Sort so goal combos are at the beginning of the list
		unique.sort((a,b)=>{
			const aGoal = this.props.goals[a];
			const bGoal = this.props.goals[b];
			return bGoal-aGoal;
		})
		return (
			<section className={classNames('combos flex justify-center items-start px-4 pt-12 pb-16', this.props.className)}>
				{/* <DetailToggle/> */}

				{unique.length > 0 || comboInventory.length > 0 ? (
					<React.Fragment>
						{this.props.showComboDetails === true ? (
							<div className='detailed-combos-container row-container items-container'>
								{unique.map((pair, index) => {
									const split = pair.split('_');
									return <DetailedComboItem className='' item1={split[0]} item2={split[1]} key={'unique-' + index} />;
								})}

								{/* Blank elements to align last row of grid */}
								<div className='detailed-container' />
								<div className='detailed-container' />
								<div className='detailed-container' />
							</div>
						) : (
							<div className='row-container items-container flex flex-row justify-center m-auto'>
								{unique.map((pair, index) => {
									const split = pair.split('_');
									return <ComboItem className='' item1={split[0]} item2={split[1]} key={'unique-' + index} />;
								})}
							</div>
						)}
					</React.Fragment>
				) : (
					<p className='sec-placeholder'>Possible Combinations</p>
				)}

				<p className='sec-title eyebrow'>Combos</p>
				<ComboSpotlight />
			</section>
		);
	}
}

const mapStateToProps = state => ({
	// combos : state.items.combos,
	// unique : state.items.unique,
	...state.items,
	goals: state.goals,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			toggleComboDetails,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Combos);

// Combos.defaultProps = {};
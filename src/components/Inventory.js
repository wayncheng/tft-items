import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import itemData from '../utils/item_data';
import classNames from 'classnames';
// import './Inventory.scss';
import {Item} from '../components';

class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {inventory, ingredient1, ingredient2, ingredients} = this.props;
		// console.log('inventory --->',inventory);
		return (
			<section
				className={classNames(
					'inventory items-row',
					'relative flex flex-row flex-wrap justify-center',
					this.props.className,
					{
						// 'empty-inv' : inventory.length === 0,
					},
				)}
			>
				<h3 className='sec-title eyebrow'>Inventory</h3>
				<div
					className={classNames('items-container flex-row justify-center m-auto flex-wrap', {
						'combo-hovered' : this.props.hoveringCombo,
					})}
				>
					{inventory.map((item_id, index) => {
						return (
							<Item
								action='remove'
								className={classNames('inv-item')}
								inv_index={index}
								item_id={item_id}
								key={'inv-item-' + index}
							/>
						);
					})}
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	// inventory: state.items.inventory,
	...state.items,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);

Inventory.defaultProps = {
	inventory : [],
};
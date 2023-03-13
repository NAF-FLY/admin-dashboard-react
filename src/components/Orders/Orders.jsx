import { groupNumber, ordersData } from '../../data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
import style from './Orders.module.css'

const Orders = () => {
	return (
		<div className={`${style.container} theme-container`}>
			<div className={style.head}>
				<img src='./logo.png' alt='logo' />
				<span>Orders today</span>
			</div>

			<div className={`grey-container ${style.stat}`}>
				<span>Amount</span>
				<span>$ {groupNumber(4560)}</span>
			</div>

			<div className={style.orders}>
				{ordersData.map((order, index) => (
					<div key={index} className={style.order}>
						<div>
							<span>{order.name}</span>
							<span>$ {order.change}</span>
						</div>
						<div>
							<span>{order.type}</span>
							<span>Items: {order.items}</span>
						</div>
					</div>
				))}
			</div>

			<div className={style.orderChart}>
				<span>Split by orders</span>
				<OrdersPieChart />
			</div>
		</div>
	)
}
export default Orders

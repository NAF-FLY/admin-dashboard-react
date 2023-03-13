import Statistic from '../../components/Statistic/Statistic'
import { cardsData, groupNumber } from '../../data'
import style from './Dashboard.module.css'

const Dashboard = () => {
	return (
		<div className={style.container}>
			{/* {left side} */}
			<div className={style.dashboard}>
				<div className={`${style.dashboardHead} theme-container`}>
					<div className={style.head}>
						<span>Dashboard</span>
						<div className={style.durationButton}>
							<select>
								<option value=''>1 week</option>
								<option value=''>1 month</option>
								<option value=''>1 year</option>
							</select>
						</div>
					</div>
					<div className={style.cards}>
						{cardsData.map((card, index) => (
							<div className={style.card}>
								<div className={style.cardHead}>
									<span>{card.title}</span>
									<span>+{card.change}</span>
								</div>
								<div className={style.cardAmount}>
									<span>$</span>
									<span>{groupNumber(card.amount)}</span>
								</div>
							</div>
						))}
					</div>
				</div>
				<Statistic />
			</div>
			<div className={style.orders}>orders</div>
		</div>
	)
}

export default Dashboard

import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import style from './Statistic.module.css'

const Statistic = () => {
	return (
		<div className={`${style.container} theme-container`}>
			<span className={style.title}>Overview Statistics</span>

			<div className={`${style.cards} grey-container`}>
				<div>
					<div className={style.arrowIcon}>
						<BsArrowUpShort />
					</div>

					<div className={style.card}>
						<span>Top item this month</span>
						<span>Office comps</span>
					</div>
				</div>

				<div className={style.card}>
					<span>Items</span>
					<span>$ {groupNumber(455)}</span>
				</div>

				<div className={style.card}>
					<span>Profit</span>
					<span>$ {groupNumber(370000)}</span>
				</div>

				<div className={style.card}>
					<span>Daily Average</span>
					<span>$ {groupNumber(2000)}</span>
				</div>
			</div>
		</div>
	)
}

export default Statistic

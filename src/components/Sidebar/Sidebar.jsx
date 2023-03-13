import { AiFillCalendar, AiOutlineTable } from 'react-icons/ai'
import { FaTasks } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import style from './Sidebar.module.css'

const Sidebar = () => {
	return (
		<div className={style.container}>
			<img src='./logo.png' alt='logo' className={style.logo} />
			<div className={style.menu}>
				<NavLink to='dashboard' className={style.item} title='Dashboard'>
					<MdSpaceDashboard size={30} />
				</NavLink>
				<NavLink to='calendar' className={style.item} title='Calendar'>
					<AiFillCalendar size={30} />
				</NavLink>
				<NavLink to='board' className={style.item} title='Trello Board'>
					<FaTasks size={30} />
				</NavLink>
				<NavLink to='users' className={style.item} title='Users'>
					<AiOutlineTable size={30} />
				</NavLink>
			</div>
		</div>
	)
}

export default Sidebar
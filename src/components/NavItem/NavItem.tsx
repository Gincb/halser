export type Props = {
  text?: string;
  icon?: React.ReactElement
  position: string | 'top' | 'bottom'
  onClick?: () => void
  active?: boolean
}

function NavItem(props: Props) {
  return (
    <li className='nav-item' onClick={props.onClick}>
      {props.position === 'top' ? <p>{props.text}</p> : props.icon}
      {props.position === 'top' ? <span className={`nav-item_line ${props.active ? 'nav-item_line_active' : ''}`}></span>:''}
    </li>
  )
}

export default NavItem

export type Props = {
  text?: string;
  icon?: React.ReactElement
  position: string | 'top' | 'bottom'
}

function NavItem(props: Props) {
  return (
    <li className='nav-item'>
      {props.position === 'top' ? props.text : props.icon}
    </li>
  )
}

export default NavItem

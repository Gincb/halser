export type Props = {
  buttonText: string
  buttonClass?: string
  onClick?: ()=>void
}

function Button(props: Props) {
  return (
    <button className={props.buttonClass ? props.buttonClass : 'button'} onClick={props.onClick}>
      {props.buttonText}
    </button>
  )
}

export default Button;

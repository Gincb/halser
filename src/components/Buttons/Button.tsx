export type Props = {
  buttonText: string
  buttonClass?: string
}

function Button(props: Props) {
  return (
    <button className={`button ${props.buttonClass}`}>
      {props.buttonText}
    </button>
  )
}

export default Button;

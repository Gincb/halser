export type Props = {
  className?: string
}

function Email(props: Props) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g data-name="Layer 5" id="Layer_5">
        <path className="cls-1" d="M45.61,18.94a18.64,18.64,0,1,1-4.74-3.57" />
        <polyline
          className="cls-1"
          points="35.53 39.53 21.78 39.53 21.78 24.28 42.53 24.28 42.53 39.53 38.78 39.53"
        />
        <polyline
          className="cls-1"
          points="28.59 36.53 28.59 31.91 35.71 31.91 35.71 39.53 28.59 39.53"
        />
        <circle cx="43.52" cy="17.07" r="1" />
      </g>
    </svg>
  )
}

export default Email

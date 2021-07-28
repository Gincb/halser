export type Props = {
  className?: string
}

function Home(props: Props) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 43.91 52.01"
      className={props.className}
    >
      <path
        d="M21,3.74a1.73,1.73,0,0,0-1,.3c-.66.41-8,5.37-18.15,12.19a3.31,3.31,0,0,0-.25.31,2.27,2.27,0,0,0-.2.44v33.9H14.09v-13a5.55,5.55,0,0,1,5.56-5.55h3a5.55,5.55,0,0,1,5.56,5.55v13H40.87V17.26a2.38,2.38,0,0,0-.31-.88,2.34,2.34,0,0,0-.78-.78C29.8,9.09,22.48,4.35,21.83,4A1.68,1.68,0,0,0,21,3.74Z"
        fill="#1a1a1a"
      />
    </svg>
  )
}

export default Home

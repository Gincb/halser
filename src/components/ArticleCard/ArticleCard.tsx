import { useState } from "react"
import Button from "../Buttons/Button"

function ArticleCard() {
  const [clampedText, setClampedText] = useState<string>('article_card_contents');
  const [buttonClose, setButtonClose] = useState<boolean>(false);

  function handleRead() {
    setClampedText('article_card_clamped');
    setButtonClose(true)
  }

  function handleClose() {
    setClampedText('article_card_contents');
    setButtonClose(false)
  }

  return (
    <article className="article_card">
      <div className={clampedText}>
        <img
          src="https://images.unsplash.com/photo-1602760735231-cc51a5633668?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1873&q=80"
          alt="Article image"
        />
        <div className={`${clampedText}_text`}>
          <h1>The spectacle before us was indeed sublime.</h1>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside, the sable cloud beneath was dished out, and
            the car seemed to float in the middle of an immense dark sphere,
            whose upper half was strewn with silver. Looking down into the dark
            gulf below, I could see a ruddy light streaming through a rift in
            the clouds. Dished out, and the car seemed to float in the middle of
            an immense dark sphere, whose upper half was strewn with silver
            looking down there.<br/> Curabitur porta mollis massa. Donec risus nunc,
            facilisis porttitor mauris at, tempor molestie nunc. Aliquam rutrum
            iaculis neque, vel ornare erat ullamcorper quis. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Duis dictum ipsum id pharetra pharetra. Praesent fermentum nisl eget
            arcu congue viverra. Suspendisse auctor enim ac feugiat dapibus.
            Integer sit amet eros fermentum, hendrerit felis eu, rutrum orci.
            Nulla semper tincidunt efficitur.<br/> Ut euismod egestas quam id tempus.
            Donec mattis nunc vitae imperdiet pulvinar. Nam dapibus, dolor at
            maximus vestibulum, nisl ligula pharetra odio, ut malesuada nisl
            ipsum a nisl. Suspendisse molestie tortor sit amet odio lobortis,
            vestibulum elementum velit condimentum. Cras congue dictum lorem, id
            scelerisque sem porta at.<br/> Integer convallis orci malesuada mauris
            suscipit semper. Nunc placerat, diam in laoreet iaculis, urna felis
            fringilla sem, a imperdiet orci justo id eros. Vivamus ut erat nec
            tortor mollis porta eu non nisi. Nulla ac elementum ipsum. Phasellus
            euismod odio libero, eget bibendum leo feugiat nec. Nulla auctor,
            diam vel porta fermentum, mauris mi porttitor magna, nec dictum quam
            arcu eget leo. Aliquam sit amet ipsum et justo malesuada interdum
            vitae ut lorem. Suspendisse tincidunt nunc id orci lobortis maximus.
            Aliquam a mattis justo, id egestas massa. Mauris vitae urna libero.
            Pellentesque hendrerit eget odio in dapibus.
          </p>
          <span>2021 November, 22</span>
          {!buttonClose ? 
          <Button buttonText="Read more" onClick={handleRead}/>
          :
          <Button buttonText="X" buttonClass='button-close' onClick={handleClose}/>
          }
        </div>
      </div>
    </article>
  )
}

export default ArticleCard

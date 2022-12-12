import {useEffect } from 'react'

function RoadMap() {

  useEffect(() => {
    const items = document.querySelectorAll(".item")
  
    const isInViewport = el => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (
          window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  
    const run = () => items.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('show');
      } 
    });
  
    // Events
    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run)

  }, [])

  return (
    <div id="roadmap" className='pt-5 mt-5 position-relative'>
      <div className="roadmap-bg-img">
      </div>
      <div className="row m-0 justify-content-center align-items-center">
        <div className="col-sm-8">
          <h1 className="text-title my-5">Roadmap</h1>
            <div className="timeline">
              <ul className="items">
                <li className="item">
                  <div className="content">
                   <p>To us, the community comes first. The main goal is to make sure your investment and our mint are as successful as possible, to achieve all of our goals. We will also constantly work to release the best value and quality possible. We will announce our drop release date once we are satisfied with the project’s quality and technical parts.</p>
                  </div>
                </li>
                <li className="item">
                  <div className="content">
                    <p>We have teamed up with MoonLanding Media; experts behind dozens of NFT projects & sellouts that’s gonna take the Banana Ballers™️ through out the 🌎 and into the Metaverse ✨</p>
                  </div>
                </li>
                <li className="item">
                  <div className="content">
                    <p>Create an exclusive BallerList that will have first dibs on the Banana Ballers™️ to be minted. We will post the instructions soon on how to get on the exclusive BallerList.</p>
                  </div>
                </li>
                <li className="item">
                  <div className="content">
                    <p>Once mint goes live if your on the Ballers Whitelist List you can mint one Free Banana Baller. Once every Banana Baller is minted, each blessing will be sent to the blessed holders, along with our donations. So go tell your fam!</p>
                  </div>
                </li>
                <li className="item">
                  <div className="content">
                  <p>Do the Griddy dance in the Metaverse.</p>
                  </div>
                </li>
                <li className="item">
                  <div className="content">
                  <p>Partnered with WonderLand to build Banana Beach on Metaverse Island that’s gonna have beach homes for sale, Live DJ’s &amp; Boat Races!</p>
                  </div>
                </li>
              </ul>
            </div>
  
        </div>
      </div>
    </div>
  )
}

export default RoadMap
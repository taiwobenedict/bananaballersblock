import FullSizeRender from '../assets/FullSizeRender.mp4'

function Footer() {
  const video = document.getElementById('myFullSizeRender')
  // video.play()
  return (
    <div id='footer'>
      <div className="h-25">
        <video autoPlay muted loop id="myFullSizeRender" className='w-100 h-25'>
          <source src={FullSizeRender} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Footer
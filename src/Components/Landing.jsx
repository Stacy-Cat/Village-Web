// Desc: Landing page for the app
import '../Styles/Landing.css';
import MainNav from './MainNav';

const Landing = () => {
  return (
    <>
    <div className="main-container">
    <MainNav />
    <div id="leaves">
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i> 

        <h1 className='main-heading'>VILLAGE</h1>
</div>
        <div className='main-content'>
          <p className='main-text'>
            This is the landing page for the Village app. 
          </p>
          <p className='main-text'>
            The app is currently under development.
          </p>
          <p className='main-text'>
            Please check back later for updates.
          </p>
        </div>
</div>
    </>
  )
}

export default Landing
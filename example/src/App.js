import React from 'react'

import { LazyLoad } from 'simple-react-scroll-animation'
import 'simple-react-scroll-animation/dist/index.css'
import { SampleImg } from './assets/images/index'
import { Sample2Img } from './assets/images/index'

const App = () => {
  return (
    <>
      <div className='section section--1'>
        <div className='container'>
          <LazyLoad
            animation='slideLeft'
            distance='200'
            speed='0.5'
            className='text-blue center'
          >
            <h1>Scroll Animations</h1>
          </LazyLoad>

          <LazyLoad
            animation='slideRight'
            distance='200'
            speed='0.5'
            className='text-blue center'
          >
            <p>(please scroll to see animation)</p>
          </LazyLoad>
        </div>
      </div>

      <div className='section section--2'>
        <LazyLoad className='text-yellow center'>
          <h2>Lorem ipsum dolor sit amet</h2>
        </LazyLoad>
        <LazyLoad
          animation='slideUp'
          distance='50'
          className='text-white center'
        >
          <p>(lorem ipsum)</p>
        </LazyLoad>

        <br />

        <div className='container'>
          <div style={{ width: '33%' }}>
            <LazyLoad animation='flip'>
              <img src={SampleImg} className='img' alt='img 1' />
            </LazyLoad>
          </div>
          <div style={{ width: '33%' }}>
            <LazyLoad animation='flip' delay='0.2'>
              <img src={SampleImg} className='img' alt='img 1' />
            </LazyLoad>
          </div>
          <div style={{ width: '33%' }}>
            <LazyLoad animation='flip' delay='0.4'>
              <img src={SampleImg} className='img' alt='img 1' />
            </LazyLoad>
          </div>
        </div>
      </div>

      <div className='section section--3'>
        <div className='container'>
          <div style={{ width: 'calc(60% - 15px)' }}>
            <LazyLoad
              animation='slideLeft'
              distance='200'
              className='text-blue'
            >
              <h2>Lorem ipsum dolor sit amet</h2>
            </LazyLoad>
            <br />
            <LazyLoad animation='slideUp'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                aliquam velit id gravida tempus. Integer quis ex magna. Etiam
                vel volutpat nunc, quis mollis nibh. Nulla dignissim, ipsum sit
                amet vulputate vehicula, turpis mauris malesuada lacus, nec
                pulvinar enim nisl sit amet ex. Cras eu sagittis ligula. Sed nec
                tempor est.
              </p>

              <p>
                Integer condimentum nibh id nunc mattis pulvinar. Nam sit amet
                efficitur quam. Nulla ut sapien vel neque auctor tempor sit amet
                eu risus. Ut sed ipsum sit amet nisi tristique accumsan. Sed id
                sapien ut erat tincidunt aliquam. Aenean vitae nisi vitae metus
                tempor sodales. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Nullam suscipit dolor
                finibus fermentum pulvinar.
              </p>
            </LazyLoad>
          </div>

          <div style={{ width: 'calc(40% - 15px)' }}>
            <LazyLoad animation='flip' delay='0.3'>
              <img src={SampleImg} className='img' alt='img 1' />
            </LazyLoad>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

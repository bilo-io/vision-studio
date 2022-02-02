/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
import helpCreate from 'assets/img/slides/help/slideshows_create.gif'
import helpEdit from 'assets/img/slides/help/slides_edit.gif'
import { DocIndex } from 'components'

export const Guide = (props) => <div className='padded flex-row' style={{ position: 'relative', height: 'calc(100vh - 6rem)' }}>
  <div id='guide'>
    <h4>1. Add a Slideshow</h4>
    <p className='padded'>
      First you will want to create a Slideshow, to present your visualisations.
      <br />
      You can also add the Slideshow to an existing Collection, or create a new one.
    </p>
    <img
      src={helpCreate}
      className='help-gif padded'
    />
    <div className='section-end' />
    <h4>2. Edit a Slideshow</h4>
    <p className='padded'>
      Once you've created a Slideshow, you will can modify some data.
      <br />
      Click on the Slideshow in the explorer on the left panel.
      <br />
      To add slides click 'Edit' in the right panel.
    </p>
    <div className='section-end' />
    <img
      src={helpEdit}
      className='help-gif padded'
    />
    <h4>3. Share a Slideshow</h4>
    <p className='padded'>
      You can share a Slideshow in various ways
      <br />
      Create a public (or private) link to share with peers.
      <br />
      Export it as a PDF (live apps won't reflect)
      <br />
      Cast the Slideshow to a <Link to='/slides/screens/'>Screen</Link> directly, or via a <Link to='/slides/schedules/'>Schedule</Link>
    </p>
    <img
      src={helpEdit}
      className='help-gif padded'
    />
    <div className='section-end' />
  </div>
  <DocIndex headerQuery='#guide>h4' footerQuery='#guide>.section-end' />
</div>

import React from 'react'
import socialStyles from './socials-view.module.css';

class Socials extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><span className={socialStyles.readOnly}></span><span className={[socialStyles.icon, socialStyles.email].push(' ')}></span></li>
        </ul>
      </div>
    )
  }

}



export default Socials;

import React from 'react';
import PropTypes from 'prop-types';
import WorkList from './WorkList';
import HomeHero from './HomeHero';

class HomeView extends React.Component {
  render () {
    return (
      <div className="typeset">
        <HomeHero />
        <WorkList baseline={this.props.baseline} />
      </div>
    );
  }
}

HomeView.propTypes = {

};

export default HomeView;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class TrackList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {
          this.props.tracks.map((track, index) => <div key={index}>Track: {track.title}</div>)
        }
      </div>
    );
  }
}

TrackList.propTypes = {
  tracks: PropTypes.array
}

function mapStateToProps(state) {
  const tracks = state.track;
  return { tracks }
}

export default connect(mapStateToProps)(TrackList);
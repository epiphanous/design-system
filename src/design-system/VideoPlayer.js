import React from 'react';
import ReactPlayer from 'react-player';
import system from '../utils/System';
import Relative from './Relative';
import Box from './Box';

const Player = system('Player', {
  extend: Box,
  as: ReactPlayer,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const VideoPlayer = ({
  src,
  width = 640,
  height = 360,
  autoPlay = false,
  mx = 'auto',
  ...props
}) => (
  <Relative mx={mx} width={width} height={height} {...props}>
    <Player url={src} playing={autoPlay} />
  </Relative>
);

export default VideoPlayer;

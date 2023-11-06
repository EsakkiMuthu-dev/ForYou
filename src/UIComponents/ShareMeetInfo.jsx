import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

const ShareMeetingInfo = ({ peerId }) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const shareMeeting = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join my meeting on For You',
        text: `Please connect on this meeting. My peer ID is ${peerId}`,
        url: window.location.href
      })
        .then(() => console.log('Successfully shared meeting info.'))
        .catch((error) => console.error('Error sharing meeting info:', error));
    }
  };

  return isMobile ? (
    <>
      <ShareIcon onClick={shareMeeting} />
    </>
  ) : null;
};

export default ShareMeetingInfo;

import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

const ShareMeetingInfo = ({ peerId }) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const shareMeeting = () => {
    if (navigator.share) {
      const message = `Hey there! Let's catch up on For You. You can watch YouTube together and have a face-to-face chat. Connect with me using this meeting link. My peer ID is ${peerId}.`;

      navigator.clipboard.writeText(peerId);
      
      navigator.share({
        title: 'Join my meeting on For You',
        text: message,
        
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

import React, { useState } from 'react';

function p404(): JSX.Element {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Loading, SetLoading] = useState("Loading...");

  const handleLoad = (): void => SetLoading('');

  return (
  <>
    {Loading ? Loading : null}
    <img
      src="https://http.cat/404.jpg"
      alt="A http cat"
      style={
        {
          margin: 'auto',
          display: "block",
          width: "60%"
        }
      }
      onLoad={handleLoad}
    />
  </>
  )

};

export default p404;
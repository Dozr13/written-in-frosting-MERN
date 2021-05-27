import React, { createContext, useContext, useState, useEffect } from 'react';

const ViewCtx = createContext({});

const ViewProvider = ({children}) => {
  const [width, setWidth] = useState(window.innerWidth)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)  
  }, [])

  return (
    <ViewCtx.Provider value={{width}}>
      {children}
    </ViewCtx.Provider>
  )
};

// const useView = () => {
//   const {width} = useContext(ViewCtx);
//   return {width};
// };


export default ViewProvider
export const useWindowDimensions = () => useContext(ViewCtx)
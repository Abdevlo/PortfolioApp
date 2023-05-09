// import { Grid } from '@mui/material';
// import { useRef, useEffect } from 'react';
// import './App.css';

// function App() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;

//     const handleWheel = (e) => {
//       const delta = Math.max(-1, Math.min(1, (e.deltaY || -e.wheelDelta || e.detail)));
//       container.scrollLeft -= (delta * 30); // Change this value to adjust the scroll speed
//       e.preventDefault();
//     };

//     container.addEventListener('wheel', handleWheel);

//     return () => {
//       container.removeEventListener('wheel', handleWheel);
//     };
//   }, []);

//   return (
//     <Grid container ref={containerRef} sx={{height:'100vh', width:'100vw', background: 'radial-gradient(circle, rgba(5,5,22,1) 9%, rgba(2,6,33,1) 33%, rgba(11,16,32,1) 78%, rgba(1,1,28,1) 100%)', display: 'block', flexDirection: 'column', overflowX: 'auto', overflowY: 'hidden'}}>
//       <Grid item sx={{width: '100vw', height: '100px', background: 'red', margin: '10px'}} />
//       <Grid item sx={{width: '100vw', height: '100px', background: 'green', margin: '10px'}} />
//       <Grid item sx={{width: '100vw', height: '100px', background: 'blue', margin: '10px'}} />
//     </Grid>
//   );
// }

// export default App;

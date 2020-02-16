// import { Button } from "@material-ui/core";
// import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import { withRouter } from 'react-router';

// const useStyles = makeStyles({});

// function ButtonFactory(props){
//     let onClick = () => {};
//     let hrefUrl = '';
//     let message = null;
//     let history = props.history;

//     const setOnClick = (func) => {
//         onClick = func;
//     }

//     const setHrefUrl = (url) => {
//         hrefUrl = url;
//     } 

//     const setMessage = (mess) => {
//         message = mess;
//     }

//     const classes = useStyles();
//     function buildButton(){
//         // return (
//         //     <Button size="large" color="primary" onClick={onClick} href={hrefUrl}>
//         //         {message}
//         //     </Button>
//         // );
//         return (
//             <Button size="large" color="primary" onClick={() => history.push('./home')}>
//                 Test
//             </Button>
//         );
//     }
    
//     return {setOnClick, setHrefUrl, setMessage, buildButton};

// }

// export default withRouter(ButtonFactory);
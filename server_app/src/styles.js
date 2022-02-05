import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles((theme)=>({
    Apptypography:{
        margin: '0px 10px',
        color:'#01a982',
    },
    
    body:{
        marginTop:'1px'
    },
    header:{
        height:'60px',
        backgroundColor:'#FFFFFF',
    },
    headtitle:{
        color:'#FFFFFF',
        fontWeight: 'bold',
       backgroundColor:'#01a982',
    },
    clusterbtn:{
        width:'200px',
        height:'47px',
        color:'#FFFFFF',
        backgroundColor:'#01a982'
    },
    gridcontainer:{
        marginTop:'30px'
    },
    clusternamestring:{
        color:'#FFFFFF',
        backgroundColor:'#01a982'
    },
    clusternamecontainer:{
        width:'100%',
        marginTop:'10px'
    },
    nodescontainer:{
        marginTop:'20px'
    },
    controlplaneinfo:{
        marginTop:'8px',
    },
    clusterbtns:{
     width:'155px'
    },

    footer:{
        backgroundColor:'#FFFFFF',
    position:'absolute',
    bottom:'0',
    marginBottom:'0',
    width:'100%',
    height:'80px',
    },
    copyright:{
    width:'50%'
    }
}));
export default useStyles;
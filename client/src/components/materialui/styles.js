import { makeStyles } from "@mui/styles";

//The styles for the app are done here
//Import and call the useStyles function to create a classes object, holding all of the css.
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    //backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",

    '&>.MuiGrid-item':{
      paddingLeft:'5rem !important'
    },

    '& .link-item':{
      minWidth:'10rem'
    }
  },

  recipesContainer:{
    width:'48rem',
    margin:'0 auto 5rem',
    border:'1px solid #333'
  },

  recipe:{
    padding:'1rem',

    '&:first-child':{
      paddingLeft:0
    },

    '&:last-child':{
      paddingRight:0
    },

    '&>.img':{
      width:'90%',

      '&>img':{
        //By default, it should be 100%
        maxWidth:'100%'
      }
    }

  }

}));

export default useStyles;

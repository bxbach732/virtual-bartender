import {
  makeStyles
} from "@mui/styles";

//The styles for the app are done here	
//Import and call the useStyles function to create a classes object, holding all of the css.	
const useStyles = makeStyles((theme) => ({
  p: {
    fontSize: '1rem',
  },

  gridContainer: {
    //backgroundColor: "green",	
    justifyContent: "center",
    alignItems: "center",
    '&>.MuiGrid-item': {
      paddingLeft: '5rem !important'
    },
    '& .link-item': {
      minWidth: '10rem'
    }
  },
  recipesContainer: {
    width: '60rem',
    margin: '0 auto 2rem',
    border: '1px solid #333'
  },
  recipe: {
    padding: '1rem',
    '&:first-child': {
      paddingLeft: 20
    },
    '&:last-child': {
      paddingRight: 0
    },
    '&>.img': {
      width: '95%',
      height: '95%',
      '&>img': {
        //By default, it should be 100%	
        maxWidth: '100%'
      }
    }
  },
  showMoreButton: {
    margin: '0 auto 2rem',
    borderRadius: '20px'
  },
}));

export default useStyles;
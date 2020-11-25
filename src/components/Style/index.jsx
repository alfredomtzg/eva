import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color:' #fff',
  },
  menuButton: {
    marginRight: theme.spacing(1),
    textDecoration: 'none',
  },
  title: {
    flexGrow: 1,
  },
  image: {
    maxWidth: 345,
    minWidth: 310,
  },
  media: {
    height: 300,
  },
  justifyContent: {
    justifyContent: "center",
  },
}));

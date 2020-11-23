import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Context} from '../../utils/Context'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    display: 'block',
    flexWrap: 'nowrap',
    // height: '200px',

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  list: {
    height: '100',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));




export default function ImageList() {
  const classes = useStyles();
  const {carruselImage} = useContext(Context)

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {carruselImage.map((item, index) => (
            
          <GridListTile className={classes.list} key={index} >

            <img src={item.image} alt="photos" />
            
            <GridListTileBar
              title={item.date}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.risk}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
          
        ))}
      </GridList>
    </div>
  );
}
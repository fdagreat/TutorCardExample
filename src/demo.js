import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid, ListItem, ListItemAvatar, ListItemText, SvgIcon } from "@mui/material";
import Rating from "@mui/material/Rating";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

const list = [
  "Own analytics ",
  "Chat support",
  "Optimize hashtags",
  "Unlimited users"
];

function CheckIcon(props) {
  return (
    <SvgIcon {...props}>
<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />    </SvgIcon>
  );
}
 


export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  // const [list, setList] = React.useState(initialList);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const Img = styled("img")({
    // margin: "auto",
    paddingRight: "10px",
    // display: "block",
    maxWidth: "75px",
    maxHeight: "75px",
    // paddingTop: '81.25%',
    borderRadius: "50%"
    // margin: '28px'
  });
  const Price = styled("h3")({
    fontSize: 28
  });

  return (
    <Card
      sx={{
        bgcolor: "#EC6607",
        height: "420px",
        width: "280px",
        borderRadius: "8%"
      }}
    >
      {/* <CardHeader
       title="Shrimp and Chorizo Paella"
       subheader="September 14, 2016"
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
       
      /> */}
      <Grid container spacing={2} px={2} pb={1} pt={2} xs={12.8}>
        <Grid item xs={8} >
          <Grid container direction="column" spacing={2} px={2} pt={4}>
            <Typography
              variant="h7"
              align="left"
              fontSize={25}
              fontWeight={400}
              fontFamily={"Roboto"}
              color={"white"}
            >
              20k Tzsh /hr
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Grid>
        </Grid>
        <Grid item xs={4}  pt={0} pr={3} >
          {/* <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar> */}
          <Img
            alt="complex"
            src="https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar-768x768.png"
          />
        </Grid>
      </Grid>

      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      {/* <div> */}
        {/* <CardContent> */}
          {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography> */}
        <Grid container direction="column" spacing={2} pl={4} pt={0}>
          <Typography 
              variant="h7"
              align="left"
              fontSize={30}
              fontWeight={900}
              fontFamily={"Roboto"}
              color={"white"}
              >Anna Joe
          </Typography>
          <Grid pr={2} pt={1}>
          <Typography 
              variant="h7"
              align="left"
              fontSize={15}
              fontWeight={500}
              fontFamily={"Roboto"}
              color={"white"}
              >For most businesses that want to otpimize web queries. also i hae d too fthe foloowing arrow. 
          </Typography>
          </Grid>
          <Grid pr={2} pt={1}>
          <Typography 
              variant="h7"
              align="left"
              fontSize={15}
              fontWeight={500}
              fontFamily={"Roboto"}
              color={"white"}
              lineHeight={17.5}
              >
                {/* <div> */}
                  
                    {list.map(item => (
                      <>
                      {/* <li key={item}>{item}</li> */}
                      <ListItem >
                        <ListItemAvatar>
                        <i class="fas fa-check-circle"></i>
                        {/* <CheckIcon sx={{ color: "#fff" }} /> */}
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={item}
                         
                          />
                      </ListItem></>
                    ))}
                
                {/* </div> */}
          </Typography>
         
          </Grid>

        {/* </CardContent> */}
        </Grid>
      {/* </div> */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}

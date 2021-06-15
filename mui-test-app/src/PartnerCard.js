import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia'
import {Avatar, IconButton} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share'

export default function PartnerCard(props) {

  const { avatarSrc, title, subtitle, description, imgSrc } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={avatarSrc} />
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height: '180px'}} image={imgSrc} />
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}


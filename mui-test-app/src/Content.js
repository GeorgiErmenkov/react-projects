import { Grid } from '@material-ui/core';
import React from 'react';
import PartnerCard from './PartnerCard';

const Content = () => {
    return (
        <Grid container spacing={8}>
            <Grid item xs={12} sm={4}>
                <PartnerCard title="Cloudcart" subtitle='partner'
                    avatarSrc='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                    imgSrc='https://image.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg' />
            </Grid>
            <Grid item xs={12} sm={4}>
                <PartnerCard title="Cloudcart" subtitle='partner'
                    avatarSrc='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                    imgSrc='https://image.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg' />
            </Grid>            <Grid item xs={12} sm={4}>
                <PartnerCard title="Cloudcart" subtitle='partner'
                    avatarSrc='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                    imgSrc='https://image.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg' />
            </Grid>

        </Grid>

    );
};

export default Content;
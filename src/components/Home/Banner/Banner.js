import { Container, Typography } from '@material-ui/core';
import React from 'react';
// import banner1 from '../../../image/banner/banner1.jpg'
// import banner2 from '../../../image/banner/banner2.jpg'
// import banner3 from '../../../image/banner/banner3.jpg'
import Carousel from 'react-material-ui-carousel';

const carouselData = [
    {
        img: "https://www.canadahelps.org/media/14-Creative-Ways-to-Give-Charitably.png",
        titleText: 'Charity Hub',
        slugText: 'Helps People Life and Their Formation',
        textPosition: 'left'
    },
    {
        img: "https://st3.depositphotos.com/1518767/12738/i/950/depositphotos_127380218-stock-photo-volunteers-holding-donation-boxes.jpg",
        titleText: 'We always provide Donate',
        slugText: 'Donate for helpless',
        textPosition: 'center'
    },
    {
        img: "https://png.pngitem.com/pimgs/s/501-5016624_image-result-for-intercultural-diversity-culture-hd-png.png",
        titleText: 'Save the Humanity',
        slugText: 'Charitable giving is the act of giving money',
        textPosition: 'right'
    },
]
const Banner = () => {
    return (
        <Carousel
            animation="slide"
            indicators={false}
        >
            {
                carouselData.map((item, i) => <CarouselItem key={i} item={item} />)
            }
        </Carousel>
    );
};
const CarouselItem = ({ item }) => {
    const { img, titleText, slugText, textPosition } = item
    const bannerStyle = {
        background: `url(${img}),
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))`,
        backgroundBlendMode: 'overlay',
        height: 'calc(100vh - 64px)',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#fff'
    }
    const slugStyle = {
        background: '#202C45',
        display: 'inline-block',
        borderLeft: '3px solid #F2184F',
        borderRight: '3px solid #F2184F',
        borderRadius: 40,
        padding: '0 20px',
        marginBottom: 10,
        fontSize: 'calc(2.5vmax + 20px)'
    }

    return (
        <section style={bannerStyle}>
            <Container style={{ textAlign: textPosition }}>
                <Typography style={{ fontSize: 'calc(5vmax + 30px)' }} variant="h1">{titleText}</Typography>
                <Typography variant="h3" style={slugStyle}>{slugText}</Typography>
                <Typography style={{ fontSize: 'calc(1vmax + 10px)' }} variant="body1">
                Charitable giving is the act of giving money, goods or time to the unfortunate, <br />
                either directly or by means of a charitable trust or other worthy cause.
                </Typography>
            </Container>
        </section>
    )
}
export default Banner;
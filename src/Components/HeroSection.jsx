import React from 'react';
import { Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import heroImg from '../assets/hero_bg.png'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function HeroSection() {
  return (
    <div style={{ margin: "50px 0" }}>
      <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 72 } }}>Your <span style={{ color: '#CF6837' }}>Global Source</span> for Quality</Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 72 } }}>Building and Construction Materials</Typography>
      <Card sx={{ boxShadow: 0, position: 'relative', my: 5 }}>
        <CardMedia />
        <CardContent sx={{ p: 0 }}>
          <img src={heroImg} alt="MATBOOK Hero Image" width={'100%'} />
          <Typography variant='h7'
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              top: 0,
              left: 0,
              width: { xs: '90%', md: '44%' },
              bgcolor: '#555353',
              color: "#fff",
              p: {md:1.8, xs:1},
              borderRadius: 7,
              textAlign: 'center',
              display: 'flex' // Hide on small screens
            }}>
            We are a global procurement agency specializing in premium construction materials, connecting builders with excellence worldwide
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#CF6837',
              boxShadow: 0,
              borderRadius: 7,
              py: {md: "2.5%", xs: 1},
              px: {md: "5.9%", xs: 2},
              textTransform: 'none',
              position: { xs: 'relative', md: 'absolute' },
              right: 0,
              bottom: {xs: 0, md: 30},
              fontSize: {md:24, xs:18},
              fontWeight: 600
            }}
            endIcon={<ArrowOutwardIcon sx={{ fontSize: 'large' }} />}
          >
            Get An Estimate
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default HeroSection;

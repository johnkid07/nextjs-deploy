import { Attractions } from '@mui/icons-material'
import React from 'react'
import Link from 'next/link'
import { Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/attractions`)
    // const res = await fetch('https://cyan-proud-kingfisher.cyclic.app/attractions')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      return res.json()
    }
    



export default async function Page() {
    if (!process.env.NEXT_PUBLIC_API_URL) {
        return null
      }
    
    const data = await getData()
    return (
        <div>
            <Typography variant='h6'>
                Attractions
            </Typography>
            <Grid container spacing={1}>
                {data.map(attractions => (
                    <Grid item key={attractions.id} xs={12} md={4}>
                        <Card >
                            <CardMedia
                                sx={{ height: 140 }}
                                image={attractions.coverimage}
                                title={attractions.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {attractions.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" noWrap>
                                    {attractions.detail}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href={`/attractions/${attractions.id}`}>
                                <Button size="small">Learn More</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>

                ))}
            </Grid>
        </div>
    )
}

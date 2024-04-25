import React from 'react'
import { 
  Container, Card, CardActions, CardContent, CardMedia, Button, Typography
} from '@mui/material';



export async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/attractions/${id}/`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


export default async function page({ params }) {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return null
  }
  const id = params.id
  const data = await getData(id)
  // console.log(data)
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      {
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
          </CardContent>
          <CardMedia
            sx={{ height: 400 }}
            image={data.coverimage}
            title={data.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.detail}
            </Typography>
          </CardContent>
        </Card>
      }
    </Container>
  )
}

'use client'
import { createContext } from 'react'

import * as React from 'react';

import Link from 'next/link';

export default function EntradaBlog(props) {
  return(
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.blog.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.blog.contenido}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Leer mas</Button>
        <Typography sx={{margin: '0 0 0 50px'}}>
          {props.blog.fecha}
        </Typography>
      </CardActions>
    </Card>
  )
}
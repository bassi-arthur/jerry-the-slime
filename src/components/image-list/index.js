import * as React from 'react'
import { ImageListItem } from '@mui/material'
import image1 from '../../assets/images/gallery-img-1.png'
import image2 from '../../assets/images/gallery-img-2.png'
import image3 from '../../assets/images/gallery-img-3.png'

export default function ImageList() {
    return(
        <ImageListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
      
        <ImageListItem sx={{boxShadow: "0px 0px 32px #666", border: '1px solid #000'}}>
          <img
            src={image1}
            srcSet={image1}
            alt={'image1'}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem sx={{boxShadow: "0px 0px 32px #666", border: '1px solid #000'}}>
          <img
            src={image2}
            srcSet={image2}
            alt={'image2'}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem sx={{boxShadow: "0px 0px 32px #666", border: '1px solid #000'}}>
          <img
            src={image3}
            srcSet={image3}
            alt={'image3'}
            loading="lazy"
          />
        </ImageListItem>
    </ImageListItem>
    )
}
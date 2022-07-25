import React from 'react'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiCardContent from '@mui/material/CardContent'
import MuiTypography from '@mui/material/Typography'
import MuiStack from '@mui/material/Stack'
import MuiBox from '@mui/material/Box'
import Tag from '../Tag'

const StyledMuiCard = styled(MuiCard)(({ theme }) => ({
    boxShadow: theme.shadows[ 0 ],
    border: '3px solid #242424',
    borderRadius: 0,
    transition: 'transform 0.6s cubic-bezier(0.2, 1, 0.25, 1)',
    '&:hover': {
      transform: 'translate3d(6px, -6px, 0)',
    },
}))

const StyledMuiCardMedia = styled(MuiCardMedia)(({ theme }) => ({
    borderBottom: '3px solid #242424',
}))

const StyledMuiBox = styled(MuiBox)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
}))

const StyledTag = styled(Tag)({
    backgroundColor: 'red',
})

const Tile = ({ children, ...props }: MuiCardProps) => {
  return (
    <StyledMuiBox>
        <StyledMuiCard {...props} sx={{ maxWidth: 345 }}>
            <StyledMuiCardMedia
                component='img'
                image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
                alt='green iguana'
            />
            <MuiCardContent>
                <MuiTypography gutterBottom variant="h5" component="div">
                    Lizard
                </MuiTypography>
                <MuiTypography variant="body2">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </MuiTypography>
                <MuiStack mt={2} spacing={1} direction={'row'}>
                    <Tag>#tag</Tag>
                    <Tag>#tag</Tag>
                    <Tag>#tag</Tag>
                </MuiStack>
            </MuiCardContent>
            <StyledTag>case study</StyledTag>
        </StyledMuiCard>
    </StyledMuiBox>
  )
}

export default Tile
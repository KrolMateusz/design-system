import React from 'react'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiCardContent from '@mui/material/CardContent'
import MuiTypography from '@mui/material/Typography'
import MuiStack from '@mui/material/Stack'
import MuiBox from '@mui/material/Box'
import Tag from '../Tag'

export interface TileProps extends MuiCardProps {
    /**
      * Title to display in Tile
    */
    title: string;

    /**
      * Description to display in Tile
    */
    description?: string;

    /**
      * Description to display in Tile
    */
    tags: string[];

    /**
      * Description to display in Tile
    */
    image: string;

    /**
      * Description to display in Tile
    */
    alt: string;

    /**
      * Description to display in Tile
    */
    type?: 'case study' | 'article';
}

const StyledMuiCard = styled(MuiCard)(({ theme }) => ({
    position: 'relative',
    boxShadow: theme.shadows[ 0 ],
    border: '3px solid #242424',
    borderRadius: 0,
    transition: 'transform 0.6s cubic-bezier(0.2, 1, 0.25, 1)',
    '&:hover': {
      transform: 'translate3d(6px, -6px, 0)',
    },
    overflow: 'visible'
}))

const StyledMuiCardMedia = styled(MuiCardMedia)(({ theme }) => ({
    borderBottom: '3px solid #242424',
}))

const StyledMuiBox = styled(MuiBox)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
}))

const StyledTag = styled(Tag)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
}))

const StyledTileType = styled(Tag)<Pick<TileProps, 'type'>>(({ theme, type }) => ({
    backgroundColor: type === 'case study' ? theme.palette.primary.main : theme.palette.blue.main,
    color: type === 'case study' ? theme.palette.primary.contrastText : theme.palette.blue.contrastText,
    textTransform: 'uppercase',
    width: 'max-content',
    position: 'absolute',
    top: theme.spacing(1.5),
    left: `-${theme.spacing(1.125)}`,
}))

const Tile = ({ children, title, description, tags, image, alt,  type, ...props }: TileProps) => {
  return (
    <StyledMuiBox>
        <StyledMuiCard {...props} sx={{ maxWidth: 450 }}>
            <StyledMuiCardMedia
                component='img'
                image={image}
                alt={alt}
            />
            <MuiCardContent>
                <MuiTypography gutterBottom variant="h5" component="div">
                    {title}
                </MuiTypography>
                {description && (
                    <MuiTypography variant="body1">
                        {description}
                    </MuiTypography>
                )}
                <MuiStack mt={2} direction={'row'} sx={{ flexWrap: 'wrap' }}>
                    {tags.map((tag) => <StyledTag>{tag}</StyledTag>)}
                </MuiStack>
            </MuiCardContent>
            {type && (
                <StyledTileType>{type}</StyledTileType>
            )}
        </StyledMuiCard>
    </StyledMuiBox>
  )
}

export default Tile
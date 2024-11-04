import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../Data/Data'
import { NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <Layout>
     <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
      {
        MenuList.map(menu =>(
          <Card sx={{maxWidth:'390px',display:"flex",m:2}}>
            <CardActionArea>
              <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name}/>
              <CardContent>
                 <Typography variant='h5' gutterBottom component={'div'} >
                  <NavLink to={'/dosa'}>{menu.name}</NavLink>
                 </Typography>

                 <Typography variant='body2' > 
                  {menu.discription}
                 </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      }
     </Box>

    </Layout>
  )
}

export default Menu
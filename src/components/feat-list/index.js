import * as React from 'react'
import { List, ListItem, ListItemText } from "@mui/material";
import { Stack } from "@mui/system";
import blueSlime from '../../assets/images/Blue_Slime.png'
import blackSlime from '../../assets/images/Black_Slime.png'
import jungleSlime from '../../assets/images/Jungle_Slime.png'
import purpleSlime from '../../assets/images/Purple_Slime.png'
import redSlime from '../../assets/images/Red_Slime.png'
import yellowSlime from '../../assets/images/Yellow_Slime.png'

export default function FeatList() {
    return(
        <Stack direction='row' justifyContent="space-between" alignItems="center" spacing={2}>
      <List>
          <ListItem>
            <img src={blueSlime} alt='blue slime icon'/>
          <ListItemText sx={{marginLeft: '12px'}} primary="Lorem Ipsum is simply dummy text of the printing" />
          </ListItem>
          <ListItem>
          <img src={blackSlime} alt='black slime icon'/>
            <ListItemText sx={{marginLeft: '12px'}} primary="Lorem Ipsum is simply dummy text of the printing" />
          </ListItem>
          <ListItem>
          <img src={jungleSlime} alt='jungle slime icon'/>
            <ListItemText sx={{marginLeft: '12px'}} primary="Lorem Ipsum is simply dummy text of the printing" />
          </ListItem>
        </List>
        <List>
          <ListItem>
          <img src={purpleSlime} alt='purple slime icon'/>
          <ListItemText sx={{marginLeft: '12px'}} primary="Lorem Ipsum is simply dummy text of the printing" />
          </ListItem>
          <ListItem>
          <img src={redSlime} alt='red slime icon'/>
            <ListItemText sx={{marginLeft: '12px'}} primary="Lorem Ipsum is simply dummy text of the printing" />
          </ListItem>
          <ListItem>
          <img src={yellowSlime} alt='yellow slime icon'/>
            <ListItemText sx={{marginLeft: '12px'}} primary="Lorem Ipsum is simply dummy text of the printing" />
          </ListItem>
        </List>
      </Stack>
    )
}
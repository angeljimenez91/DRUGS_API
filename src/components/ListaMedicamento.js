import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const ListaMedicamento = ({ drugs }) => {
  return (
    <List>
      {drugs.map((drug, index) => (
        <ListItem component={Link} to={`/drug/${index}`} key={index}>
          <ListItemText primary={drug.openfda.brand_name ? drug.openfda.brand_name.join(', ') : 'Unknown'} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListaMedicamento;

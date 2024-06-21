import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';

const DrugDetail = ({ drugs }) => {
  const { id } = useParams();
  const drug = drugs[id];

  if (!drug) {
    return <div>Drug not found</div>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {drug.openfda.brand_name ? drug.openfda.brand_name.join(', ') : 'Unknown'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Generic Name: </strong>{drug.openfda.generic_name ? drug.openfda.generic_name.join(', ') : 'Unknown'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Manufacturer: </strong>{drug.openfda.manufacturer_name ? drug.openfda.manufacturer_name.join(', ') : 'Unknown'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Description: </strong>{drug.description || 'No description available'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Indications: </strong>{drug.indications_and_usage || 'No indications available'}
        </Typography>
      </CardContent>
      <Link to="/">
        <Button variant="contained" color="primary">Volver a la lista de medicamentos</Button>
      </Link>
    </Card>
  );
};

export default DrugDetail;

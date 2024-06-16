import { Card, CardContent, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function BoardComponent({name}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const fontSize = isSmallScreen ? '1rem' : isMediumScreen ? '1.5rem' : '1.8rem';

  return (
    <Card 
      sx={{ 
        maxWidth: 345,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)', 
        }
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
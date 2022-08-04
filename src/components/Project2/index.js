import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ThumbnailOne from '../../img/thumbnail-01-devise.png';

const mock = [
  {
    image: `${ThumbnailOne}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    title: 'DEVise Web App',
    site: "https://devise-collaboration-platform.herokuapp.com/",
    author: {
      repo: 'https://github.com/Vik-Maharaj/DEVise',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://www.digitalartsonline.co.uk/cmsdata/features/3674451/lifestyle_working_from_home_10.jpg',
    description: 'Excepteur sint occaecat cupidatat non proident',
    title: 'Sweet Nostalgia Web App',
    site: "https://github.com",
    author: {
      repo: 'https://www.amazon.com',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://www.velocityconsultancy.com/wp-content/uploads/2021/08/web-development.jpg',
    description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    title: 'AiME Web App',
    site: "https://github.com/Vik-Maharaj",
    author: {
      repo: 'https://www.espn.com',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://www.robertsharpassociates.com/assets/images/uploads/web1.jpeg',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    title: 'Fruitbook',
    site: "https://github.com/Vik-Maharaj",
    author: {
      repo: 'https://www.cnn.com',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://lform.com/cms/resources/media/2021/01/custom-web-design-development.jpg',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
    title: 'Team Profile Generator',
    site: "https://github.com/Vik-Maharaj",
    author: {
      repo: 'https://www.abc.com',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-web-development.jpg',
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Code Quiz',
    site: "https://github.com/Vik-Maharaj",
    author: {
      repo: 'https://www.disney.com',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-web-development.jpg',
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Vik Weather Dashboard',
    site: "https://github.com/Vik-Maharaj",
    author: {
      repo: 'https://www.disney.com',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-web-development.jpg',
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Employee Tracker',
    site: "https://github.com/Vik-Maharaj",
    author: {
      repo: 'https://www.disney.com',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-web-development.jpg',
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Note Taker App',
    site: "https://github.com/Vik-Maharaj",
    author: {
      repo: 'https://www.disney.com',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  }
];

const Project2 = () => {
  const theme = useTheme();
  return (
    <Box>
  
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={'a'}
              href={item.site} target="_blank"
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundColor: '#f5f5f5' }}
              >
                <CardMedia
                  image={item.image}
                  title={item.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                  }}
                >
                  <Box
                    component={'svg'}
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      color: theme.palette.background.paper,
                      transform: 'scale(2)',
                      height: 'auto',
                      width: 1,
                      transformOrigin: 'top center',
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="#f5f5f5"
                    />
                  </Box>
                </CardMedia>
                <Box component={CardContent} position={'relative'}>
                  <Typography variant={'h6'} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Box display={'flex'} alignItems={'center'}>
                    <a href={item.author.repo} target="_blank">
                      <Avatar
                        src={item.author.avatar}
                        sx={{ marginRight: 1 }}
                      />
                      </a>
                      <Typography color={'text.secondary'}>
                        <a href={item.author.repo} target="_blank">
                        {item.author.repo}
                        </a>
                      </Typography>
                    </Box>
                    <Typography color={'text.secondary'}>
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Project2;
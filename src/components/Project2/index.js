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
    description: 'Devise is a simple, open-source, web-based application for collaboration, creating, and connecting with people',
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
    description: `A Full-Stack Web Developer's CMS-style E-Commerce Application📚💻 🖥️ . The site is similar to most box subscription model sites, where clients can subscribe to a box subscription of their choice`,
    title: 'Sweet Nostalgia Web App',
    site: "sweet-nostalgia.herokuapp.com",
    author: {
      repo: 'https://github.com/Vik-Maharaj/Sweet-Nostalgia',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://www.velocityconsultancy.com/wp-content/uploads/2021/08/web-development.jpg',
    description: 'A full-stack web application built with Node/Express and using the Model-View-Controller (MVC) paradigm to create a tech-focused blog where users can make posts, edit posts, and comment on other user submissions',
    title: 'AiME Web App',
    site: "aime-news.herokuapp.com",
    author: {
      repo: 'https://github.com/Vik-Maharaj/tech-blog',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://www.robertsharpassociates.com/assets/images/uploads/web1.jpeg',
    description:
      'Team-built interactive frontend project utilizing three different server side REST APIs',
    title: 'Fruitbook',
    site: "vik-maharaj.github.io/fruitbook/",
    author: {
      repo: 'https://github.com/Vik-Maharaj/fruitbook',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://lform.com/cms/resources/media/2021/01/custom-web-design-development.jpg',
    description: 'A Node.js CLI application utilizing Inquirer that takes in user input and generates an HTML webpage',
    title: 'Team Profile Generator',
    site: "https://github.com/Vik-Maharaj/team-profile-generator",
    author: {
      repo: 'https://github.com/Vik-Maharaj/team-profile-generator',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-web-development.jpg',
    description:
      'Frontend quiz app built using JavaScript, CSS, and HTML⁠—about JavaScript',
    title: 'Code Quiz',
    site: "vik-maharaj.github.io/code-quiz/",
    author: {
      repo: 'https://github.com/Vik-Maharaj/code-quiz',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-web-development.jpg',
    description:
      `Simple weather app built using the OpenWeather API, JavaScript, CSS, HTML, and the user's local storage`,
    title: `Vik's Weather Dashboard`,
    site: "vik-maharaj.github.io/weather-dashboard/",
    author: {
      repo: 'https://github.com/Vik-Maharaj/weather-dashboard',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-web-development.jpg',
    description:
      `A CLI application for managing a company's employees using Node.js, Express.js, Inquirer, and MySQL`,
    title: 'Employee Tracker',
    site: "https://github.com/Vik-Maharaj/employee-tracker",
    author: {
      repo: 'https://github.com/Vik-Maharaj/employee-tracker',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-web-development.jpg',
    description:
      `'A Progressive Web Application (PWA) budget tracker that has offline functionality to help track a user's financial transactions built using JS, Node, Express and MongoDB'`,
    title: `Vik's Budget Tracker`,
    site: "vik-budget-tracker.herokuapp.com",
    author: {
      repo: 'https://github.com/Vik-Maharaj/budget-tracker',
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
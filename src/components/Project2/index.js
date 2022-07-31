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

const mock = [
  {
    image: 'https://insights.dice.com/wp-content/uploads/2020/05/shutterstock_1571829487.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    title: 'https://www.google.com',
    site: "https://github.com/Vik-Maharaj",
    author: {
      repo: 'https://msn.com',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
  {
    image: 'https://www.digitalartsonline.co.uk/cmsdata/features/3674451/lifestyle_working_from_home_10.jpg',
    description: 'Excepteur sint occaecat cupidatat non proident',
    title: 'Consectetur adipiscing elit',
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
    title: 'Labore et dolore magna aliqua',
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
    title: 'Eiusmod tempor incididunt',
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
    title: 'Sed ut perspiciatis',
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
    title: 'Unde omnis iste natus',
    site: "https://github.com/Vik-Maharaj",
    author: {
      repo: 'https://www.disney.com',
      avatar: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    date: '',
  },
];
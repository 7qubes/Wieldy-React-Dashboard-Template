import React from "react";
import {Avatar} from "antd";

const userImageList = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",

  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals'
  },
]

export const aboutList = [
  {
    id: 1,
    title: 'Current working',
    icon: 'close-circle',
    userList: '',
    desc: ['Project X']
  },
  {
    id: 2,
    title: 'Future Project',
    icon: 'calendar',
    userList: '',
    desc: ['Project Z']
  },
  {
    id: 3,
    title: 'Pass Project',
    icon: 'growth',
    userList: '',
    desc: ['Project W']
  },
  {
    id: 4,
    title: 'Due Dates',
    icon: 'hotel-booking',
    userList: '',
    desc: ['Jan 20 2021']
  },
  {
    id: 5,
    title: 'Ratings',
    icon: 'eye',
    userList: '',
    desc: '5/5'
  },
];

export const eventList = [
  {
    id: 1,
    image: "https://via.placeholder.com/575X480",
    title: 'Sundance Film Festival.',
    address: 'Downsview Park, Toronto, Ontario',
    date: 'Feb 23, 2019',
  },
  {
    id: 2,
    image: "https://via.placeholder.com/575X480",
    title: 'Underwater Musical Festival.',
    address: 'Street Sacramento, Toronto, Ontario',
    date: 'Feb 24, 2019',
  },
  {
    id: 3,
    image: "https://via.placeholder.com/575X480",
    title: 'Village Feast Fac',
    address: 'Union Street Eureka',
    date: 'Oct 25, 2019',
  }
];

export const contactList = [
  {
    id: 1,
    title: 'Email',
    icon: 'email',
    desc: [<span className="gx-link" key={1}>kiley.brown@example.com</span>]
  },
  {
    id: 2,
    title: 'Web page',
    icon: 'link',
    desc: [<span className="gx-link" key={2}>example.com</span>]
  }, {
    id: 3,
    title: 'Phone',
    icon: 'phone',
    desc: ['+1-987 (454) 987']
  },
];

export const friendList = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: 'Chelsea Johns',
    status: 'online'

  },
  {
    id: 2,
    image:"https://via.placeholder.com/150",
    name: 'Ken Ramirez',
    status: 'offline'
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: 'Chelsea Johns',
    status: 'away'

  },
  {
    id: 4,
    image:"https://via.placeholder.com/150",
    name: 'Ken Ramirez',
    status: 'away'
  },
];

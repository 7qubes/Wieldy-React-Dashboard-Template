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

export const workList = [
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
export const overviewList = [
  {
    id: 1,
    title: 'Works At',
    icon: 'company',
    userList: '',
    desc: ['G-axon Tech Pvt.Ltd']
  },
  {
    id: 2,
    title: 'Birthday',
    icon: 'birthday-new',
    userList: '',
    desc: ['Oct 25, 1984']
  },
  {
    id: 3,
    title: 'Went to',
    icon: 'graduation',
    userList: '',
    desc: ['Oxford University']
  },
  {
    id: 4,
    title: 'Lives in',
    icon: 'home',
    userList: '',
    desc: ['From Switzerland']
  },
  {
    id: 5,
    title: '4 Family Members',
    icon: 'family',
    userList: [<ul className="gx-list-inline gx-mb-0" key={1}>
      {userImageList.map((user, index) =>
        <li className="gx-mb-2" key={index}>
          <Avatar className="gx-size-30" src={user.image}/>
        </li>
      )
      }
    </ul>],
    desc: ''
  },
];
export const equipmentList = [
  {
    id: 1,
    title: 'Desktop',
    icon: 'data-display',
    userList: '',
    desc: ['Dell-145736']
  },
  {
    id: 2,
    title: 'laptop',
    icon: 'keyboard',
    userList: '',
    desc: ['Dell-64242']
  },
  {
    id: 3,
    title: 'Vehicle',
    icon: 'dasbhoard',
    userList: '',
    desc: ['Tesla Model 3-14']
  },
  {
    id: 4,
    title: 'Iphone',
    icon: 'phone',
    userList: '',
    desc: ['Apple-67483']
  },
  {
    id: 5,
    title: 'Camera',
    icon: 'camera',
    userList: '',
    desc: ['Cannon-9986']
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

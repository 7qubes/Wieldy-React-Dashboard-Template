import React from "react";

import Metrics from "components/Metrics";
import {Avatar} from "antd";

const userImageList = [
  {
    id: 1,
    image: "/src/assets/images/customer_1.jpg",
  },
  {
    id: 2,
    image: "assets/images/customer_2.jpg",
  },
  {
    id: 3,
    image: "assets/images/customer_3.jpg",

  }
]

const NewCustomers = () => {
  return (
    <Metrics title="NEW CUSTOMERS">
      <div className="gx-customers">
        <ul className="gx-list-inline gx-customers-list gx-mb-0">
          {userImageList.map((user, index) =>
            <li className="gx-mb-2" key={index}>
              <Avatar src={user.image}/>
            </li>
          )
          }
        </ul>
      </div>
    </Metrics>
  );
};


export default NewCustomers;

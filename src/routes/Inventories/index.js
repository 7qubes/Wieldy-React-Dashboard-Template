import React from "react";
import { Layout } from "antd";
import {
  Configure,
  connectHits,
  connectStateResults,
  InstantSearch,
  Pagination,
  Stats,
} from "react-instantsearch-dom";
import { withUrlSync } from "./urlSync";
import "instantsearch.css/themes/algolia.css";
//import './style.css'
import Header from "./Header";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import ProductList from "./ProductList";
import algoliasearch from "algoliasearch/lite";

import { Redirect, Route, Switch } from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const { Content } = Layout;

// const searchClient = algoliasearch(
//   'latency',
//   '6be0576ff61c053d5f9a3225e2a90f76'
// );

// const App = props => (
//   <InstantSearch className="gx-main-content"
//                  indexName="ikea"
//                  searchState={props.searchState}
//                  createURL={props.createURL}
//                  searchClient={searchClient}
//                  onSearchStateChange={props.onSearchStateChange}>

//     <Configure hitsPerPage={16}/>

//     <Layout className="gx-algolia-layout-has-sider">
//       <Sidebar/>
//       <div className="gx-algolia-main">
//         <Header/>
//         <Content className="gx-algolia-content">
//           <CustomResults/>
//         </Content>
//         <Footer>
//           <Pagination showLast={true}/>
//         </Footer>
//       </div>
//     </Layout>
//   </InstantSearch>
// );

// const CustomResults = connectStateResults(({searchState, searchResult}) => {
//   if (searchResult && searchResult.nbHits === 0) {
//     return (
//       <div className="gx-algolia-content-inner">
//         <div className="gx-algolia-no-results">
//           No results found matching{' '}
//           <span className="gx-algolia-query">{searchState.query}</span>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="gx-algolia-content-inner">
//         <Stats/>
//         <ConnectedProducts/>
//       </div>
//     );
//   }
// });

// const ConnectedProducts = connectHits(ProductList);

// export default withUrlSync(App);

const Inventories = ({ match }) => {
  console.log("Hello - ", match);
  return (
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/eshop`} />
      <Route
        exact
        path={`${match.url}/eshop`}
        component={asyncComponent(() => import("./EShop"))}
      />
      <Route
        exact
        path={`${match.url}/bom/testtable`}
        component={asyncComponent(() => import("./BOM/TestTablesRoute"))}
      />
      <Route
        exact
        path={`${match.url}/bom/dashboard`}
        component={asyncComponent(() => import("./BOM/Dashboard"))}
      />
      <Route
        exact
        path={`${match.url}/bom`}
        component={asyncComponent(() => import("./BOM"))}
      />
      <Route
        exact
        path={`${match.url}/orders/vendors`}
        component={asyncComponent(() => import("./Order/Vendors"))}
      />
      <Route
        exact
        path={`${match.url}/orders/suppliers`}
        component={asyncComponent(() => import("./Order/Suppliers"))}
      />
    </Switch>
  );
};

export default Inventories;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
 
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
 
class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
   const { isCollectionFetching } = this.props;
 
    return (
      <div className="shop-page">
        <Routes>
          <Route path="/" element={<CollectionsOverviewWithSpinner isLoading={isCollectionFetching}{...this.props}/>
          }/>
          <Route path=":collectionId" element={<CollectionPageWithSpinner isLoading={isCollectionFetching} {...this.props} />}/>
        </Routes>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
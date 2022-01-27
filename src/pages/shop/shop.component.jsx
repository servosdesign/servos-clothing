import React from 'react';
import { Routes, Route } from 'react-router-dom';
 
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
 
class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
   const { isCollectionsLoaded, isCollectionsFetching } = this.props;
 
    return (
      <div className="shop-page">
        <Routes>
          <Route path="/" element={<CollectionsOverviewWithSpinner isLoading={isCollectionsFetching}{...this.props}/>
          }/>
          <Route path=":collectionId" element={<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...this.props} />}/>
        </Routes>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
 
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart, props }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverviewContainer {...props}/>
        }/>
        <Route path=":collectionId" element={<CollectionPageContainer  {...props} />}/>
      </Routes>
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
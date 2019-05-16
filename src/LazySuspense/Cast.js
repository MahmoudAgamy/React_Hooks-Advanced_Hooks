import React, { Suspense } from 'react';
import { fakeImportComponent } from './Helpers';

const CastItem = ({ children }) => (
  <div className="CastItem">{children}</div>
);
const CastItemLazy = React.lazy(() =>
  fakeImportComponent(props => <CastItem {...props} />, 200)
);

const SeeAllCast = () => (
  <button style={{ fontSize: '20px' }}>
    See All (42) Cast
  </button>
);
const SeeAllCastLazy = React.lazy(() =>
  fakeImportComponent(() => <SeeAllCast />, 1000)
);

const cast = ['JavaScript', 'JSX', 'Hooks', 'Suspense'];

export default () => (
  <div>
    <b>Cast</b>
    <Suspense fallback={'This is so slow...'}>
      <div className="Cast">
        {cast.map(castItem => (
          <CastItemLazy key={castItem}>
            {castItem}
          </CastItemLazy>
        ))}
      </div>

      <SeeAllCastLazy />
    </Suspense>
  </div>
);

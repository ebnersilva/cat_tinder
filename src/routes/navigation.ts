import * as React from 'react';

export const navigationRef: any = React.createRef();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
};

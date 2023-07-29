import RootLayout from '@/components/RootLayout';
import React from 'react'

const StorageAndDevice = () => {
  return (
    <div>StorageAndDevice</div>
  )
}

export default StorageAndDevice;


StorageAndDevice.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
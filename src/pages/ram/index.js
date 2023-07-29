import RootLayout from '@/components/RootLayout';
import React from 'react'

const RamPages = () => {
  return (
    <div>RamPages</div>
  )
}

export default RamPages;


RamPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
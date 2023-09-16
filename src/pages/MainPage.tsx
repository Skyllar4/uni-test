import React from 'react'
import Header from '../Components/Header/Header'
import Layout from '../Components/Layout/Layout'
import Banner from '../Components/Banner/Banner'
import BannerDescription from '../Components/Banner/BannerDescription/BannerDescription'
import Planet from '../Components/Banner/Planet/Planet'
import Stats from '../Components/Banner/Stats/Stats'
import DataSection from '../Components/DataSection/DataSection'
import Register from '../Components/DataSection/Register/Register'
import UsersTable from '../Components/DataSection/UsersTable/UsersTable'

export default function MainPage() {
  return (
    <>
        <Header />

        <Layout>

            <Banner>
              <BannerDescription />
              <Planet />
              <Stats />
            </Banner>

            <DataSection>
                <Register />
                <UsersTable />
            </DataSection>

        </Layout>

    </>
  )
}

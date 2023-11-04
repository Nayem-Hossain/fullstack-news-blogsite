import Footer from '@/components/footer/Footer';
import Navigationbar from '@/components/header/Navigationbar';
import React, { Fragment } from 'react';


const HomeLayout = (props) => {
    return (
        <Fragment>
            <Navigationbar />
            {props.children}
            <Footer />
        </Fragment>
    );
};

export default HomeLayout;
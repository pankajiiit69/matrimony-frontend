import React from 'react';
import MyCard from './MyCard';

export default function CardsContainer() {
    return (
        <div class="album py-5 bg-body-tertiary">
            <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <MyCard thumbnail='t1' subTitle='Profile A' description='Groom A Profile'/>
                    </div>
                    <div class="col">
                        <MyCard subTitle='Profile B' description='Groom B Profile'/>
                    </div>
                    <div class="col">
                        <MyCard thumbnail='t3' subTitle='Profile C' description='Groom C Profile'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

export default function MyCard({ thumbnail = 'Default Thumbnail', subTitle, description }) {
    let a = 2;
    let b = 3;
    let c = a + b;
    subTitle = 'new value'
    

    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{c}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{subTitle}</h6>
                <p class="card-text">{description}</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    );
}

import React from 'react';

export default function Section() {
    return (
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Matrimonial App</h1>
                    <p className="lead text-body-secondary">A Matrimonial App development is in progress</p>
                    <p>
                        <button type="button" className="btn btn-primary">Primary</button>
                        <button type="button" className="btn btn-danger">Danger</button>
                    </p>
                </div>
            </div>
        </section>
    );
}

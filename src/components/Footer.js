import React from 'react';
import { UserAuthContext } from '../context/UserAuthContext';

export default function Footer() {
    const {auth} = React.useContext(UserAuthContext);

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p>AuthToken: {auth?.authToken}</p>
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted">© 2021 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use  href="#twitter"></use></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                </ul>
            </footer>
        </div>
    );
}

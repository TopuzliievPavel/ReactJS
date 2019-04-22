import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles.scss';


export class UserComponent extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Col xs="12" sm="6" md="4" lg="3" className="user-info">
        <div className="user-holder">
          <div className="holder-img">
            <img src={user.avatar_url} alt="user"/>
          </div>
          <Link to={`user/${user.login}`}>
            <div className="user-content">
              <h2>{`User login - ${user.login}`}</h2>
              <h4>Web developer</h4>
            </div>
          </Link>
        </div>
      </Col>
    )
  }
}

UserComponent.propTypes = {
  user: PropTypes.object
}
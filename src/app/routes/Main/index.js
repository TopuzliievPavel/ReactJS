import React from "react";
import { UserComponent } from "./userComponent";
import { Container, Row, Alert, Col, Button } from "reactstrap";
import "./styles.scss";
import axios from "axios";

export class Main extends React.Component {

  state = {
    users: [],
    error: null,
    sort: undefined
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users")
      .then(response => {
        const { data } = response;
        this.setState({ users: data });
      })
      .catch(err => this.setState({ error: err }));
  }

  sortItems = () => {
    const { users, sort } = this.state;
    let sortedUsers = [...users];
    let sortDirection = sort;

    if(!sortDirection){
      sortedUsers = sortedUsers.sort((a, b) => {
        const firstLogin = a.login.toLowerCase();
        const secondLogin = b.login.toLowerCase();
  
        if (firstLogin > secondLogin) {
          return 1;
        }
        if (firstLogin < secondLogin) {
          return -1;
        }
        return 0;
      });
      sortDirection = 'ASC';
    } else {
      sortedUsers = sortedUsers.reverse();
      sortDirection = 'DESC';
    }
    
    this.setState({ users: sortedUsers, sort: sortDirection });
  };

  render() {
    const { users, error } = this.state;
    const { history } = this.props;
    const errorComponent = error ? (
      <Alert color="danger">Something wrong</Alert>
    ) : null;
    return (
      <main className="main" onClick={this.onclickHandler}>
        {errorComponent}
        <Container>
          <Row>
            <Col className="sort-control">
<<<<<<< HEAD
              <Button className="btn btn-main" color="secondary" onClick={ this.sortItems }>Sort</Button>
=======
              <Button color="primary" onClick={ this.sortItems }>Sort</Button>
>>>>>>> d68f96e93bd5ab7f98ea13d7ee546bfad88c1719
            </Col>
          </Row>
          <Row className="user-info-row">
            {users.map((user, id) => (
              <UserComponent user={user} key={id} history={history}/>
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

import React from 'react';
import { Container, Row, Col, Spinner, Table } from 'reactstrap';
import axios from 'axios';
import '../UserPage/styles.scss';

export class UserPage extends React.Component {

  state = {
    user: null,
    repos: []
  };

  componentDidMount() {
    const { login } = this.props.match.params;
    if(login) {
      Promise.all([   
        axios.get(`https://api.github.com/users/${login}`),
        axios.get(`https://api.github.com/users/${login}/repos`)
      ]).then(([userResponse, reposResponse]) => {
        this.setState({ user: userResponse.data, repos: reposResponse.data })
      })
      .catch(err => this.props.history.push('/404'));
    }
  }

  sortItems = id => {
    switch (id) {
      case "id": 
        const sortedItems = this.state.repos.sort((a,b) => {
          return a.id - b.id;
        });
        this.setState({ repos: sortedItems });
        break;
      case "name":
      case "language":
        this.setState({ repos: this.state.repos.sort() });
        break;
      case "createdAt":
      default:
        break;
    }
  }

  render() {
    const { user, repos } = this.state;
 
    if(!user) {
      return <Spinner color="secondary" />;
    }
    return (
      <div className="userPage-main">
        <Container>
          <Row>
<<<<<<< HEAD
            <Col className="user-page-col-decsr">
              <div className="userPage-holder-img">
                <img src={user.avatar_url} alt='github'></img>
              </div>
              <div className="user-page-descr">
=======
            <Col>
              <div className="userPage-holder-img">
                <img src={user.avatar_url} alt='github'></img>
              </div>
              <div className="user-descr">
>>>>>>> d68f96e93bd5ab7f98ea13d7ee546bfad88c1719
              <h2>{user.name}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, et eam putent dissentiet definitiones. Cetero audiam voluptua in sit. Velit ocurreret et pro, cum eu perfecto expetendis conclusionemque, sit sint aliquam cu. Denique inciderint mel te, vix alia ignota contentiones at. Duo facilisi perpetua maluisset at, ex doctus admodum vis, ea fabellas temporibus mel. Et laoreet praesent quo, magna iudico sed in. Adhuc porro docendi cu ius, ut eum unum wisi iusto, sed veri reque at.

                Luptatum theophrastus definitiones id nam, porro nemore constituam vix et, omnes accusata nominati at mei. At nec lucilius deseruisse, usu affert graeco aliquando at. Cu mea tacimates cotidieque. Docendi oporteat honestatis ius ea, ne vix lorem legere volutpat, te est viderer accusata delicatissimi. Ius ad probatus reformidans, cu sed error virtute. Vix option malorum te, ei est reque cetero bonorum. Duo id vero legimus, vix maluisset conceptam an.

                Aperiri suscipiantur ut mei, ius te habeo vocibus suscipiantur, cu eam malis persius definiebas. Ut ipsum consequuntur eum, ea sea dicunt imperdiet comprehensam. Cu mei brute libris. Vel eros adipiscing incorrupte te, eros salutandi euripidis has ut, no zril ocurreret has.
<<<<<<< HEAD
                </p>
              </div>
            </Col>
          </Row>
          <Row className="user-page-row">
              <Col className="user-page-holder" xs="12" sm="6" md="4" lg="4">
                <div className="user-box">
                    <div className="user-page-icon">
                      <i className="fas fa-building"></i>
                    </div>
                    <div className="user-page-details">
                      <h3>Company: {user.company}</h3>
                    </div>
                </div>
              </Col>

              <Col className="user-page-holder" xs="12" sm="6" md="4" lg="4">
                <div className="user-box">
                  <div className="user-page-icon">
                    <i className="fas fa-user-friends"></i>
                  </div>
                  <div className="user-page-details">
                    <h3>{user.following}</h3>
                  </div>
                </div>
              </Col>

              <Col className="user-page-holder" xs="12" sm="6" md="4" lg="4">
                <div className="user-box">
                  <div className="user-page-icon">
                    <i className="fas fa-laptop"></i>
                  </div>
                  <div className="user-page-details">
                    <h3>{user.blog}</h3>
                  </div>
                </div>
              </Col>

              <Col className="user-page-holder" xs="12" sm="6" md="4" lg="4">
                <div className="user-box">
                  <div className="user-page-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="user-page-details">
                    <h3>{user.followers}</h3>
                  </div>
                </div>
              </Col>

              <Col className="user-page-holder" xs="12" sm="6" md="4" lg="4">
                <div className="user-box">
                  <div className="user-page-icon">
                    <i className="fas fa-map-marker"></i>
                  </div>
                  <div className="user-page-details">
                    <h3>{user.location}</h3>
                  </div>
                </div>
              </Col>

              <Col className="user-page-holder" xs="12" sm="6" md="4" lg="4">
                <div className="user-box">
                  <div className="user-page-icon">
                    <i className="fas fa-sign-in-alt"></i>
                  </div>
                  <div className="user-page-details">
                    <h3>{user.login}</h3>
                  </div>
                </div>
              </Col>
=======

                Nostrud torquatos eu his, ei inani possim ius. Qui ea eros equidem principes. Vim dictas appetere eu, ei has dico solum aperiri, eum cu prompta scripserit. Ullum dolorum interpretaris ex usu, altera tincidunt referrentur ei cum. Te diam ludus eum. Vim nisl assueverit ei, eum augue veniam in, mel dolor qualisque ex.

                Per eu graeci concludaturque, et nam rebum forensibus definitionem. Nemore omnium diceret eu sed, sea in eius ceteros. No cum soluta insolens, no eius labores eam. Et mea quidam quaeque legendos, debet imperdiet duo at. Tale copiosae abhorreant ad sea, ei has habeo minimum, cu adipisci molestiae mnesarchum est.
                </p>
              </div>

              <div className="user-inform">

                <div className="user-box">
                    <div className="user-icon">
                      <i className="fas fa-building"></i>
                    </div>
                    <div className="user-content">
                      <h3>Company: {user.company}</h3>
                    </div>
                </div>

                {/* <div className="user-box">
                  <div className="user-box-holder">
                    <div className="user-icon">
                      <i className="fas fa-user-friends"></i>
                    </div>
                    <div className="user-content">
                      <h3>{user.following}</h3>
                    </div>
                  </div>
                </div>

                <div className="user-box">
                  <div className="user-box-holder">
                    <div className="user-icon">
                      <i className="fas fa-laptop"></i>
                    </div>
                    <div className="user-content">
                      <h3>{user.blog}</h3>
                    </div>
                  </div>
                </div>

                <div className="user-box">
                  <div className="user-box-holder">
                    <div className="user-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="user-content">
                      <h3>{user.followers}</h3>
                    </div>
                  </div>
                </div>

                <div className="user-box">
                  <div className="user-box-holder">
                    <div className="user-icon">
                      <i className="fas fa-map-marker"></i>
                    </div>
                    <div className="user-content">
                      <h3>{user.location}</h3>
                    </div>
                  </div>
                </div>

                <div className="user-box">
                  <div className="user-box-holder">
                    <div className="user-icon">
                      <i className="fas fa-sign-in-alt"></i>
                    </div>
                    <div className="user-content">
                      <h3>{user.login}</h3>
                    </div>
                  </div>
                </div> */}

              </div>
            </Col>
>>>>>>> d68f96e93bd5ab7f98ea13d7ee546bfad88c1719
          </Row>
          <Row>
            <Col>
            <h3>Repositories</h3>
              <Table responsive bordered hover>
                <thead>
                  <tr>
                    <th onClick={ this.sortItems.bind(this, "id") }>#</th>
                    <th onClick={ this.sortItems.bind(this, "name") }>Name:</th>
                    <th onClick={ this.sortItems.bind(this, "language") }>Language:</th>
                    <th onClick={ this.sortItems.bind(this, "createdAt") }>Created at</th>
                    <th onClick={ this.sortItems.bind(this, "default") }>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {repos.map(rep => (
                    <tr key={rep.id}>
                      <th scope="row">{rep.id}</th>
                      <td>{rep.name}</td>
                      <td>{rep.language}</td>
                      <td>{rep.created_at}</td>
                      <td>{rep.description}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
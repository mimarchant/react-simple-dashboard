import { Col, Row } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/Navbar';

import Dashboard from '../views/Dashboard';
import PeopleList from '../views/PeopleList';

function Routes() {
  return (
    <BrowserRouter>
            <Row>
            <Col xs={24}>
                <NavBar />
            </Col>
        </Row>
      <Switch>
        <Route exact path='/' component={Dashboard} />
      </Switch>
      <Switch>
        <Route exact path='/people' component={PeopleList} />
      </Switch>

    </BrowserRouter>
  );
}

export default Routes;

import axios from "axios";
import { Card, Col, Divider, Row } from "antd";
import React, { useEffect, useState } from "react";
import "../assets/styles/DetallePersona.css";

function DetallePersona(props) {
  const { Meta } = Card;
  const { match } = props;
  const [user, setUser] = useState(null);
  const url = `https://jsonplaceholder.typicode.com/users/${match.params.id}`;

  function fetchData(url) {
    axios({
      method: "GET",
      url: url,
    })
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <Row gutter={20}>
        <Col xs={24} sm={24} lg={24} className="imgRow">
          {!!user && (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                />
              }
            >
              <Meta title={user.name} description={user.username} />
            </Card>
          )}
        </Col>
      </Row>
      <Divider />
      <Row gutter={10}>
        {!!user && (
          <>
            <Col xs={24} sm={12} lg={4}>
              <Card title={"Email"}>
                <p>{user.email}</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={4}>
              <Card title={"Phone"}>
                <p>{user.phone.substring(0, 13)}</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={4}>
              <Card title={"Website"}>
                <p>{user.website}</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={4}>
              <Card title={"Address"}>
                <p>{`${user.address.street.substring(
                  0,
                  13
                )}, ${user.address.city.substring(0, 4)}...`}</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={4}>
              <Card title={"Company"}>
                <p>{user.company.name}</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={4}>
              <Card title={"Company Motto"}>
                <p>{`${user.company.catchPhrase.substring(0, 13)}...`}</p>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </>
  );
}

export default DetallePersona;

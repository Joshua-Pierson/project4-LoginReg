import React from "react";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import axios from "axios";

export default function Categorypage() {
  // This component will display the categories in a table format
  // You can fetch the categories from the server and map them to table rows
  const [categories, setCategories] = useState([]);

    useEffect(() => {
    async function fetchCategories () {
      console.log ( "Fetching category from db ...")
      const response = await axios.get ('http://localhost:4000/categories/')
      setCategories (response.data)
    }  
    fetchCategories();
  }, [])

  const [questions, setQuestions] = useState([]);
      useEffect(() => {
    async function fetchQuestions () {
      console.log ( "Fetching questions from db ...")
      const response = await axios.get ('http://localhost:4000/questions/')
      setQuestions (response.data)
    }  
    fetchQuestions();
  }, [])
  
 return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action {...categories[0].category_id} href="#link1">
              {categories[0].category_name}
            </ListGroup.Item>
            <ListGroup.Item action {...categories[1].category_id} href="#link2">
              {categories[1].category_name}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>
            <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
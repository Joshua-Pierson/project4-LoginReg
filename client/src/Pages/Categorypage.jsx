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
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link0">
      <Row>
        <Col sm={4}>
          <ListGroup>
            {categories.map((category, index) => (
              <ListGroup.Item className="custom-list-item"
                key={category.category_id}
                action
                href={`#link${index}`}
              >
                {category.category_name}
                
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content className="p-3 shadow-sm rounded bg-light">
            {categories.map((category, index) => (
              <Tab.Pane eventKey={`#link${index}`} key={`pane-${category.category_id}`}>
                <h2 className="text-primary">{category.category_name}</h2>
                <p className="text-muted">{category.description}</p>
                <ul className="question-list">
                  {questions
                    .filter((q) => q.category_id === category.category_id)
                    .map((q) => (
                      <li key={q.question_id}>
                        <strong>Q:</strong> {q.question_text}<br />
                        <strong>A:</strong> {q.question_ans}
                      </li>
                    ))}
                </ul>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
         
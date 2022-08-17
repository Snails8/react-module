import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { BasePage } from '../../components/templates/BasePage/BasePage';

export const Dashboard: React.FC = () => {
    const [message, setMessage] = useState("")
  
    useEffect(() => {
      fetch('/api/v1/', {
        method: 'GET', 
      })
      .then(res => res.json() )
      .then(data => {setMessage(data)})
    }, [])
  
    console.log(message)

    const navigate = useNavigate()

    const params: string = createSearchParams({
      name: "sample",
      type: "test"
    }).toString();

    return (
        <>
          <BasePage>
            <h1>Sample Home</h1>
            <nav>
              <ul>
                <li><Link to="training">Training</Link></li>
                <li><Link to="page2">Sample Page2</Link></li>
                <li><Link to="page2?name=鈴木&type=test">Sample Page2 With Query1</Link></li>
                <li><Link to={`page2?${params}`}>Sample Page2 With Query2</Link></li>
                <li><Link to="page3">Sample Page3 props</Link></li>
                <li><Link to="page4">Sample Page4</Link></li>
              </ul>

              {Math.round(123.456 * 100) /100 }
              <button onClick={() => navigate("page1")}>SamplePage1</button>
            </nav>  
          </BasePage>
        </>  
    )
}
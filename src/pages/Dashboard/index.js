import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import api from '../../services/api'
import { gql } from '@apollo/client';
import { parseISO, format } from 'date-fns'

import './styles.css'


function Dashboard() {
    const [list, setList] = useState([])

    const query = `{
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          details
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            flickr_images
          }
        }
      }
    `

    useEffect(() => {
        api.query({
          query: gql`${query}`
        })
        .then(result => setList(result.data.launchesPast));
    }, [])

    return (
        <Container className="dashboard">
            {list.map(launch => {
                return (
                    <Card className="card" key={launch.id}>
                        <Card.Header className="card-header">
                            <Link className="link" to={ {pathname:'/mission', data: launch} } >
                            <h1>{launch.mission_name}</h1>
                            </Link>
                        </Card.Header>
                        <Card.Body className="card-body">
                            {launch.details}
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            {format(parseISO(launch.launch_date_local), "dd/mm/yyyy")}
                        </Card.Footer>
                    </Card>                    
                )
            })}
        </Container>
    )
}

export default Dashboard
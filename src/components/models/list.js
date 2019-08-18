import React from 'react'
import { FormattedMessage } from 'react-intl'
import Button from '@material-ui/core/Button'
import Avatar from '../avatar'
import { Link } from 'gatsby'
import NoModel from '../no-model'

const ModelList = props => {
  const styles = {
    model: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    name: {
      wordWrap: 'anywhere',
      margin: 0,
      padding: 0
    },
    notes: {
      wordWrap: 'anywhere',
      margin: 0,
      padding: 0
    },
    avatar: {
      height: "64px",
      width: "64px",
      padding: "8px",
    }
  }
  if (props.app.frontend.tablet) styles.model.width = 'calc(33% - 1rem)'
  if (props.app.frontend.mobile) styles.model.width = 'calc(50% - 1rem)'

  return (
    <React.Fragment>
        {Object.keys(props.app.models).length > 0 ? (
          Object.keys(props.app.models).map((handle, model) => {
            return (
              <div className="box" key={handle}>
                <Link to={'/models/' + handle} title={props.app.models[handle].name}>
                  <div style={styles.model}>
                    <div style={styles.avatar}>
                      <Avatar variant="model" data={props.app.models[handle]} />
                    </div>
                    <div>
                      <h6 style={styles.name}>{props.app.models[handle].name}</h6>
                      <p style={styles.notes}>{props.app.models[handle].notes}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        ) : (
          <NoModel />
        )}
      <p style={{ textAlign: 'right' }}>
        <Button size="large" variant="contained" color="primary" href="/model">
          <FormattedMessage id="app.newModel" />
        </Button>
      </p>
    </React.Fragment>
  )
}

export default ModelList

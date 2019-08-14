import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

class UserHeader extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchUser(this.props.userId)
  }


  render(){
    const {user} = this.props;

      if(!user) {
        return null;
      }

    return (
      <div className="header">{user.name}</div>
    )
  }
}
  // ownProps is specific to mapStateToProps
const mapStateToProps = (state, ownProps) => {
  // console.log(state.users);
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(
  mapStateToProps,
   { fetchUser }
 )(UserHeader);

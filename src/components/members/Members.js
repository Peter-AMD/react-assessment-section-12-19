import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMembers } from '../../redux/actions';

class Members extends Component {

  componentDidMount() {
    this.props.fetchMembers();
    
  }
  renderMemberList() {
    return this.props.members.map(member => {
      const {
        id,
        name,
        company,
      } = member;
      const imageSrc = `https://picsum.photos/id/${id + 230}/200/300`;
      const alt = `random-image-${id}`;
      return (
        <Link key={id} to={`/posts/${id}`} className="card" style={{margin: '30px'}}>
            <div className="image">
            <img src={imageSrc} alt={alt}/>
            </div>
            <div className="content">
              <div className="header">{name}</div>
              <div className="description">
              <h4>Company: <span style={{fontWeight: '400'}}>{company.name}</span></h4>
                  <p><i>"{company.catchPhrase}"</i></p>
              </div>
            </div>
          </Link>
      );
    })
  }
  render() {
    return (
      <Fragment>
        <h1 className="ui horizontal divider header" style={{marginTop: '20px', marginBottom: '20px',}}>
            Members
        </h1>
        <div className="ui link cards">
          {this.renderMemberList()}
        </div>
      </Fragment>);
    ;
  }
}

const mapStateToProps = (state) => {
  const { members } = state;
  return { members }
}
export default connect(mapStateToProps, { fetchMembers })(Members);
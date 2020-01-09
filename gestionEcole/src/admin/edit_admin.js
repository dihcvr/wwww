import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";

export default class EditAdmin extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeCin = this.onChangeCin.bind(this);
    this.onChangePost = this.onChangePost.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      nom: "",
      prenom: "",
      cin: "",
      password: "",
      post: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/admin/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          nom: response.data.nom,
          prenom: response.data.prenom,
          cin: response.data.cin,
          password: response.data.password,
          post: response.data.post
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onChangeNom(e) {
    this.setState({
      nom: e.target.value
    });
  }
  onChangePrenom(e) {
    this.setState({
      prenom: e.target.value
    });
  }
  onChangeCin(e) {
    this.setState({
      cin: e.target.value
    });
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangePost(e) {
    this.setState({
      post: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const admin = {
      username: this.state.username,
      nom: this.state.nom,
      prenom: this.state.prenom,
      cin: this.state.cin,
      password: this.state.password,
      post: this.state.post
    };

    console.log(admin);

    axios
      .post(
        "http://localhost:5000/admin/update/" + this.props.match.params.id,
        admin
      )
      .then(res => console.log(res.data));

    window.location = "/list-admin";
  }
  render() {
    return (
      <div>
        <br />
        <Row>
          <Col sm="1"></Col>
          <Col sm="7">
            <h3>Edit Admin</h3>
          </Col>
        </Row>
        <br />
        <form onSubmit={this.onSubmit}>
          <Row>
            <Col sm="1"></Col>
            <Col sm="5">
              <div className="form-group">
                <label>Nom: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.nom}
                  onChange={this.onChangeNom}
                />
              </div>
            </Col>
            <Col sm="1"></Col>
            <Col sm="5">
              <div className="form-group">
                <label>Prenom: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.prenom}
                  onChange={this.onChangePrenom}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="1"></Col>
            <Col sm="5">
              <div className="form-group">
                <label>Cin: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.cin}
                  onChange={this.onChangeCin}
                />
              </div>
            </Col>
            <Col sm="1"></Col>
            <Col sm="5">
              <div className="form-group">
                <label>Post: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.post}
                  onChange={this.onChangePost}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="1"></Col>
            <Col sm="5">
              <div className="form-group">
                <label>Username: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
            </Col>
            <Col sm="1"></Col>
            <Col sm="5">
              <div className="form-group">
                <label>Password: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="6"></Col>

            <Col sm="1"></Col>
            <Col sm="5">
              <div className="form-group">
                <input type="submit" required value="Edit  Admin Log    " />
              </div>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}
